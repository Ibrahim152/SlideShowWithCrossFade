(function () {
    'use strict';
    let currnetImg=0;
    const myphotos=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    const container=document.getElementById('content');
    const nextbtn=document.getElementById('next');
    const prevbtn=document.getElementById('previous');
    

    function swap() {
        const newslide=document.createElement('img');
        newslide.src=`slides/${myphotos[currnetImg]}`;
        newslide.className='fadeinimg';
        container.appendChild(newslide);
        if(container.children.length>2){
            container.removeChild(container.children[0]);
        }
    }

    
    nextbtn.addEventListener('click',function(event){
        event.preventDefault();
        currnetImg=(currnetImg+1)%myphotos.length;
        swap()
        }
    )

    
    prevbtn.addEventListener('click',function(event){
        event.preventDefault();
        currnetImg=(myphotos.length-1+currnetImg)%myphotos.length;
        swap()
    })

}())