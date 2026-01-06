import { Image, Trash2, Upload } from "lucide-react";

interface AlbumArtSectionProps {
  albumArtUrl: string | null;
  onAlbumArtChange: (url: string | null) => void;
}

export function AlbumArtSection({
  albumArtUrl,
  onAlbumArtChange,
}: AlbumArtSectionProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert("Image size must be less than 10MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        onAlbumArtChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="micro-label">Artwork</p>
          <h2 className="text-lg font-semibold">Album Art Embed</h2>
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-right">
          PNG · JPG · WebP
          <br />
          &lt;5MB · animated WebP OK
        </span>
      </div>
      <div className="space-y-4">
        {albumArtUrl ? (
          <div className="space-y-4">
            <div className="relative mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 shadow-lg">
              <img
                src={albumArtUrl}
                alt="Album Art"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <label
                className="btn"
                data-variant="soft"
                data-tone="primary"
                data-size="sm"
              >
                <Upload className="h-4 w-4 icon-accent" />
                Change Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <button
                onClick={() => onAlbumArtChange(null)}
                className="btn"
                data-variant="soft"
                data-tone="danger"
                data-size="sm"
              >
                <Trash2 className="h-4 w-4" />
                Remove
              </button>
            </div>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-10 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer">
            <Image className="h-10 w-10 icon-accent" />
            <div>
              <p className="font-semibold">Drop album cover</p>
              <p className="text-sm text-muted-foreground">
                Square works best · up to 5 MB
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
      </div>
    </section>
  );
}
