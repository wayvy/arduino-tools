import {Config} from './Config';

class Sample {
    value: number;
    timeStamp: number;
    constructor(value: number, timeStamp: number) {
        this.value = value;
        this.timeStamp = timeStamp;
    }
}

class Pin {
    pinN: string;
    samples: Sample[];
    constructor(pinN: string, sample: Sample) {
        this.pinN = pinN;
        this.samples = [sample];
    }
    addSample(sample: Sample) {
        this.samples = [...this.samples, sample];
        this.samples.length > Config.maxList ? this.samples.shift() : null;
    }
}
export class PinList {
    list: Pin[];
    pinNs: number[];
    createdAt: Date;
    constructor() {
        this.list = [];
        this.pinNs = [];
        this.createdAt = new Date();
    }
    add(pinN: string, value: number, timeStamp: number) {
        let sample = new Sample(value, timeStamp);
        let isAdd = false;
        if (this.list.length === 0) {
            this.list = [new Pin(pinN, sample)];
        } else {
            this.list.map(pin => {
                if (pin.pinN === pinN) {
                    pin.addSample(sample);
                    isAdd = true;
                }
            });
            !isAdd ? this.list = [...this.list, new Pin(pinN, sample)] : null;
        }
    }
    get() {
        return this.list;
    }
}