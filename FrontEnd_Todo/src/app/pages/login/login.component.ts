import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // Création du formulaire réactif
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', Validators.required]
    });
  }

 onLogin(): void {
    if (this.loginForm.invalid) return;

    const { email, mot_de_passe } = this.loginForm.value;
    console.log('Requête envoyée :', { email, mot_de_passe });
    this.authService.login(email, mot_de_passe).subscribe({
      next: (response) => {
        console.log('✅ Connexion réussie', response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/mes-taches']);
      },
      error: (err) => {
        console.error('❌ Erreur de connexion', err);
        alert('Email ou mot de passe incorrecty.');
        
      }
    });
  }
}