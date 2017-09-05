var playlist = { artistName: "artistName", songTitle: "songTitle" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
