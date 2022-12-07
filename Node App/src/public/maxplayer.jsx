import React, { Component, createRef } from 'react';
import { createDevice } from '@rnbo/js';
// import {
//     LargeDial,
//     Play,
//     Slider,
//     Slider1,
//     SmallDial,
//     Switch,
//     Stop,
//     Trigger,
// } from './icons/index';
import SliderUI from './UIComponents/Controls/SliderUI';

import './maxplayer.styles.css';

let WAContext = window.AudioContext || window.webkitAudioContext;
let context = new WAContext();


export default class MaxPlayer extends Component {
    state = {
        mouseHeld: false,
        mouseHoldStartYPos: null,
        componentInteractedWith: null,
        sliderOffset: 0,
        started: false,
    }
    constructor() {
        super();
        this.device = null;
    }

    componentDidMount() {
        this.setup();
    }

    setup = async () => {
        let rawPatcher = await fetch("export/UIDemo.export.json");
        let patcher = await rawPatcher.json();

        this.device = await createDevice({ context, patcher });
        
        console.log(this.device);
        console.log(this.device.dataBufferDescriptions);

        // this.device.parameters.forEach(parameter => {
        //     console.log(parameter.name);
        //     console.log(parameter.min);
        //     console.log(parameter.max);
        //     console.log(parameter.value);

        // });
        this.device.node.connect(context.destination);

    };


    sliderValChange = (sliderName, value) => {
        console.log(`${sliderName}: ${value}`);
        const param = this.device.parametersById.get(sliderName);
        console.log(param);
        param.value = value;
    }

    startPatch = () => {
        context.resume();
        this.setState({ started: true });
    }

    render() {
        const { started } = this.state;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                {
                    !started
                    && <div style={{ 
                            width: '100%',
                            height: '100%',
                            left: 0,
                            top: 0,
                            position: 'absolute',
                            zIndex: '5',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                        <button onClick={this.startPatch}>
                            Start Patch
                        </button>
                    </div>
                }
                <h1>Max MSP RNBO~ UI Demo</h1>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <table>
                        <thead>
                            <tr>
                                <td><h2>Mod</h2></td>
                                <td><h2>Mod</h2></td>
                                <td><h2>Carrier</h2></td>
                                <td><h2>Carrier</h2></td>
                                {/* <td><h2>Pan</h2></td> */}
                            </tr>
                            <tr>
                                <td><h2>Freq</h2></td>
                                <td><h2>Level</h2></td>
                                <td><h2>Freq</h2></td>
                                <td><h2>Level</h2></td>
                                {/* <td><h2>L / R</h2></td> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><SliderUI sliderName="modulator_freq_ratio" reportOffset={this.sliderValChange} minRelVal={0.001} maxRelVal={50} default={1} /></td>
                                <td><SliderUI sliderName="modulator_level" reportOffset={this.sliderValChange} minRelVal={0} maxRelVal={5000} default={0} /></td>
                                <td><SliderUI sliderName="carrier_freq" reportOffset={this.sliderValChange} minRelVal={1} maxRelVal={1000} default={100} /></td>
                                <td><SliderUI sliderName="carrier_level" reportOffset={this.sliderValChange} minRelVal={0} maxRelVal={1} default={0} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}