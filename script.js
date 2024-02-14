var songsimg = document.querySelector("#songs img")
const audio=new Audio("celestial.mp3")
songsimg.addEventListener("click",function(){ 
    audio.play();  
})
var songsh4=document.querySelector("#songs h4")
songsimg.addEventListener("mousemove",function(){
   songsh4.style.opacity="1"
   setTimeout(function(){
songsh4.style.opacity="0"
   },3000)
})
songsimg.addEventListener("dblclick",function(){
    audio.pause()
})
var song2img=document.querySelector("#song2 img")
const audio2=new Audio("beautiful people.mp3")
song2img.addEventListener("click",function(){
    audio2.play();
})
song2img.addEventListener("dblclick",function(){
    audio2.pause()
})
var song3img=document.querySelector("#song3 img")
const audio3=new Audio("perfect.mp3")
song3img.addEventListener("click",function(){
    audio3.play();
})
song3img.addEventListener("dblclick",function(){
    audio3.pause()
})
var song5img=document.querySelector("#song5 img")
const audio5=new Audio("brand new eyes.mp3")
song5img.addEventListener("click",function(){
    audio5.play();
})
song5img.addEventListener("dblclick",function(){
    audio5.pause()
})