import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fixture';

  info = undefined;

  constructor(public authService:AuthService) {

  }

  iniciarSesion($event) {
    this.authService.login("admin@admin.com","123456");
  }

  traerInfo($event) {
    this.authService.postMe().subscribe((res) => {
      this.info = res;
    }, (err) => {
      console.log("error");
    });
  }

}
