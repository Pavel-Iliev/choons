import { Dispatch, SetStateAction } from 'react';

export interface Location {
  state: {
    list: ListInterface;
  };
}

export interface ListInterface {
  _id: string;
  name: string;
  releases: ReleaseInterface[];
  lastUpdated: Date;
  owner: string;
  lastReleasesArtwork: string;
}

export interface ReleaseInterface {
  _id: string;
  tracks: Track[];
  artist: string;
  title: string;
  url: string;
  imageUrl: string;
  bandcampId: string;
  bandcampAlbumId: string | null;
  itemType: string;
}

export interface Track {
  name: string;
  url: string;
  duration: string;
}

export interface NowPlayingDataInterface {
  current: ReleaseInterface;
  next: string;
}

export interface NowPlayingInterface {
  nowPlaying: NowPlayingDataInterface | null;
  setNowPlaying: Dispatch<SetStateAction<NowPlayingDataInterface | null>> | Function;
}

export interface UserInterface {
  email: string;
  username: string;
  token: string;
}
