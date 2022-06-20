console.log(" welcome to Spotify");
// initialze the variables
let songIndex = 0;
let audioElement = new Audio('songs/5.mp3');
let masterPlay = document.getElementById('masterPlay');
let myproggesbar = document.getElementById('myproggesbar');
let gif = document.getElementById('gif');
let masterSonginfo = document.getElementById('masterSonginfo');
let songItems = Array.from(document.getElementsByClassName('songItem'));
//songs arrys
let songs = [{ songname: "Perfect", filepath: "songs/1.mp3", coverpath: "cover/1.jpg" },
{ songname: "Let Me Love You", filepath: "songs/2.mp3", coverpath: "cover/2.jpg" },
{ songname: "Shape of you", filepath: "songs/3.mp3", coverpath: "cover/3.jpg" },
{ songname: "Death Bed", filepath: "songs/4.mp3", coverpath: "cover/4.jpg" },
{ songname: "Closer", filepath: "songs/5.mp3", coverpath: "cover/5.jpg" },
{ songname: "Beautifull People", filepath: "songs/6.mp3", coverpath: "cover/6.jpg" },
{ songname: "Danceing in my room ", filepath: "songs/7.mp3", coverpath: "cover/7.jpg" },
{ songname: "We donot talk anymore", filepath: "songs/8.mp3", coverpath: "cover/8.jpg" }
]
songItems.forEach((element, i) => {
    //console.log(element,i);
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

})
//handle  play or puse
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        masterSonginfo.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
      
        gif.style.opacity = 0;
        masterSonginfo.style.opacity = 0;
    }
})

//audioElement.play()
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progeesbar = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myproggesbar.value = progeesbar;
    console.log(myproggesbar.value);
})
myproggesbar.addEventListener('change', () => {
    audioElement.currentTime = myproggesbar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName(' songplayitem')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName(' songplayitem')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSonginfo.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSonginfo.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSonginfo.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSonginfo.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSonginfo.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSonginfo.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})
