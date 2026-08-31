const slides=document.querySelector('.slider').children;
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const indicator=document.querySelector('.indicator');
let index=0;
const total=document.querySelector('.total-img');
const current=document.querySelector('.current-img');


window.onload= ()=>{
    total.textContent=slides.length;
    current.textContent=index+1;
}

function currentImg(){
    current.textContent=index+1;
}



next.addEventListener('click',function(){
    nextSlide();
    updateCircleIndicator();
    currentImg()
})

prev.addEventListener('click',function(){
    prevSlide();
    updateCircleIndicator();
    currentImg()
})

function circleIndicator(){
    for(let i=0;i<slides.length;i++){
        const div=document.createElement('div');
        div.setAttribute('onclick','indicatorSlide(this)');
        div.id=i;
        if(i==0){
            div.className ="active";
        }
        indicator.appendChild(div);
    }
}
circleIndicator();

function updateCircleIndicator(){
    for(let i=0;i<indicator.children.length;i++){
        indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active');
}



function nextSlide() {
    if(index==slides.length-1){
        index=0
    }else{
        index++;
    }
    changeslide();
    resetTimer()
    
}

function prevSlide(){
    if(index==0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeslide();
    resetTimer()
    
}
function indicatorSlide(element){
    index=element.id;
    changeslide();
    updateCircleIndicator();
    resetTimer();
    currentImg()
}


function changeslide(){
    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
    currentImg();
}

 function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoPlay,4000);
}

 function autoPlay(){
    nextSlide();
    updateCircleIndicator()
}

let timer=setInterval(autoPlay,4000);
