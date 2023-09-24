// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const API_KEY = 'AIzaSyBdocwNZxflcCabXjNgDQrvojuf5KmxuyI';

// Replace 'YOUR_CHANNEL_ID' with the ID of your YouTube channel
const CHANNEL_ID = 'UCFyUrjy2LPsNWA75AgZRHlQ';

const PLAYLIST_ID = 'PLWaYOh71CkTe1PsbvpkbNBNQp6tl1j7rk';
// Replace 'YOUR_PLAYLIST_ID' with the ID of your playlist

// Function to fetch videos from the YouTube channel playlist
function fetchVideos() {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const videoList = document.getElementById('video-list');
            data.items.forEach(item => {
                const videoId = item.snippet.resourceId.videoId;
                const videoTitle = item.snippet.title;
                const videoThumbnail = item.snippet.thumbnails.default.url;

                const videoElement = document.createElement('div');
                videoElement.innerHTML = `
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    <h3>${videoTitle}</h3>
                `;

                videoList.appendChild(videoElement);
            });
        })
        .catch(error => console.error('Error fetching videos:', error));
}

// Fetch videos when the portfolio page loads
window.addEventListener('load', fetchVideos);
