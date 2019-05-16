// stores keys for spotify and bands in town api 

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
}

exports.bands = {
    id: process.env.BANDS_ID
}

exports.omdb = {
    id: process.env.OMDB_APIKEY
}