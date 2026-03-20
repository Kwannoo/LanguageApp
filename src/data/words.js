/**
 * Dutch-English vocabulary list.
 * Each entry has:
 *   nl      – Dutch word
 *   en      – English translation
 *   meaning – Short definition shown on the card back
 *
 * To add more words, simply append new objects to this array.
 * The app will automatically pick them up and shuffle them.
 */
export const WORDS = [
  { nl: 'huis',      en: 'house',    meaning: 'A building where people live' },
  { nl: 'boom',      en: 'tree',     meaning: 'A tall plant with a trunk and branches' },
  { nl: 'water',     en: 'water',    meaning: 'A clear liquid essential for life' },
  { nl: 'boek',      en: 'book',     meaning: 'A written or printed work of pages' },
  { nl: 'hond',      en: 'dog',      meaning: 'A domesticated carnivorous mammal' },
  { nl: 'kat',       en: 'cat',      meaning: 'A small domesticated feline' },
  { nl: 'fiets',     en: 'bicycle',  meaning: 'A two-wheeled human-powered vehicle' },
  { nl: 'brood',     en: 'bread',    meaning: 'A staple food made from flour and water' },
  { nl: 'maan',      en: 'moon',     meaning: "Earth's natural satellite" },
  { nl: 'zon',       en: 'sun',      meaning: 'The star at the center of our solar system' },
  { nl: 'zee',       en: 'sea',      meaning: 'A large body of salt water' },
  { nl: 'berg',      en: 'mountain', meaning: 'A large natural elevation of earth' },
  { nl: 'bloem',     en: 'flower',   meaning: 'The reproductive structure of a plant' },
  { nl: 'vogel',     en: 'bird',     meaning: 'A feathered vertebrate animal' },
  { nl: 'vis',       en: 'fish',     meaning: 'An aquatic vertebrate with gills' },
  { nl: 'melk',      en: 'milk',     meaning: 'A white nutritious liquid from mammals' },
  { nl: 'geld',      en: 'money',    meaning: 'A medium of exchange for goods' },
  { nl: 'stad',      en: 'city',     meaning: 'A large densely populated urban area' },
  { nl: 'dag',       en: 'day',      meaning: 'A period of 24 hours' },
  { nl: 'nacht',     en: 'night',    meaning: 'Darkness between sunset and sunrise' },
  { nl: 'jaar',      en: 'year',     meaning: 'A period of 365 days' },
  { nl: 'kind',      en: 'child',    meaning: 'A young human being' },
  { nl: 'auto',      en: 'car',      meaning: 'A road vehicle powered by an engine' },
  { nl: 'trein',     en: 'train',    meaning: 'A railway vehicle for passengers' },
  { nl: 'school',    en: 'school',   meaning: 'An institution for education' },
  { nl: 'werk',      en: 'work',     meaning: 'Activity involving effort or labor' },
  { nl: 'vliegtuig', en: 'airplane', meaning: 'A powered flying aircraft' },
  { nl: 'deur',      en: 'door',     meaning: 'A movable barrier for an entrance' },
  { nl: 'raam',      en: 'window',   meaning: 'An opening in a wall fitted with glass' },
  { nl: 'tafel',     en: 'table',    meaning: 'A piece of furniture with a flat top' },
  { nl: 'stoel',     en: 'chair',    meaning: 'A separate seat for one person' },
  { nl: 'hand',      en: 'hand',     meaning: 'The end part of the arm below the wrist' },
  { nl: 'hoofd',     en: 'head',     meaning: 'The upper part of the human body' },
  { nl: 'oog',       en: 'eye',      meaning: 'The organ of sight' },
  { nl: 'hart',      en: 'heart',    meaning: 'The organ that pumps blood through the body' },
  { nl: 'leven',     en: 'life',     meaning: 'The condition that distinguishes organisms' },
  { nl: 'wereld',    en: 'world',    meaning: 'The earth and all its inhabitants' },
  { nl: 'lucht',     en: 'air',      meaning: 'The invisible gaseous substance around Earth' },
  { nl: 'vuur',      en: 'fire',     meaning: 'Combustion producing heat and light' },
  { nl: 'regen',     en: 'rain',     meaning: 'Water falling from clouds in drops' },
  { nl: 'sneeuw',    en: 'snow',     meaning: 'Frozen atmospheric water in white flakes' },
  { nl: 'grond',     en: 'ground',   meaning: 'The solid surface of the earth' },
  { nl: 'steen',     en: 'stone',    meaning: 'Hard solid mineral matter' },
  { nl: 'goud',      en: 'gold',     meaning: 'A yellow precious metal element' },
  { nl: 'licht',     en: 'light',    meaning: 'Electromagnetic radiation visible to the eye' },
  { nl: 'geluid',    en: 'sound',    meaning: 'Vibrations that travel through the air' },
  { nl: 'droom',     en: 'dream',    meaning: 'Images and sensations during sleep' },
  { nl: 'reis',      en: 'journey',  meaning: 'An act of traveling from one place to another' },
  { nl: 'vrede',     en: 'peace',    meaning: 'Freedom from disturbance or conflict' },
  { nl: 'vrijheid',  en: 'freedom',  meaning: 'The power to act without restraint' },
];

/** Returns a shuffled copy of the word list */
export function shuffled(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
