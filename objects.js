var playlist = {artistName = "artistName", songTitle = "songTitle"};

function updatePlaylist {
  Object.assign({}, playlist, {artistName: "artist"}, {songTitle: "song"})
  return playlist
}
