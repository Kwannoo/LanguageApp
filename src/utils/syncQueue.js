const QUEUE_KEY = 'taalkaarten_sync_queue';

export function enqueue(item) {
  const queue = getQueue();
  queue.push(item);
  localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
}

export function getQueue() {
  try {
    return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
  } catch { return []; }
}

export function clearQueue() {
  localStorage.removeItem(QUEUE_KEY);
}
