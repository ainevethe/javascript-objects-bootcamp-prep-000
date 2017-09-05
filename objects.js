var playlist = {artist: "artist", song: "song"};

function updatePlaylist {
  Object.assign({}, playlist, {artistName: "artist"}, {songTitle: "song"})
  return playlist
}
