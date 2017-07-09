import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }
  logout(){
    // Aquí colocas el api de firebase o el cierre de sesión del api que uses.
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
