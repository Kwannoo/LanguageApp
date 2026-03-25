import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase.js';
import Avatar from './Avatar.jsx';

export default function FriendsScreen({ user, onBack }) {
  const [searchQuery, setSearchQuery]     = useState('');
  const [searchResult, setSearchResult]   = useState(null);  // profile | null | 'not_found'
  const [searching, setSearching]         = useState(false);
  const [friends, setFriends]             = useState([]);
  const [incoming, setIncoming]           = useState([]);
  const [outgoing, setOutgoing]           = useState([]);
  const [loading, setLoading]             = useState(true);

  const loadFriends = useCallback(async () => {
    // All accepted or pending requests involving this user
    const { data: rows } = await supabase
      .from('friend_requests')
      .select('id, from_user_id, to_user_id, status');

    if (!rows) return;

    const accepted = rows.filter(r => r.status === 'accepted');
    const pending  = rows.filter(r => r.status === 'pending');

    // Get unique peer IDs for accepted friends
    const friendIds = accepted.map(r =>
      r.from_user_id === user.id ? r.to_user_id : r.from_user_id
    );
    // IDs of users who sent us a pending request
    const incomingRows = pending.filter(r => r.to_user_id === user.id);
    const incomingIds  = incomingRows.map(r => r.from_user_id);
    // IDs of users we sent a pending request to
    const outgoingRows = pending.filter(r => r.from_user_id === user.id);
    const outgoingIds  = outgoingRows.map(r => r.to_user_id);

    const allIds = [...new Set([...friendIds, ...incomingIds, ...outgoingIds])];
    if (allIds.length === 0) {
      setFriends([]); setIncoming([]); setOutgoing([]);
      setLoading(false);
      return;
    }

    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, username, streak, avatar')
      .in('id', allIds);

    const byId = Object.fromEntries((profiles ?? []).map(p => [p.id, p]));

    setFriends(friendIds.map(id => byId[id]).filter(Boolean));
    setIncoming(incomingRows.map(r => ({ requestId: r.id, ...byId[r.from_user_id] })).filter(p => p.id));
    setOutgoing(outgoingRows.map(r => ({ requestId: r.id, ...byId[r.to_user_id] })).filter(p => p.id));
    setLoading(false);
  }, [user.id]);

  useEffect(() => { loadFriends(); }, [loadFriends]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    setSearching(true);
    setSearchResult(null);

    const { data } = await supabase
      .from('profiles')
      .select('id, username, streak, avatar')
      .ilike('username', `%${q}%`)
      .not('username', 'is', null)
      .neq('id', user.id)
      .limit(1)
      .maybeSingle();

    setSearchResult(data || 'not_found');
    setSearching(false);
  };

  const sendRequest = async (toId) => {
    await supabase.from('friend_requests').insert({ from_user_id: user.id, to_user_id: toId });
    setSearchResult(null);
    setSearchQuery('');
    loadFriends();
  };

  const acceptRequest = async (requestId) => {
    await supabase.from('friend_requests').update({ status: 'accepted' }).eq('id', requestId);
    loadFriends();
  };

  const declineRequest = async (requestId) => {
    await supabase.from('friend_requests').delete().eq('id', requestId);
    loadFriends();
  };

  const removeFriend = async (friendId) => {
    await supabase.from('friend_requests').delete()
      .or(`and(from_user_id.eq.${user.id},to_user_id.eq.${friendId}),and(from_user_id.eq.${friendId},to_user_id.eq.${user.id})`);
    loadFriends();
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button className="btn-ghost" onClick={onBack} style={{ padding: '6px 14px', fontSize: 13 }}>← Back</button>
        <h2 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)' }}>Friends</h2>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input
          className="input-field"
          style={{ marginBottom: 0, flex: 1 }}
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search by username…"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <button className="btn-primary" type="submit" style={{ width: 'auto', padding: '0 1.25rem' }} disabled={searching}>
          {searching ? '…' : 'Search'}
        </button>
      </form>

      {/* Search result */}
      {searchResult === 'not_found' && (
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: '1.25rem', textAlign: 'center' }}>
          No user found with that username.
        </p>
      )}
      {searchResult && searchResult !== 'not_found' && (
        <div className="history-row" style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Avatar config={searchResult.avatar} size={40} />
            <div>
              <p style={{ fontWeight: 700, color: 'var(--text)' }}>{searchResult.username}</p>
              <p style={{ fontSize: 12, color: 'var(--hint)' }}>🔥 {searchResult.streak} day streak</p>
            </div>
          </div>
          <button className="btn-primary" style={{ width: 'auto', padding: '8px 18px', fontSize: 13 }}
            onClick={() => sendRequest(searchResult.id)}>
            Add friend
          </button>
        </div>
      )}

      {loading ? (
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13 }}>Loading…</p>
      ) : (
        <>
          {/* Incoming requests */}
          {incoming.length > 0 && (
            <section style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Pending requests
              </p>
              <div className="history-list">
                {incoming.map(p => (
                  <div key={p.id} className="history-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <Avatar config={p.avatar} size={36} />
                      <div>
                        <p style={{ fontWeight: 700, color: 'var(--text)' }}>{p.username}</p>
                        <p style={{ fontSize: 12, color: 'var(--hint)' }}>🔥 {p.streak} day streak</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <button className="btn-primary" style={{ width: 'auto', padding: '7px 14px', fontSize: 12 }}
                        onClick={() => acceptRequest(p.requestId)}>
                        Accept
                      </button>
                      <button className="btn-ghost" style={{ padding: '7px 14px', fontSize: 12 }}
                        onClick={() => declineRequest(p.requestId)}>
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Outgoing requests */}
          {outgoing.length > 0 && (
            <section style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Sent requests
              </p>
              <div className="history-list">
                {outgoing.map(p => (
                  <div key={p.id} className="history-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <Avatar config={p.avatar} size={36} />
                      <p style={{ fontWeight: 700, color: 'var(--text)' }}>{p.username}</p>
                    </div>
                    <button className="btn-ghost" style={{ padding: '7px 14px', fontSize: 12 }}
                      onClick={() => declineRequest(p.requestId)}>
                      Cancel
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Friends list */}
          <section>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              Friends {friends.length > 0 && `· ${friends.length}`}
            </p>
            {friends.length === 0 ? (
              <p style={{ fontSize: 13, color: 'var(--muted)', textAlign: 'center', padding: '1.5rem 0' }}>
                No friends yet — search for a username above!
              </p>
            ) : (
              <div className="history-list">
                {friends.map(p => (
                  <div key={p.id} className="history-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <Avatar config={p.avatar} size={40} />
                      <div>
                        <p style={{ fontWeight: 700, color: 'var(--text)' }}>{p.username}</p>
                        <p style={{ fontSize: 12, color: 'var(--hint)' }}>🔥 {p.streak} day streak</p>
                      </div>
                    </div>
                    <button className="btn-ghost" style={{ padding: '7px 14px', fontSize: 12 }}
                      onClick={() => removeFriend(p.id)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
