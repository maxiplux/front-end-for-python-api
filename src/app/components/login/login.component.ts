import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Token, Usuario} from '../../models/Usuario';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',

})
export class LoginComponent {
  titulo: string = 'Por favor Sign In!';
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      swal.fire('Login', `Hello ${this.authService.usuario.username} !`, 'info');
      this.router.navigate(['/dashboard']);
    }
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null)
    {
      swal.fire('Error Login', 'Username or password empty!', 'error');
      return;
    }

    this.authService.login(this.usuario).subscribe(response   => {
      console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/dashboard']);
      swal.fire('Login', `Hello ${usuario.username}, !`, 'success');
    }, err => {
      if (err.status == 400)
      {
        swal.fire('Error Login', 'Username or Password wrong!', 'error');
      }
    }
    );
  }

}
