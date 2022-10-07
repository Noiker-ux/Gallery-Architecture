window.onload=function(){

 
    setTimeout(function(){
        document.querySelector('.gallery').classList.add('loaded')

        Draggable.create('.gallery_block', {
            bounds:'.gallery',
            inertia: true
         });
    })

    

}