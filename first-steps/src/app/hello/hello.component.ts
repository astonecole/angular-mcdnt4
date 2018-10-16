import { Component } from '@angular/core';

/**
 * selector: [app-hello] == <div app-hello></div>
 * selector: .app-hello == <div class="app-hello"></div>
 * selector: app-hello == <app-hello></app-hello>
 */
@Component({
    selector: 'app-hello',
    templateUrl: 'hello.component.html'
})
export class HelloComponent {
    name: string = 'Bart';

    mytext = '';
    contentTxt = 'Property Bindind';
    valueData = '';
  
    changeValueData(event: Event) {
      let inputText = <HTMLInputElement>event.target;
      this.valueData = inputText.value;
    }
  
    getName():string {
      return 'Homer';
    }
  
    getColor(text: string):string {
      if (text === 'Hello') {
        return 'royalblue';
      } else {
        return 'orangered';
      }
    }
  
    toast(text: string): void {
      console.log(text);
    }
  
    handleEvent(event: Event) {  
      let btn = <HTMLButtonElement>event.target;
  
      if (btn.textContent !== 'Off') {
        btn.textContent = 'Off';
      } else {
        btn.textContent = 'On';
      }
      console.log(event);
    }
}
