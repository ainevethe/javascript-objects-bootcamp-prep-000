var playlist = {artist: "artist", song: "song"};

function updatePlaylist {
  Object.assign({}, {playlist}, {artist: "artist"}, {song: "song"})
  return playlist
}
