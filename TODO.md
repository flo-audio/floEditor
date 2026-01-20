# TODO

## Unimplemented/Missing metadata fields in floEditor

### IDENTIFICATION / BASIC INFO
- [ ] `subtitle`
- [ ] `content_group`
- [ ] `original_album`
- [ ] `set_subtitle`
- [ ] `original_artist`
- [ ] `original_lyricist`
- [ ] `playlist_delay`

### INVOLVED PEOPLE / CREDITS
- [ ] `involved_people` (array of [role, name])
- [ ] `musician_credits` (array of [instrument, name])
- [ ] `remixer`

### DATES / TIMES
- [ ] `recording_time` (string)
- [ ] `release_time`
- [ ] `original_release_time`
- [ ] `encoding_time`
- [ ] `tagging_time`

### RIGHTS / LEGAL / SORTING
- [ ] `produced_notice`
- [ ] `file_owner`
- [ ] `radio_station`
- [ ] `radio_station_owner`
- [ ] `album_sort`
- [ ] `artist_sort`
- [ ] `title_sort`

### URLS (not surfaced in UI, though TS has them and some are )
- [ ] `url_copyright`
- [ ] `url_audio_file`
- [ ] `url_artist`
- [ ] `url_audio_source`
- [ ] `url_radio_station`
- [ ] `url_payment`
- [ ] `url_publisher`
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

- [X?] `encoder_settings`
- [X?] `flo_encoder_version`
- [X?] `source_format`
- [X?] `original_filename`
  - These are meant to be encoder/decoder (or more likely reflo-side) tags and should not be user editable
  - But maybe viewable?
    - If so, also include `Encoded By` in this
