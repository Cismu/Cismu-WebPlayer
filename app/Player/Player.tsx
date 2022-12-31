"use client";

import React from "react";
import Controls from "./Controls";
import Options from "./Options";
import Slider from "./Slider";
import Metadata from "./Metadata";

const playground: Track = {
  title: "Playground (from the series Arcane League of Legends)",
  album: "Arcane League of Legends (Soundtrack from the Animated Series)",
  artist: ["Arcane", "Bea Miller", "Yung Baby Tate"],
  artwork: [
    {
      src: "https://i.ibb.co/vhKy16K/cover-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      src: "https://i.ibb.co/7yqc2sh/cover-128x128.png",
      sizes: "128x128",
      type: "image/png",
    },
    {
      src: "https://i.ibb.co/ccxt65y/cover-256x256.png",
      sizes: "256x256",
      type: "image/png",
    },
    {
      src: "https://i.ibb.co/MSJqrFr/cover-384x384.png",
      sizes: "384x384",
      type: "image/png",
    },
    {
      src: "https://i.ibb.co/JzjNZn4/cover-4-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  src: "https://dl.dropboxusercontent.com/s/26we5rwpi1pefpr/Playground%20%28from%20the%20series%20Arcane%20League%20of%20Legends%29.flac?dl=0",
};

class Player extends React.Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      audioElement: undefined,
    };
  }

  componentDidMount(): void {
    if (!this.state.audioElement) {
      this.setState(() => {
        let audio = document.createElement("audio");
        audio.src = playground.src;
        audio.crossOrigin = "anonymous";
        return { audioElement: audio };
      });
    }

    if ("mediaSession" in navigator) {
      this.mediaSession();
    }
  }

  play() {
    if (this.state.audioElement) {
      this.state.audioElement.play();
    }
  }

  pause() {
    if (this.state.audioElement) {
      this.state.audioElement.pause();
    }
  }

  stop() {}

  mediaSession() {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: playground.title,
      artist: Array.isArray(playground.artist)
        ? playground.artist.toString()
        : playground.artist,
      album: playground.album,
      artwork: playground.artwork,
    });

    navigator.mediaSession.setActionHandler("play", () => this.play());
    navigator.mediaSession.setActionHandler("pause", () => this.pause());
    navigator.mediaSession.setActionHandler("stop", () => this.stop());

    navigator.mediaSession.setActionHandler("seekbackward", () => {
      /* Code excerpted. */
    });
    navigator.mediaSession.setActionHandler("seekforward", () => {
      /* Code excerpted. */
    });
    navigator.mediaSession.setActionHandler("seekto", () => {
      /* Code excerpted. */
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      /* Code excerpted. */
    });
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      /* Code excerpted. */
    });
  }

  render(): React.ReactNode {
    return (
      <div className="relative flex h-full w-full flex-col">
        <div className="absolute w-full -translate-y-full">
          <Slider />
        </div>
        <div className="flex h-full w-full flex-row">
          <Metadata />
          <Controls />
          <Options />
          <button onClick={() => this.play()}>play</button>
        </div>
      </div>
    );
  }
}

export default Player;

interface Props {}
interface State {
  audioElement: HTMLAudioElement | undefined;
}

interface ArtworkItem {
  src: string;
  sizes: "96x96" | "128x128" | "256x256" | "384x384" | "512x512";
  type: string;
}

interface Track {
  title: string;
  artist: string | string[];
  album: string;
  artwork: ArtworkItem[];
  src: string;
}

// interface ArtworkItem_ {
//   url: string;
//   width: number;
//   height: number;
//   sizes: string;
//   type: string;
// }

// interface Trackk {
//   title: string;
//   artist: string | string[];
//   album: string;
//   artwork: ArtworkItem_[];
//   src: string;
//   id: string;
// }

// {
//   "album": {
//     "album_type": "compilation",
//     "total_tracks": 9,
//     "available_markets": [
//       "CA",
//       "BR",
//       "IT"
//     ],
//     "external_urls": {
//       "spotify": "string"
//     },
//     "href": "string",
//     "id": "2up3OPMp9Tb4dAKM2erWXQ",
//     "images": [
//       {
//         "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
//         "height": 300,
//         "width": 300
//       }
//     ],
//     "name": "string",
//     "release_date": "1981-12",
//     "release_date_precision": "year",
//     "restrictions": {
//       "reason": "market"
//     },
//     "type": "album",
//     "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
//     "album_group": "compilation",
//     "artists": [
//       {
//         "external_urls": {
//           "spotify": "string"
//         },
//         "href": "string",
//         "id": "string",
//         "name": "string",
//         "type": "artist",
//         "uri": "string"
//       }
//     ]
//   },
//   "artists": [
//     {
//       "external_urls": {
//         "spotify": "string"
//       },
//       "followers": {
//         "href": "string",
//         "total": 0
//       },
//       "genres": [
//         "Prog rock",
//         "Grunge"
//       ],
//       "href": "string",
//       "id": "string",
//       "images": [
//         {
//           "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
//           "height": 300,
//           "width": 300
//         }
//       ],
//       "name": "string",
//       "popularity": 0,
//       "type": "artist",
//       "uri": "string"
//     }
//   ],
//   "available_markets": [
//     "string"
//   ],
//   "disc_number": 0,
//   "duration_ms": 0,
//   "explicit": true,
//   "external_ids": {
//     "isrc": "string",
//     "ean": "string",
//     "upc": "string"
//   },
//   "external_urls": {
//     "spotify": "string"
//   },
//   "href": "string",
//   "id": "string",
//   "is_playable": true,
//   "restrictions": {
//     "reason": "string"
//   },
//   "name": "string",
//   "popularity": 0,
//   "preview_url": "string",
//   "track_number": 0,
//   "type": "string",
//   "uri": "string",
//   "is_local": true
// }
