var playlist = {artistName: "artist", songTitle: "song"};

function updatePlaylist {
  Object.assign({}, playlist, {artist: "artist"}, {song: "song"})
  return playlist
}
