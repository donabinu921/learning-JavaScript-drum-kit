function playSound(e){
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    audio.currentTime=0;
    audio.play();
}

