import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";





@Component({
  selector: 'app-left-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './left-bar.component.html',

})
export class LeftBarComponent {
  constructor(private authService: AuthService, private router: Router) {

  }
  logout() {

    const username=this.authService.usuario.username;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
