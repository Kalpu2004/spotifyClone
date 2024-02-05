console.log("Welcome to Spotify");

//initialise the variables
let songIndex=0;
let audioElement = new Audio('yun hi re.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
let songs = [
    {songName: "Yun hi re", filePath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\yun hi re.mp3", coverPath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\cover10.jpg"},
    {songName: "Yun hi re", filePath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\yun hi re.mp3", coverPath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\cover10.jpg"},
    {songName: "Yun hi re", filePath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\yun hi re.mp3", coverPath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\cover10.jpg"},
    {songName: "Yun hi re", filePath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\yun hi re.mp3", coverPath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\cover10.jpg"},
    {songName: "Yun hi re", filePath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\yun hi re.mp3", coverPath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\cover10.jpg"},
    {songName: "Yun hi re", filePath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\yun hi re.mp3", coverPath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\cover10.jpg"},
    {songName: "Yun hi re", filePath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\yun hi re.mp3", coverPath: "C:\Users\kalpn\OneDrive\Desktop\proj 1\cover10.jpg"},

]


//audioElement.play();

//Listen to events
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        // masterPlay.classList.remove('fa-play-circle');
        // masterPlay.classList.add('fa-pause-circle');
        // gif.style.opacity = 1;
    
    }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity=0;
//     }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //updatseekBar
})