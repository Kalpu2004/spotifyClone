// Initialize the variables
console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio(); // Removed 'song.mp3' from here
let master = document.getElementById('master');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Yun hi re-Anirudhh", filePath: "./song.mp3", coverPath: "./cover10.jpg"},
    {songName: "Pehle bhi mai-Vishal", filePath: "./song1.mp3", coverPath: "./cover11.jpg"},
    {songName: "Zara Zara-Jayashri", filePath: "./song2.mp3", coverPath: "./cover12.jpg"},
    {songName: "Tu mera hai sanam", filePath: "./song3.mp3", coverPath: "./cover13.jpg"},
    {songName: "The Villagers-Sumit ", filePath: "./song4.mp3", coverPath: "./cover14.jpg"},
    {songName: "Dil Ibaadat-Pritam", filePath: "./song5.mp3", coverPath: "./cover15.jpg"},
    {songName: "Kahani Suno-Kaifi", filePath: "./song6.mp3", coverPath: "./cover16.jpg"},
];

songItem.forEach((element, i) => {
    // Corrected setting of song cover and name
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Function to play/pause audio
master.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        master.classList.remove('fa-play-circle');
        master.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        master.classList.remove('fa-pause-circle');
        master.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to timeupdate event on audioElement
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Listen to change event on myProgressBar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Function to handle play/pause for song items
function handleSongPlay(element, index) {
    makeAllPlays();
    element.classList.remove("fa-play-circle");
    element.classList.add("fa-pause-circle");
    songIndex = index;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    master.classList.remove('fa-pause-circle');
    master.classList.add('fa-play-circle');
}

// Function to reset all play buttons to play state
function makeAllPlays() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

// Event listeners for song items
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, index) => {
    element.addEventListener('click', () => {
        handleSongPlay(element, index);
    });
});

// Event listener for next button
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    handleSongPlay(songItem[songIndex].getElementsByClassName("songItemPlay")[0], songIndex);
});

// Event listener for previous button
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    handleSongPlay(songItem[songIndex].getElementsByClassName("songItemPlay")[0], songIndex);
});
