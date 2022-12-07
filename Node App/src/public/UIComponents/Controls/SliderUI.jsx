import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SvgSlider from './Slider';

// TODO Make Slider Scalable, i.e. set the width and height of the actual
// slider!

export default class SliderUI extends Component {
    state = {
        lastSliderOffset: 0,
        mouseStartPos: 0,
        sliderOffset: 0,
        mouseHeld: false,
        preCalcedMultiplier: 1,
    }

    componentDidMount() {
        const { minRelVal, maxRelVal } = this.props;

        const preCalcedMultiplier = (maxRelVal - minRelVal) / 150.0;
        this.setState({ preCalcedMultiplier });
        window.addEventListener('mouseup', this.sliderDragEnd);
    }

    componentWillUnmount() {
        window.removeEventListener('mouseup', this.sliderDragEnd);
        window.removeEventListener('mousemove', this.sliderBeingDragged);
    }

    setSliderMinMax() {

    }

    sliderBeingDragged = (e) => {
        const { mouseStartPos, lastSliderOffset, preCalcedMultiplier } = this.state;
        let sliderOffset = mouseStartPos - e.pageY + lastSliderOffset;

        // Filter out anything above or below what we want!
        if(sliderOffset > 150) {
            return;
            // sliderOffset = 150;
        } else if(sliderOffset < 0) {
            return;
            // sliderOffset = 0;
        }

        const { sliderName, minRelVal, reportOffset } = this.props;
        const relativeValue = preCalcedMultiplier * sliderOffset + minRelVal;
        reportOffset(sliderName, relativeValue);

        this.setState({ sliderOffset });
    }

    sliderDragStart = (e) => {
        // const { sliderName } = this.props;
        const { sliderOffset } = this.state;
        this.setState({ mouseHeld: true, mouseStartPos: e.pageY, lastSliderOffset: sliderOffset });
        window.addEventListener('mousemove', this.sliderBeingDragged);
    }

    sliderDragEnd = (e) => {
        const { mouseHeld } = this.state;
        if (mouseHeld) {
            window.removeEventListener('mousemove', this.sliderBeingDragged);
        }
    }

    render() {
        const { sliderOffset } = this.state;
        return (
            <SvgSlider dragStart={this.sliderDragStart} sliderOffset={sliderOffset} />
        );
    }
}

SliderUI.propTypes = {
    sliderName: PropTypes.string.isRequired,
    reportOffset: PropTypes.func,
    minRelVal: PropTypes.number,
    maxRelVal: PropTypes.number,
}

SliderUI.defaultProps = {
    reportOffset: () => { console.log("Slider offset not connected to anything!")},
    minRelVal: 0,
    maxRelVal: 150,
}