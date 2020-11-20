interface Url {
  url: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Array<Url>;
  thumbnail: HTMLImageElement;
  comics: any;
  stories: any;
  events: any;
  series: any;
}
