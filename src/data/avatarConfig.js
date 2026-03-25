/**
 * Avatar customisation options.
 * Each category lists the available choices with a label and image path.
 * Add new images to public/avatar/<category>/ and register them here.
 */

export const AVATAR_OPTIONS = {
  face: [
    { id: 'faceround',  label: 'Round',  src: '/avatar/faces/faceround.png' },
    { id: 'facesquare', label: 'Square', src: '/avatar/faces/facesquare.png' },
  ],
  eyes: [
    { id: 'eyesnormal', label: 'Normal', src: '/avatar/eyes/eyesnormal.png' },
    { id: 'eyessmile',  label: 'Smile',  src: '/avatar/eyes/eyessmile.png' },
  ],
  mouth: [
    { id: 'mouthnormal', label: 'Normal', src: '/avatar/mouths/mouthnormal.png' },
    { id: 'mouthsmile',  label: 'Smile',  src: '/avatar/mouths/mouthsmile.png' },
  ],
  hair: [
    { id: 'hairguy',   label: 'Short', src: '/avatar/hair/hairguy.png' },
    { id: 'hiargirl',  label: 'Long',  src: '/avatar/hair/hiargirl.png' },
  ],
};

export const BG_COLORS = [
  '#1CB0F6', '#6C63FF', '#F5A623', '#E74C3C',
  '#2ECC71', '#FF6B9D', '#00D2D3', '#F368E0',
];

export const DEFAULT_AVATAR = {
  face:  'faceround',
  eyes:  'eyesnormal',
  mouth: 'mouthnormal',
  hair:  'hairguy',
  bg:    '#1CB0F6',
};

/** Look up the image src for a given category + id */
export function getOptionSrc(category, id) {
  const opt = AVATAR_OPTIONS[category]?.find(o => o.id === id);
  return opt?.src ?? null;
}
