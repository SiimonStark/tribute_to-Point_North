
class album {
    constructor() {
        this.tracks = [
            {
                title: `Brand New Vision (feat. DE'WAYNE)`,
                source: `music/Brand New Vision (feat. DE'WAYNE).mp3`,
                length: `3:35`,
                artist: `Point North`,
            },
            {
                title: `Into The Dark (feat. Kellin Quinn)`,
                source: `music/Into The Dark (feat. Kellin Quinn).mp3`,
                length: `3:18`,
                artist: `Point North`,
            },
            {
                title: `Personal`,
                source: `music/Personal.mp3`,
                length: `3:19`,
                artist: `Point North`,
            },
            {
                title: `A Million Pieces`,
                source: `music/A Million Pieces.mp3`,
                length: `3:19`,
                artist: `Point North`,
            },
            {
                title: `Heartbeat`,
                source: `music/Heartbeat.mp3`,
                length: `3:11`,
                artist: `Point North`,
            }
        ];

        this.getTrack = function (trackNum) {
            this.currentTrack = this.tracks[trackNum];
            console.log(this.currentTrack.title);
        };
    }
}
export default album;