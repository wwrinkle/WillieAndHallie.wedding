import React from 'react';

function Playlist() {
    return (
        <div className="playlist">
            <p>Hi guys, we love you and want you to participate in our wedding! One way to do that is to share the music that makes you think of us. Please follow our <a href="https://open.spotify.com/user/hillela/playlist/00r5dcrXV3ke3sM07ZL4Wo" target="_blank">playlist</a> and add to it. We'll play it at the reception. Thank you so much!</p>
            <p><em>You can only add to playlists within the Spotify App and not the web app.</em></p>
            <iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Ahillela%3Aplaylist%3A00r5dcrXV3ke3sM07ZL4Wo" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
        </div>
    );
}

export default Playlist;