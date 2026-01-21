import { Image, Trash2, Upload, Plus, Play } from "lucide-react";

interface ArtworkSectionProps {
  pictures?: Picture[];
  onPicturesChange: (pictures: Picture[]) => void;
  coverVariants?: CoverVariant[];
  onCoverVariantsChange: (variants: CoverVariant[]) => void;
  animatedCover?: AnimatedCover;
  onAnimatedCoverChange: (cover?: AnimatedCover) => void;
}

const PICTURE_TYPES: { value: PictureType; label: string }[] = [
  { value: "cover_front", label: "Front Cover" },
  { value: "cover_back", label: "Back Cover" },
  { value: "leaflet_page", label: "Leaflet Page" },
  { value: "media", label: "Media (Label/CD)" },
  { value: "lead_artist", label: "Lead Artist" },
  { value: "artist", label: "Artist" },
  { value: "conductor", label: "Conductor" },
  { value: "band", label: "Band" },
  { value: "composer", label: "Composer" },
  { value: "lyricist", label: "Lyricist" },
  { value: "recording_location", label: "Recording Location" },
  { value: "during_recording", label: "During Recording" },
  { value: "during_performance", label: "During Performance" },
  { value: "video_screen_capture", label: "Video Screen Capture" },
  { value: "bright_coloured_fish", label: "Bright Coloured Fish 🐟" },
  { value: "illustration", label: "Illustration" },
  { value: "band_logo", label: "Band Logo" },
  { value: "publisher_logo", label: "Publisher Logo" },
  { value: "file_icon", label: "File Icon (32x32 PNG)" },
  { value: "other_file_icon", label: "Other File Icon" },
  { value: "other", label: "Other" },
];

const VARIANT_TYPES: { value: CoverVariantType; label: string }[] = [
  { value: "standard", label: "Standard" },
  { value: "explicit", label: "Explicit" },
  { value: "clean", label: "Clean" },
  { value: "remix", label: "Remix" },
  { value: "deluxe", label: "Deluxe" },
  { value: "limited", label: "Limited" },
  { value: "vinyl", label: "Vinyl" },
  { value: "cassette", label: "Cassette" },
  { value: "digital", label: "Digital" },
];

