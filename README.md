# floEditor

A browser-based metadata editor for the flo audio format.

## What it does

Load a .flo file and edit its metadata tags. Supports:
- Basic tags (title, artist, album, year, genre, etc.)
- Track/disc numbers, composer, lyricist, BPM, key, mood
- Synced and unsynced lyrics with LRC import
- Album artwork with multiple picture types
- Section markers (intro, verse, chorus, bridge, drop, etc.)
- BPM maps and key changes
- Collaboration credits and remix chain
- Custom metadata fields
- Waveform visualization

## Run it

### Web

Open <https://flo-audio.github.io/floEditor> in your browser.

### Locally

#### Single File

Download the latest GitHub Actions single file build, or download from the release!

#### Build and Serve

```
cd Build
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for deployment

```
npm run build
```

Output goes to `Build/dist`.

## Single file version

For a standalone HTML file with everything bundled:

```
npm run build:single
```

## Contributing

Issues and PRs welcome on GitHub.

## License

MIT
