export function useLRCParser() {
  const parseLRCFormat = (lrcContent: string): [string, number][] => {
    const lines = lrcContent.split("\n");
    const entries: [string, number][] = [];

    lines.forEach((line) => {
      const match = line.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
      if (match) {
        const minutes = parseInt(match[1]);
        const seconds = parseInt(match[2]);
        const centiseconds = parseInt(match[3]);
        const timestamp =
          minutes * 60 * 1000 + seconds * 1000 + centiseconds * 10;
        const text = match[4].trim();

        entries.push([text, timestamp]);
      }
    });

    // Sort by timestamp
    entries.sort((a, b) => a[1] - b[1]);

    return entries;
  };

  return { parseLRCFormat };
}
