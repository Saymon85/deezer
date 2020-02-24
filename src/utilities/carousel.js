const getTotalItemsWidth = (items) => {
    const { left } = items[0].getBoundingClientRect();
    const { right } = items[items.length - 1].getBoundingClientRect();
    return right - left;
}


const carousel = (elementId, e) => {

    const sliderContainer = document.querySelector(`#${elementId}`);
    const slider = sliderContainer.querySelector('ul');
    const sliderItems = slider.querySelectorAll('li');
    let offset = 0;
    

    if(sliderContainer){
        const sliderVisibleWidth = slider.offsetWidth;
        const itemMargin = parseFloat(window.getComputedStyle(sliderItems[0]).marginRight);
        const sliderTotalWidth = getTotalItemsWidth(sliderItems);
        const maxX = -((sliderItems / 4) * sliderVisibleWidth + (itemMargin * (sliderItems.length / 4)) - sliderVisibleWidth - itemMargin);

        if(offset !== maxX){
            offset -= sliderVisibleWidth + itemMargin;
            slider.style.transform = `translateX(${offset}px)`;
            slider.style.transition = 'transform ease-in-out 0.75s';
        }
        console.log(sliderTotalWidth);
        console.log(sliderVisibleWidth); 
        console.log(parseFloat(itemMargin));
    }
}

export default carousel;


/* console.log(e.target.closest('div').firstElementChild); */
/*      console.log(sliderContainer.offsetWidth);
        console.log(sliderContainer.clientWidth);
        console.log('left: ',sliderItems[0].getBoundingClientRect().left);
        console.log('right: ',sliderItems[sliderItems.length - 1].getBoundingClientRect().right); */
/*      sliderContainer.firstElementChild.style.transform = `translateX(-150%)`;
        sliderContainer.firstElementChild.style.transition = 'transform ease-in-out 0.75s'; */