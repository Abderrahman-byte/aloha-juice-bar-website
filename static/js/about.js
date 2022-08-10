var controls = [
	'play-large', // The large play button in the center
	'play', // Play/pause playback
	'restart', // Restart playback
	'fast-forward', // Fast forward by the seek time (default 10 seconds)
	'progress', // The progress bar and scrubber for playback and buffering
	'current-time', // The current time of playback
	'duration', // The full duration of the media
	'mute', // Toggle mute
	'volume', // Volume control
	'settings', // Settings menu
	'fullscreen', // Toggle fullscreen
]

const player = new Plyr('.vid1', { controls })
