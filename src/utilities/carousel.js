
const getTotalItemsWidth = (items) => {
    const { left } = items[0].getBoundingClientRect();
    const { right } = items[items.length - 1].getBoundingClientRect();
    return right - left;
}

//TODO: EVENT BUBBLING!!!! dugmici dobijaju dve razlicite funkcije koje imaju razlicito okruzenje
//TODO:  plan B moze da bude nesto sa totalWidth ili uvodjennje statefull komponente


const carousel = (elementId, disableClass, direction) => {
    let offset = 0;
    let counter = 0;
    let maxed = false;
    console.log(elementId);
    return (event) => {
        const sliderContainer = document.querySelector(`#${elementId}`); 
        console.log(sliderContainer.querySelector('ul'));
        if(sliderContainer){
           const sliderTotalWidth = getTotalItemsWidth(sliderItems);    
           const slider = sliderContainer.querySelector('ul');
           const sliderItems = slider.querySelectorAll('li');
           
           const sliderVisibleWidth = slider.offsetWidth;
           const sectionHeading = event.target.closest('div');
           const prevBtn = sectionHeading.querySelector('.Prev');
           const nextBtn = sectionHeading.querySelector('.Next');
           const maxX = Math.floor(sliderItems.length / 4);

           if(direction === 'right'){
               // ### logic for move slider right ###    

                if(counter === (maxX - 1)){
                     offset = offset + ((sliderVisibleWidth / 4) * (sliderItems.length % 4));
                     slider.style.transform = `translateX(-${offset}px)`;
                     slider.style.transition = 'transform ease-in-out 0.75s';
                     offset += sliderVisibleWidth;
                     nextBtn.classList.add(disableClass);
                     maxed = true;
                }else{
                     prevBtn.classList.remove(disableClass);
                     offset = offset + sliderVisibleWidth;
                     slider.style.transform = `translateX(-${offset}px)`;
                     slider.style.transition = 'transform ease-in-out 0.75s';
                     if(sliderItems.length % 4 === 0 && (counter + 2 === maxX)){
                        nextBtn.classList.add(disableClass);
                    }  
                }
                  counter++;
          }else{
            // ### logic for move slider left ###
                console.log(offset);
                console.log(counter);
                console.log(maxed);
                if(sliderItems.length % 4 !== 0 && maxed){
                    if(!(counter - 1 === 1)){
                        offset = offset - sliderVisibleWidth;
                        slider.style.transform = `translateX(${offset}px)`;
                        slider.style.transition = 'transform ease-in-out 0.75s';
                        nextBtn.classList.remove(disableClass);
                }else{
                    offset = offset + ((sliderVisibleWidth / 4) * (sliderItems.length % 4));
                    slider.style.transform = `translateX(${offset}px)`;
                    slider.style.transition = 'transform ease-in-out 0.75s';
                    prevBtn.classList.add(disableClass);
                    maxed = false;
                }
                console.log(offset);
                }else{
                    console.log(offset);
                    if(counter - 1 === 1){
                        slider.style.transform = `translateX(${offset}px)`;
                        slider.style.transition = 'transform ease-in-out 0.75s';
                        offset = offset - sliderVisibleWidth;
                        prevBtn.classList.add(disableClass);
                        nextBtn.classList.remove(disableClass);
                    }else{
                        offset = offset - sliderVisibleWidth;
                        slider.style.transform = `translateX(${offset}px)`;
                        slider.style.transition = 'transform ease-in-out 0.75s';
                        maxed = false;
                        nextBtn.classList.remove(disableClass);
                }
                console.log(offset);
            }
            counter--;
            console.log(counter);
        }
      }
    }
}

export default carousel;
