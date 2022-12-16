export interface Musician {
  name: string,
  photo: string,
  age: number,
  instrument: string,
  biography: string,
  youtubeLinks: string[],
  socialLinks: SocialLinks
}

interface SocialLinks {
  facebook: string,
  youtube: string,
  instagram: string,
  spotify: string,
  mail: string,
}


