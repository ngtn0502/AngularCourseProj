import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipe-project';

  loadedFeature: string = 'recipes';

  onChangeSite(flag: string) {
    this.loadedFeature = flag;
  }
}
