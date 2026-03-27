/**
 * Avatar customisation options.
 * Each category lists the available choices with a label and image path.
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
    { id: 'hairmiddlepart', label: 'Middle Part', src: '/avatar/hair/hairmiddlepart.png' },
  ],
};

export const BG_COLORS = [
  '#1CB0F6', '#6C63FF', '#F5A623', '#E74C3C',
  '#2ECC71', '#FF6B9D', '#00D2D3', '#F368E0',
];

export const DEFAULT_AVATAR = {
  face:  'faceyellow',
  eyes:  'eyesnormal',
  mouth: 'mouthsmile',
  hair:  'hairguy',
  bg:    '#1CB0F6',
};

/** Look up the image src for a given category + id */
export function getOptionSrc(category, id) {
  const opt = AVATAR_OPTIONS[category]?.find(o => o.id === id);
  return opt?.src ?? null;
}
