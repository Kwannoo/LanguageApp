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
    { id: 'none',                  label: 'None',              src: '/avatar/eyes/none.png' },
    { id: 'hairguy',               label: 'Short',             src: '/avatar/hair/hairguy.png' },
    { id: 'hairguyblonde',         label: 'Short (Blonde)',    src: '/avatar/hair/hairguyblonde.png',        },
    { id: 'hairguybrown',          label: 'Short (Brown)',     src: '/avatar/hair/hairguybrown.png',     },
    { id: 'hairgirl',              label: 'Long',              src: '/avatar/hair/hairgirl.png' },
    { id: 'hairgirlblonde',        label: 'Long (Blonde)',     src: '/avatar/hair/hairgirlblonde.png',       },
    { id: 'hairgirlbrown',         label: 'Long (Brown)',      src: '/avatar/hair/hairgirlbrown.png',        },
    { id: 'hairspike',             label: 'Spikes',            src: '/avatar/hair/hairspike.png' },
    { id: 'haircurllong',          label: 'Long Curls',        src: '/avatar/hair/haircurllong.png' },
    { id: 'haircurllongblonde',    label: 'Long Curls (Blonde)', src: '/avatar/hair/haircurllongblonde.png',},
    { id: 'haircurllongbrown',     label: 'Long Curls (Brown)',  src: '/avatar/hair/haircurllongbrown.png', },
    { id: 'hairbob',               label: 'Bob',               src: '/avatar/hair/hairbob.png' },
    { id: 'hairbobblonde',         label: 'Bob (Blonde)',      src: '/avatar/hair/hairbobblonde.png',        },
    { id: 'hairbobbrown',          label: 'Bob (Brown)',       src: '/avatar/hair/hairbobbrown.png',         },
    { id: 'hairafro',              label: 'Afro',              src: '/avatar/hair/hairafro.png' },
    { id: 'hairmiddlepart',        label: 'Middle Part',       src: '/avatar/hair/hairmiddlepart.png' },
    { id: 'hairmiddlepartblonde',  label: 'Middle Part (Blonde)', src: '/avatar/hair/hairmiddlepartblonde.png',},
    { id: 'hairmiddlepartbrown',   label: 'Middle Part (Brown)',  src: '/avatar/hair/hairmiddlepartbrown.png', },
    { id: 'hairspikewhite',        label: 'White Spikes',      src: '/avatar/hair/hairspikewhite.png' },
  ],
  hats: [
    { id: 'none',          label: 'None',       src: '/avatar/eyes/none.png' },
    { id: 'hatpartyhat',   label: 'Party Hat',  src: '/avatar/hats/hatpartyhat.png',  price: 300 },
    { id: 'hatstrawhat',   label: 'Straw Hat',  src: '/avatar/hats/hatstrawhat.png',  price: 300 },
    { id: 'hatdurag',      label: 'Durag',      src: '/avatar/hats/hatdurag.png',     price: 300 },
    { id: 'hatchic',       label: 'Chic Hat',   src: '/avatar/hats/hatchic.png',      price: 300 },
  ],
  accessories: [
    { id: 'none',                  label: 'None',       src: '/avatar/eyes/none.png' },
    { id: 'accessorybowtie',       label: 'Bow Tie',    src: '/avatar/accessories/accessorybowtie.png',       price: 500 },
    { id: 'accessorypeacepale',    label: 'Peace (L)',   src: '/avatar/accessories/accessorypeacepale.png',    price: 500 },
    { id: 'accessorypeaceyellow',  label: 'Peace (M)',   src: '/avatar/accessories/accessorypeaceyellow.png',  price: 500 },
    { id: 'accessorypeaceblack',   label: 'Peace (D)',   src: '/avatar/accessories/accessorypeaceblack.png',   price: 500 },
    { id: 'accessoryshine',        label: 'Shine',       src: '/avatar/accessories/accessoryshine.png',        price: 500 },
  ],
  glasses: [
    { id: 'none',                label: 'None',           src: '/avatar/eyes/none.png' },
    { id: 'glassesround',        label: 'Round',          src: '/avatar/glasses/glassesround.png',        price: 300 },
    { id: 'glassesroundsun',     label: 'Round Shades',   src: '/avatar/glasses/glassesroundsun.png',     price: 300 },
    { id: 'glassessquare',       label: 'Square',         src: '/avatar/glasses/glassessquare.png',       price: 300 },
    { id: 'glassessquaresun',    label: 'Square Shades',  src: '/avatar/glasses/glassessquaresun.png',    price: 300 },
  ],
};

export const TITLE_OPTIONS = [
  { id: '',                     label: 'None',                  price: 0 },
  { id: 'Word Wizard',          label: 'Word Wizard',            price: 250 },
  { id: 'Vocab Rookie',         label: 'Vocab Rookie',           price: 250 },
  { id: 'Polyglot in Training', label: 'Polyglot in Training',   price: 250 },
  { id: 'King Vocab',           label: 'King Vocab',             price: 250 },
  { id: 'Goon',                 label: 'Goon',                   price: 250 },
  { id: 'The Strongest One',    label: 'The Strongest One',      price: 250 },
];

export const BG_COLORS = [
  '#1CB0F6', '#6C63FF', '#F5A623', '#E74C3C',
  '#2ECC71', '#FF6B9D', '#00D2D3', '#F368E0',
];

export const DEFAULT_AVATAR = {
  face:        'faceyellow',
  eyes:        'eyesnormal',
  mouth:       'mouthsmile',
  hair:        'hairguy',
  hats:        'none',
  accessories: 'none',
  glasses:     'none',
  bg:          '#1CB0F6',
};

/** Render order for avatar layers (bottom to top) */
export const LAYER_ORDER = ['face', 'eyes', 'mouth', 'hair', 'hats', 'accessories', 'glasses'];

/** Look up the image src for a given category + id */
export function getOptionSrc(category, id) {
  const opt = AVATAR_OPTIONS[category]?.find(o => o.id === id);
  return opt?.src ?? null;
}
