import { Download } from "lucide-react";

interface ProcessButtonProps {
  disabled: boolean;
  isProcessing: boolean;
  fileName?: string;
  onProcess: () => void;
}

export function ProcessButton({
  disabled,
  isProcessing,
  fileName,
  onProcess,
}: ProcessButtonProps) {
  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="micro-label">Final step</p>
          <p className="text-base font-semibold">
            {fileName ? `Render tags into ${fileName}` : "Load an MP3 to begin"}
          </p>
        </div>
        <button
          type="button"
          onClick={onProcess}
          disabled={disabled}
          className="btn"
          data-variant="gradient"
          data-size="lg"
        >
          {isProcessing ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Processing
            </>
          ) : (
            <>
              <span className="icon-chip">
                <Download className="h-4 w-4 icon-accent" />
              </span>
              Process & Download
            </>
          )}
        </button>
      </div>
    </section>
  );
}
