window.addEventListener('load', function () {
    'use strict';

    function animateSlider(element, direction){
        const sliderContent = document.querySelector(`${element} .a`);
        const sliderWidth = sliderContent.offsetWidth;
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "b";
        document.querySelector(`${element} .slider`).appendChild(cloned);
        let root = document.querySelector(':root');
        const endLeftPos = `-${sliderWidth}px`;    
        root.style.setProperty('--sliderwidth', endLeftPos);
        document.querySelector(`${element} .slider`).classList.add(`${direction}`);
    }

    animateSlider('#one', 'left');   
});