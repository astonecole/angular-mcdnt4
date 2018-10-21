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
    const np = new NewsPaper();
    const toto = new Reader('Toto');
    const chuck = new Reader('Chuck');
    const trivet = new Reader('Trivet');

    np.addObserver(toto);
    np.addObserver(chuck);
    np.addObserver(trivet);

    np.breakOutNews('Chuck norris peut faire du feu en frottant deux glaçons');
    np.breakOutNews('Chuck Norris ne ment jamais, c\'est la vérité qui se trompe.');
  }
}
