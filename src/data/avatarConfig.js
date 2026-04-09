/**
 * Avatar customisation options.
 * Each category lists the available choices with a label and image path.
 * Items with a `price` field must be unlocked with coins before use.
 * Add new images to public/avatar/<category>/ and register them here.
 */

export const AVATAR_OPTIONS = {
  face: [
    { id: 'none',       label: 'None',   src: '/avatar/eyes/none.png' },
    { id: 'facepale',   label: 'Light',  src: '/avatar/faces/facepale.png' },
    { id: 'faceyellow', label: 'Medium', src: '/avatar/faces/faceyellow.png' },
    { id: 'faceblack',  label: 'Dark',   src: '/avatar/faces/faceblack.png' },
  ],
  eyes: [
    { id: 'none',       label: 'None',   src: '/avatar/eyes/none.png' },
    { id: 'eyesnormal', label: 'Normal', src: '/avatar/eyes/eyesnormal.png' },
    { id: 'eyessmile',  label: 'Smile',  src: '/avatar/eyes/eyessmile.png' },
    { id: 'eyessquint', label: 'Squint', src: '/avatar/eyes/eyessquint.png' },
    { id: 'eyesdizzy',  label: 'Dizzy',  src: '/avatar/eyes/eyesdizzy.png' },
    { id: 'eyesdrooly', label: 'Drooly', src: '/avatar/eyes/eyesdrooly.png' },
  ],
  mouth: [
    { id: 'none',         label: 'None',   src: '/avatar/eyes/none.png' },
    { id: 'mouthsmile',   label: 'Smile',   src: '/avatar/mouths/mouthsmile.png' },
    { id: 'mouthsmiley',  label: 'Smiley',  src: '/avatar/mouths/mouthsmiley.png' },
    { id: 'mouthneutral', label: 'Neutral', src: '/avatar/mouths/mouthneutral.png' },
    { id: 'mouthkiss',    label: 'Kiss',    src: '/avatar/mouths/mouthkiss.png' },
    { id: 'mouthangry',   label: 'Angry',   src: '/avatar/mouths/mouthangry.png' },
  ],
  hair: [
    { id: 'none',           label: 'None',   src: '/avatar/eyes/none.png' },
    { id: 'hairguy',        label: 'Short',       src: '/avatar/hair/hairguy.png' },
    { id: 'hairgirl',       label: 'Long',        src: '/avatar/hair/hairgirl.png' },
    { id: 'hairspike',      label: 'Spikes',      src: '/avatar/hair/hairspike.png' },
    { id: 'haircurllong',   label: 'Long Curls',  src: '/avatar/hair/haircurllong.png' },
    { id: 'hairbob',        label: 'Bob',         src: '/avatar/hair/hairbob.png' },
    { id: 'hairafro',       label: 'Afro',        src: '/avatar/hair/hairafro.png' },
    { id: 'hairmiddlepart',  label: 'Middle Part',  src: '/avatar/hair/hairmiddlepart.png' },
    { id: 'hairspikewhite', label: 'White Spikes', src: '/avatar/hair/hairspikewhite.png' },
  ],
  hats: [
    { id: 'none',          label: 'None',       src: '/avatar/eyes/none.png' },
    { id: 'hatpartyhat',   label: 'Party Hat',  src: '/avatar/hats/hatpartyhat.png',  price: 100 },
    { id: 'hatstrawhat',   label: 'Straw Hat',  src: '/avatar/hats/hatstrawhat.png',  price: 100 },
    { id: 'hatdurag',      label: 'Durag',      src: '/avatar/hats/hatdurag.png',     price: 100 },
  ],
  accessories: [
    { id: 'none',                  label: 'None',       src: '/avatar/eyes/none.png' },
    { id: 'accessorybowtie',       label: 'Bow Tie',    src: '/avatar/accessories/accessorybowtie.png',       price: 100 },
    { id: 'accessorypeacepale',    label: 'Peace (L)',   src: '/avatar/accessories/accessorypeacepale.png',    price: 100 },
    { id: 'accessorypeaceyellow',  label: 'Peace (M)',   src: '/avatar/accessories/accessorypeaceyellow.png',  price: 100 },
    { id: 'accessorypeaceblack',   label: 'Peace (D)',   src: '/avatar/accessories/accessorypeaceblack.png',   price: 100 },
    { id: 'accessoryshine',        label: 'Shine',       src: '/avatar/accessories/accessoryshine.png',        price: 100 },
  ],
};

export const TITLE_OPTIONS = [
  { id: '',                     label: 'None',                  price: 0 },
  { id: 'Word Wizard',          label: 'Word Wizard',            price: 100 },
  { id: 'Vocab Rookie',         label: 'Vocab Rookie',           price: 100 },
  { id: 'Polyglot in Training', label: 'Polyglot in Training',   price: 100 },
  { id: 'King Vocab',           label: 'King Vocab',             price: 100 },
  { id: 'Goon',                 label: 'Goon',                   price: 100 },
  { id: 'The Strongest One',    label: 'The Strongest One',      price: 100 },
];

export const BG_COLORS = [
  '#1CB0F6', '#6C63FF', '#F5A623', '#E74C3C',
  '#2ECC71', '#FF6B9D', '#00D2D3', '#F368E0',
];

export const DEFAULT_AVATAR = {
  face:  'faceyellow',
  eyes:  'eyesnormal',
  mouth: 'mouthsmile',
  hair:  'hairguy',
  hats:  'none',
  accessories: 'none',
  bg:    '#1CB0F6',
};

/** Render order for avatar layers (bottom to top) */
export const LAYER_ORDER = ['face', 'eyes', 'mouth', 'hair', 'hats', 'accessories'];

/** Look up the image src for a given category + id */
export function getOptionSrc(category, id) {
  const opt = AVATAR_OPTIONS[category]?.find(o => o.id === id);
  return opt?.src ?? null;
}
