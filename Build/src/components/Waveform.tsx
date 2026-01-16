import { Music } from "lucide-react";

export interface WaveformData {
  peaks_per_second: number;
  peaks: number[];
  channels: number;
}

// Generate flo waveform_data from PCM samples.
export function generateWaveformData(
  samples: Float32Array,
  sampleRate: number,
  channels: number,
  peaksPerSecond: number = 50
): WaveformData {
  const segmentLen = Math.floor(sampleRate / peaksPerSecond);
  const totalSegments = Math.floor(samples.length / (segmentLen * channels));
  const peaks: number[] = [];
  for (let seg = 0; seg < totalSegments; seg++) {
    for (let ch = 0; ch < channels; ch++) {
      let peak = 0;
      for (let i = 0; i < segmentLen; i++) {
        const idx = seg * segmentLen * channels + i * channels + ch;
        if (idx < samples.length) {
          peak = Math.max(peak, Math.abs(samples[idx]));
        }
      }
      peaks.push(peak);
    }
  }
  return {
    peaks_per_second: peaksPerSecond,
    channels,
    peaks,
  };
}

interface WaveformSectionProps {
  waveform?: WaveformData | null;
  onRegenerate?: (() => void) | null;
}

export function WaveformSection({
  waveform,
  onRegenerate,
}: WaveformSectionProps) {
  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="micro-label">Audio</p>
          <h2 className="text-lg font-semibold">Audio Waveform</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Pre-generated visualization data for use by music players and other
            tools
          </p>
        </div>
        {onRegenerate && (
          <button
            className="btn"
            data-variant="soft"
            data-tone="primary"
            data-size="sm"
            onClick={onRegenerate}
            type="button"
          >
            Regenerate
          </button>
        )}
      </div>
      <div>
        {waveform && waveform.peaks && waveform.peaks.length > 0 ? (
          <WaveformSVG waveform={waveform} />
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
            <Music className="h-10 w-10 mb-2 opacity-50" />
            <p className="text-sm">
              No waveform data. Load a file or regenerate.
            </p>
          </div>
        )}
      </div>
      <WaveformInfoRow waveform={waveform} />
    </section>
  );
}

function WaveformSVG({
  waveform,
  width = 600,
  height = 80,
}: {
  waveform: WaveformData;
  width?: number;
  height?: number;
}) {
  const { peaks, channels } = waveform;
  const numPeaks = Math.floor(peaks.length / channels);

  function mkPoints(channel: number) {
    return Array.from({ length: numPeaks }, (_, i) => {
      const x = Math.floor((i / (numPeaks - 1)) * (width - 2)) + 1; // 1px padding
      const y =
        Math.floor((1 - (peaks[i * channels + channel] || 0)) * (height - 10)) +
        5;
      return `${x},${y}`;
    }).join(" ");
  }

  // Create area polygon for mono
  function mkAreaPath() {
    // For mono, draw top, then mirrored bottom for fill
    const points = Array.from({ length: numPeaks }, (_, i) => {
      const x = Math.floor((i / (numPeaks - 1)) * (width - 2)) + 1;
      const peak = peaks[i * channels] || 0;
      const y = Math.floor((1 - peak) * (height / 2 - 4)) + height / 2;
      return `${x},${y}`;
    });
    // Close path: bottom mirrored
    const mirror = Array.from({ length: numPeaks }, (_, i) => {
      const rev = numPeaks - 1 - i;
      const x = Math.floor((rev / (numPeaks - 1)) * (width - 2)) + 1;
      const peak = peaks[rev * channels] || 0;
      const y = Math.floor((1 + peak) * (height / 2 - 4)) + 4; // y = center + peak down
      return `${x},${y}`;
    });
    return [...points, ...mirror, points[0]].join(" ");
  }

  return (
    <div style={{ width, maxWidth: "100%" }} className="overflow-x-auto">
      <svg
        className="block rounded border bg-background shadow"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        aria-label="Waveform"
        role="img"
      >
        {/* Area fill for mono */}
        {channels === 1 && (
          <polygon
            points={mkAreaPath()}
            fill="url(#wf-gradient)"
            opacity={0.85}
          />
        )}
        {/* Polyline for channel 1 (or mono) */}
        <polyline
          points={mkPoints(0)}
          stroke="#db2777"
          strokeWidth={channels > 1 ? 1.5 : 2.5}
          fill="none"
        />
        {/* Polyline for channel 2 (if stereo) */}
        {channels > 1 && (
          <polyline
            points={mkPoints(1)}
            stroke="#3b82f6"
            strokeWidth="1.5"
            fill="none"
          />
        )}
        <defs>
          <linearGradient id="wf-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#db2777" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.25" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Info/status row
 */
function WaveformInfoRow({ waveform }: { waveform?: WaveformData | null }) {
  if (!waveform) return null;
  return (
    <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
      <span>
        <strong>Channels:</strong> {waveform.channels === 2 ? "Stereo" : "Mono"}
      </span>
      <span>
        <strong>Peaks/sec:</strong> {waveform.peaks_per_second}
      </span>
      <span>
        <strong>Total Points:</strong> {waveform.peaks.length}
      </span>
    </div>
  );
}
