import { api, LightningElement } from 'lwc';

export default class RecordListSlider extends LightningElement {
    val=1;
    count=0;

    handleChange(event){
        this.count++;
        const counter = this.count;
        const value = event.detail.value;
        this.dispatchEvent(
            new CustomEvent('sliderchanged', {
                detail: {value, counter }
            })
        );
    }
}