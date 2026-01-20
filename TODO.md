# TODO

## Unimplemented/Missing metadata fields in floEditor

### IDENTIFICATION / BASIC INFO
- `subtitle`
- `content_group`
- `original_album`
- `set_subtitle`
- `original_artist`
- `original_lyricist`
- `original_filename`
- `playlist_delay`
- `encoder_settings`
- `source_format`
- `flo_encoder_version`

### INVOLVED PEOPLE / CREDITS
- `involved_people` (array of [role, name])
- `musician_credits` (array of [instrument, name])
- `remixer`

### DATES / TIMES
- `recording_time` (string)
- `release_time`
- `original_release_time`
- `encoding_time`
- `tagging_time`

### RIGHTS / LEGAL / SORTING
- `produced_notice`
- `file_owner`
- `radio_station`
- `radio_station_owner`
- `album_sort`
- `artist_sort`
- `title_sort`

### URLS (not surfaced in UI, though TS has them and some are )
- `url_copyright`
- `url_audio_file`
- `url_artist`
- `url_audio_source`
- `url_radio_station`
- `url_payment`
- `url_publisher`
- `user_urls`

### COMPLEX/ADVANCED (might complete after v0.1.0)
- `spectrum_fingerprint`
- `integrated_loudness_lufs`
- `loudness_range_lu`
- `true_peak_dbtp`
- `remix_chain`
- `artist_signature`

### COVERAGE
- Some `PictureType` and `SectionType` options exist in Rust but are not accessible in the UI
  - “bright_coloured_fish”, ”video_screen_capture”, 
  - Section markers like “breakdown”, “drop”, “instrumental”, “silence”, “other”
