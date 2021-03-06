import React, { Component } from 'react';
import MusicSectionItem from '../../../Components/MusicSection/MusicSectionItem/MusicSectionItem';
import classes from './MusicSection.css';


class MusicSection extends Component {
    
    state = {
        offset: 0,
        counter: 0,
        maxed: false
    }

    getSliderElements(elementId, e) {
        const sliderContainer = document.querySelector(`#${elementId}`);
        const sectionHeading = e.target.closest('div');

        return {
            sliderList: sliderContainer.querySelector('ul'),
            sliderItems: sliderContainer.querySelectorAll('ul li'),
            sliderVisibleWidth: sliderContainer.querySelector('ul').offsetWidth,
            prevBtn: sectionHeading.querySelector('.Prev'),
            nextBtn: sectionHeading.querySelector('.Next')
        }
    }

    onLeftClick = (elementId, disableClass, e) => {

        const slider = this.getSliderElements(elementId, e);
  
        if(slider.sliderItems.length % 4 !== 0 && this.state.maxed){
            if(!(this.state.counter - 1 === 0)){
                const offsetCurrent = this.state.offset + slider.sliderVisibleWidth;
                slider.sliderList.style.transform = `translateX(${offsetCurrent}px)`;
                slider.sliderList.style.transition = 'transform ease-in-out 0.75s';
                slider.nextBtn.classList.remove(disableClass);
                this.setState({offset: this.state.offset + slider.sliderVisibleWidth});
            }else{
                const offsetCurrent = this.state.offset + ((slider.sliderVisibleWidth / 4) * (slider.sliderItems.length % 4));
                slider.sliderList.style.transform = `translateX(${offsetCurrent}px)`;
                slider.sliderList.style.transition = 'transform ease-in-out 0.75s';
                slider.prevBtn.classList.add(disableClass);
                this.setState({maxed: !this.state.maxed});
            }

        }else{
            if(this.state.counter - 1 === 0){
                const currentOffset = this.state.offset + slider.sliderVisibleWidth;
                slider.sliderList.style.transform = `translateX(${currentOffset}px)`;
                slider.sliderList.style.transition = 'transform ease-in-out 0.75s';
                this.setState({offset: this.state.offset + slider.sliderVisibleWidth});
                slider.prevBtn.classList.add(disableClass);
                slider.nextBtn.classList.remove(disableClass);
            }else{
                const offsetCurrent = this.state.offset + slider.sliderVisibleWidth;
                slider.sliderList.style.transform = `translateX(${offsetCurrent}px)`;
                slider.sliderList.style.transition = 'transform ease-in-out 0.75s';
                this.setState({offset: this.state.offset + slider.sliderVisibleWidth});
                this.setState({maxed: !this.state.maxed});
                slider.nextBtn.classList.remove(disableClass);
            }
        }
       this.setState({counter: this.state.counter - 1});
    }

    onRightClick = (elementId, disableClass, e) => {

        const slider = this.getSliderElements(elementId, e);
        const maxX = Math.floor(slider.sliderItems.length / 4);

        if(this.state.counter === (maxX - 1)){
            const offsetCurrent = this.state.offset - ((slider.sliderVisibleWidth / 4) * (slider.sliderItems.length % 4));
            slider.sliderList.style.transform = `translateX(${offsetCurrent}px)`;
            slider.sliderList.style.transition = 'transform ease-in-out 0.75s';
            this.setState({offset: this.state.offset - ((slider.sliderVisibleWidth / 4) * (slider.sliderItems.length % 4))});
            slider.nextBtn.classList.add(disableClass);
            this.setState({maxed: !this.state.maxed});
        }else{
            slider.prevBtn.classList.remove(disableClass);
            const offsetCurrent = this.state.offset - slider.sliderVisibleWidth;
            this.setState({offset: this.state.offset - slider.sliderVisibleWidth});
            slider.sliderList.style.transform = `translateX(${offsetCurrent}px)`;
            slider.sliderList.style.transition = 'transform ease-in-out 0.75s';
            if(slider.sliderItems.length % 4 === 0 && (this.state.counter + 2 === maxX)){
               slider.nextBtn.classList.add(disableClass);
           }
       }
        this.setState({counter: this.state.counter + 1});
    }

    render(){
        console.log(this.props.elementId);    
        let musicSectionItems = this.props.data.map( item => {
            return (<MusicSectionItem 
                           id={item.id}
                           key={item.id}
                           cover={item.cover_medium || item.picture_medium}
                           tracklist={item.tracklist}
                           playlistData={item.tracks ? item : null}
                           title={item.title}
                           artist={this.props.artist ? item.artist.name : null}
                           clicked={this.props.clicked}>
                    </MusicSectionItem>
            )
        }); 
        return (
            <div className={classes.MusicSection}>
                <div className={classes.SectionHeading}>
                    <h2>{this.props.title}</h2>
                    <div className={classes.CarouselButtons}>
                        <button className={`Prev ${classes.Disabled}`} 
                                onClick={(event) => 
                                            this.onLeftClick(this.props.elementId, classes.Disabled, event)}>
                            <i className='fas fa-2x fa-angle-left'></i>
                        </button>
                        <button className='Next' 
                                onClick={(event) => 
                                            this.onRightClick(this.props.elementId, classes.Disabled, event)}>
                            <i className='fas fa-2x fa-angle-right'></i>
                        </button>
                    </div> 
                </div>
                <div className={classes.SectionItems} id={this.props.elementId}>
                    <ul>
                        {musicSectionItems}
                    </ul>
                </div>
            </div>
    )
    }
};

export default MusicSection;