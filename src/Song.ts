import { Readable } from 'stream';
import { Injectable } from '@nestjs/common';
import AudioSource from 'services/media/AudioSource';

@Injectable()
export default class Song {

    public constructor(
        readonly identifier  : string,
        readonly duration    : number,
        readonly audio_source: AudioSource,
        readonly sample_rate : number   = 44100,
        readonly title       : string   = 'Title Unavailable',
        readonly artist      : string   = 'Unknown Artist',
        readonly album       : string   = 'Unknown Album',
        readonly genre       : string[] = ['Unknown Genre'],
    ) {

    }

    public getAudio(): Readable {
        return this.audio_source.getAudio(this.identifier);
    }
}
