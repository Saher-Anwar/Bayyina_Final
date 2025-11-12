export interface Surah {
  number: number;
  name: string;           // Arabic name
  transliteration: string;
  translation: string;    // English meaning
  verses: number;
  revelation: 'Meccan' | 'Medinan';
}
