import { useState, useEffect } from "react";
import { createDevice, Device } from "@rnbo/js";
import ReactSlider from "react-slider";

import "./maxplayer.styles.css";

const MaxPlayer = () => {
    // const [mouseHeld, setMouseHeld] = useState(false);
    // const [mouseHoldStartYPos, setMouseHoldStartYPos] = useState<number | null>(null);
    // const [componentInteractedWith, setComponentInteractedWith] = useState<unknown>(null);
    // const [sliderOffset, setSliderOffset] = useState(0);
    const [started, setStarted] = useState(false);
    const [device, setDevice] = useState<Device | null>(null);
    const [context, setContext] = useState<AudioContext | undefined>();

    useEffect(() => {
        if (!context) {
            return;
        }
        const setup = async () => {
            const rawPatcher = await fetch("export/UIDemo.export.json");
            const patcher = await rawPatcher.json();

            const createdDevice = await createDevice({ context, patcher });

            createdDevice.node.connect(context.destination);

            setDevice(createdDevice);
        };
        setup();
    }, [context]);


    const sliderValChange = (sliderName: string, value: number) => {
        console.log(`${sliderName}: ${value}`);
        const param = device?.parametersById.get(sliderName);
        console.log(param);
        if (param) {
            param.value = value;
        }
    };

    const startPatch = () => {
        const context = new AudioContext();
        context.resume();
        setContext(context);
        setStarted(true);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            {!started && (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        left: 0,
                        top: 0,
                        position: "absolute",
                        zIndex: "5",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <button onClick={startPatch}>Start Patch</button>
                </div>
            )}
            <h1>Max MSP RNBO~ UI Demo</h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <table>
                    <thead>
                        <tr>
                            <td>
                                <h2>Mod</h2>
                            </td>
                            <td>
                                <h2>Mod</h2>
                            </td>
                            <td>
                                <h2>Carrier</h2>
                            </td>
                            <td>
                                <h2>Carrier</h2>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Freq</h2>
                            </td>
                            <td>
                                <h2>Level</h2>
                            </td>
                            <td>
                                <h2>Freq</h2>
                            </td>
                            <td>
                                <h2>Level</h2>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ReactSlider
                                    className="slider"
                                    thumbClassName="thumb"
                                    trackClassName="track"
                                    min={0.001}
                                    max={50}
                                    defaultValue={1}
                                    onChange={(value: number) => sliderValChange("modulator_freq_ratio", value)}
                                    orientation="vertical"
                                />
                            </td>
                            <td>
                                <ReactSlider
                                    className="slider"
                                    thumbClassName="thumb"
                                    trackClassName="track"
                                    min={0}
                                    max={5000}
                                    defaultValue={0}
                                    onChange={(value: number) => sliderValChange("modulator_level", value)}
                                    orientation="vertical"
                                />
                            </td>
                            <td>
                                <ReactSlider
                                    className="slider"
                                    thumbClassName="thumb"
                                    trackClassName="track"
                                    min={1}
                                    max={1000}
                                    defaultValue={100}
                                    onChange={(value: number) => sliderValChange("carrier_freq", value)}
                                    orientation="vertical"
                                />
                            </td>
                            <td>
                                <ReactSlider
                                    className="slider"
                                    thumbClassName="thumb"
                                    trackClassName="track"
                                    min={0}
                                    max={1}
                                    defaultValue={0}
                                    onChange={(value: number) => sliderValChange("carrier_level", value)}
                                    orientation="vertical"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MaxPlayer;
