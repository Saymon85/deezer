const carousel = (elementId, e) => {
    console.log(e.target.closest('div').firstElementChild);
    console.log(elementId);
    const sliderContainer = document.querySelector(`#${elementId}`);
    const slider = sliderContainer.querySelector('ul');
    const sliderItems = slider.querySelectorAll('li');
    
    if(sliderContainer){
        console.log(sliderContainer.offsetWidth);
        console.log(sliderContainer.clientWidth);
        console.log('left: ',sliderItems[0].getBoundingClientRect().left);
        console.log('right: ',sliderItems[sliderItems.length - 1].getBoundingClientRect().right);
        sliderContainer.firstElementChild.style.transform = `translateX(-150%)`;
        sliderContainer.firstElementChild.style.transition = 'transform ease-in-out 0.75s';
    }
}

export default carousel;