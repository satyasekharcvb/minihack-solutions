import { LightningElement } from 'lwc';

export default class Slider extends LightningElement {
    val=2
    clicks=0;
    timer;

    handleChange(event){
        clearTimeout(this.timer);
        const targetvalue = event.target.value;
        console.log(event.target.value);
        this.timer = setTimeout(() => { 
            this.dispatchEvent(new CustomEvent('sliderclicked',{
                detail:{
                    count:targetvalue,
                    clicks: ++this.clicks
                }
            }));
            console.log(targetvalue);
        },200);
    }
}