const button = document.querySelector('button')

const togglePlay = ()=> {
    const video = document.querySelector('video')
    if(video.paused){
        button.innerText='Paused'
        video.play()
    }else {
        button.innerText='Play'
        video.pause()
    }
}
button.addEventListener('click',togglePlay)