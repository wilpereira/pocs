const VIDEOS = {
    video1: 'https://cdn.pixabay.com/video/2020/08/12/46989-449623829_tiny.mp4',
    video2: 'https://cdn.pixabay.com/video/2022/10/16/135160-761273559_large.mp4',
    video3: 'https://cdn.pixabay.com/video/2023/06/25/168811-839864556_tiny.mp4',
    video4: 'https://cdn.pixabay.com/video/2019/02/01/21116-315137080_tiny.mp4',
    video5: 'https://cdn.pixabay.com/video/2023/09/24/182082-867762198_large.mp4'
}

function loadVideo(videoId) {
    const videoUrl = VIDEOS[videoId]
    const PLAYER = `<video controls autoplay id="mainVideo"><source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.</video>`
    const videoContainer = document.getElementById('player')
    
    videoContainer.innerHTML = PLAYER
}

function onloadVideo() {
    var firstVideoId = Object.keys(VIDEOS)[0]
    loadVideo(firstVideoId);
}

onloadVideo()