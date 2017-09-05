var playlist = {artistName, SongTitle};

function updatePlaylist {
  Object.assign({}, playlist, {artistName: "artist"}, {songTitle: "song"})
  return playlist
}