export function ArtworkSection({
  pictures = [],
  onPicturesChange,
  coverVariants = [],
  onCoverVariantsChange,
  animatedCover,
  onAnimatedCoverChange,
}: ArtworkSectionProps) {
  const handlePictureFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    type: PictureType,
  ) => {
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
      const arrayBuffer = await file.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const newPicture: Picture = {
        mime_type: file.type,
        picture_type: type,
        description: `${PICTURE_TYPES.find((t) => t.value === type)?.label} Art`,
        data,
      };
      const updatedPictures = pictures.filter((p) => p.picture_type !== type);
      updatedPictures.push(newPicture);
      onPicturesChange(updatedPictures);
    }
  };

  const handlePictureRemove = (type: PictureType) => {
    onPicturesChange(pictures.filter((p) => p.picture_type !== type));
  };

  const handleVariantAdd = () => {
    onCoverVariantsChange([
      ...coverVariants,
      {
        variant_type: "standard",
        mime_type: "image/jpeg",
        data: new Uint8Array(),
        description: "",
      },
    ]);
  };

  const handleVariantFileChange = async (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }
      const arrayBuffer = await file.arrayBuffer();
      const updated = [...coverVariants];
      updated[index].data = new Uint8Array(arrayBuffer);
      updated[index].mime_type = file.type;
      onCoverVariantsChange(updated);
    }
  };

  const handleVariantUpdate = (
    index: number,
    field: keyof CoverVariant,
    value: any,
  ) => {
    const updated = [...coverVariants];
    updated[index] = { ...updated[index], [field]: value };
    onCoverVariantsChange(updated);
  };

  const handleVariantDelete = (index: number) => {
    onCoverVariantsChange(coverVariants.filter((_, i) => i !== index));
  };

  const handleAnimatedFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an animated image file (e.g., WebP)");
        return;
      }
      const arrayBuffer = await file.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const newAnimated: AnimatedCover = {
        mime_type: file.type,
        data,
        duration_ms: 3000,
        loop_count: 0,
      };
      onAnimatedCoverChange(newAnimated);
    }
  };

  const handleAnimatedUpdate = (field: keyof AnimatedCover, value: any) => {
    if (animatedCover) {
      onAnimatedCoverChange({ ...animatedCover, [field]: value });
    }
  };

  const handleAnimatedRemove = () => {
    onAnimatedCoverChange(undefined);
  };

  const getUrl = (data: Uint8Array, mime: string) =>
    URL.createObjectURL(new Blob([data], { type: mime }));

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4">
        <p className="micro-label">Artwork</p>
        <h2 className="text-lg font-semibold">Album Art & Covers</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Manage covers, variants, and animated art
        </p>
      </div>
      <div className="space-y-8">
        {/* Standard Covers */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70 mb-4">
            Standard Covers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PICTURE_TYPES.map(({ value, label }) => {
              const pic = pictures.find((p) => p.picture_type === value);
              return (
                <div
                  key={value}
                  className="relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 p-4 shadow-lg overflow-hidden"
                >
                  {pic ? (
                    <div className="space-y-3">
                      <img
                        src={getUrl(pic.data, pic.mime_type)}
                        alt={label}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{label}</span>
                        <button
                          onClick={() => handlePictureRemove(value)}
                          className="btn"
                          data-variant="soft"
                          data-tone="danger"
                          data-size="xs"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center gap-2 h-32 cursor-pointer hover:bg-primary/10 rounded-lg transition">
                      <Plus className="h-6 w-6 icon-accent" />
                      <span className="text-xs font-medium">{label}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePictureFileChange(e, value)}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Cover Variants */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold tracking-wide text-foreground/70">
              Cover Variants
            </h3>
            <button
              onClick={handleVariantAdd}
              className="btn"
              data-variant="soft"
              data-tone="primary"
              data-size="sm"
            >
              <Plus className="h-4 w-4 icon-accent" />
              Add Variant
            </button>
          </div>
          <div className="space-y-3">
            {coverVariants.length === 0 ? (
              <div className="text-center text-muted-foreground py-4">
                <Image className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No variants added</p>
              </div>
            ) : (
              coverVariants.map((variant, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <select
                      value={variant.variant_type}
                      onChange={(e) =>
                        handleVariantUpdate(
                          index,
                          "variant_type",
                          e.target.value as CoverVariantType,
                        )
                      }
                      className="border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    >
                      {VARIANT_TYPES.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <input
                      value={variant.description || ""}
                      onChange={(e) =>
                        handleVariantUpdate(
                          index,
                          "description",
                          e.target.value,
                        )
                      }
                      placeholder="Description"
                      className="flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    />
                    <label
                      className="btn"
                      data-variant="soft"
                      data-tone="primary"
                      data-size="xs"
                    >
                      <Upload className="h-4 w-4 icon-accent" />
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleVariantFileChange(index, e)}
                        className="hidden"
                      />
                    </label>
                    <button
                      onClick={() => handleVariantDelete(index)}
                      className="btn"
                      data-variant="soft"
                      data-tone="danger"
                      data-size="xs"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  {variant.data.length > 0 && (
                    <img
                      src={getUrl(variant.data, variant.mime_type)}
                      alt={variant.description || "Variant"}
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Animated Cover */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70 mb-4">
            Animated Cover
          </h3>
          {animatedCover ? (
            <div className="rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3">
              <img
                src={getUrl(animatedCover.data, animatedCover.mime_type)}
                alt="Animated Cover"
                className="w-32 h-32 object-cover rounded-lg border"
              />
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium">Duration (ms)</label>
                  <input
                    type="number"
                    value={animatedCover.duration_ms || 0}
                    onChange={(e) =>
                      handleAnimatedUpdate(
                        "duration_ms",
                        parseInt(e.target.value) || 0,
                      )
                    }
                    className="w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">Loop Count</label>
                  <input
                    type="number"
                    value={animatedCover.loop_count || 0}
                    onChange={(e) =>
                      handleAnimatedUpdate(
                        "loop_count",
                        parseInt(e.target.value) || 0,
                      )
                    }
                    className="w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                  />
                </div>
              </div>
              <button
                onClick={handleAnimatedRemove}
                className="btn"
                data-variant="soft"
                data-tone="danger"
                data-size="sm"
              >
                <Trash2 className="h-4 w-4 icon-accent" />
                Remove Animated Cover
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer">
              <Play className="h-8 w-8 icon-accent" />
              <div>
                <p className="font-semibold">Upload Animated Cover</p>
                <p className="text-sm text-muted-foreground">
                  WebP or GIF for animation
                </p>
              </div>
              <input
                type="file"
                accept="image/webp,image/gif"
                onChange={handleAnimatedFileChange}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>
    </section>
  );
}
