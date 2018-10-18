import { Component } from '@angular/core';
import { NewsPaper, Reader } from './observateur/observateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'astonjobs';

  constructor() {
    let np = new NewsPaper();
    let toto = new Reader('Toto');
    let chuck = new Reader('Chuck');
    let trivet = new Reader('Trivet');

    np.addObserver(toto);
    np.addObserver(chuck);
    np.addObserver(trivet);

    np.breakOutNews('Chuck norris peut faire du feu en frottant deux glaçons');
    np.breakOutNews('Chuck Norris ne ment jamais, c\'est la vérité qui se trompe.');
  }
}
