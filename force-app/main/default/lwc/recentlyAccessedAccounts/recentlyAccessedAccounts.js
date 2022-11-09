import { LightningElement } from 'lwc';
import RECENT_ACCOUNTS from '@salesforce/apex/WordCloudController.getAccounts';
import { loadScript } from 'lightning/platformResourceLoader';
import WORD_CLOUD from '@salesforce/resourceUrl/WordCloud';
import { NavigationMixin } from 'lightning/navigation';

export default class RecentAccessedAccounts extends NavigationMixin(LightningElement) {

   hasError = false;
   scriptLoaded = false;

   renderedCallback() {
       loadScript(this, WORD_CLOUD)
           .then(() => {
               this.scriptLoaded = true;
               RECENT_ACCOUNTS()
                   .then(result => {
                       this.renderCloud(result);
                   })
                   .catch(() => {
                       this.hasError = true;
                   });
           });
   }

   navigateToRecord(recordId){
      
       this[NavigationMixin.Navigate]({
           type: 'standard__recordPage',
           attributes: {
               actionName: "view",
               recordId: recordId,
               objectApiName: "Account"
           }
       });
   }

   renderCloud(data){
       let weight = 50;
       let list = [];
      
       for(let acc in data){
           if(data[acc] != null){
               let accObj = data[acc];
               list.push([accObj.Name, weight, accObj.Id]);
               weight = weight - 5;
           }
       }
      
       let el = this.template.querySelector('canvas');
       let self = this;
       window.WordCloud(el, { click: function(item){
           if(item[2] != null){
               self.navigateToRecord(item[2]);
           }
       },list: list });
      
   }
}