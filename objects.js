var playlist = { artistName: "artistName", songTitle: "songTitle" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.artistName
  return playlist
}
