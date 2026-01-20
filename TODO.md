# TODO

## Unimplemented/Missing metadata fields in floEditor

### INVOLVED PEOPLE / CREDITS

- [ ] `involved_people` (array of [role, name])
- [ ] `musician_credits` (array of [instrument, name])

### URLS (not surfaced in UI, though TS has them and some are )

- [ ] `user_urls`

### COMPLEX/ADVANCED (might complete after v0.1.0)

- [ ] `spectrum_fingerprint`
- [ ] `integrated_loudness_lufs`
- [ ] `loudness_range_lu`
- [ ] `true_peak_dbtp`
- [ ] `remix_chain`
- [ ] `artist_signature`

### COVERAGE

- [ ] Some `PictureType` and `SectionType` options exist in Rust but are not accessible in the UI
  - [ ] “bright_coloured_fish”, ”video_screen_capture”,
  - [ ] Section markers like “breakdown”, “drop”, “instrumental”, “silence”, “other”

## Done

### Read-only by user:

- [x] `encoding_time`
- [x] `tagging_time`
- [x] `encoder_settings`
- [x] `flo_encoder_version`
- [x] `source_format`
- [x] `original_filename`
- [x] `Encoded By`

### IDENTIFICATION / BASIC INFO

- [x] `subtitle`
- [x] `content_group`
- [x] `original_album`
- [x] `set_subtitle`
- [x] `original_artist`
- [x] `original_lyricist`
- [x] `playlist_delay`

### DATES / TIMES

- [x] `recording_time` (string)
- [x] `release_time`
- [x] `original_release_time`

### RIGHTS / LEGAL / SORTING

- [x] `produced_notice`
- [x] `file_owner`
- [x] `radio_station`
- [x] `radio_station_owner`
- [x] `album_sort`
- [x] `artist_sort`
- [x] `title_sort`

### INVOLVED PEOPLE / CREDITS

- [x] `remixer`

### URLS

- [x] `url_copyright`
- [x] `url_audio_file`
- [x] `url_artist`
- [x] `url_audio_source`
- [x] `url_radio_station`
- [x] `url_payment`
- [x] `url_publisher`
