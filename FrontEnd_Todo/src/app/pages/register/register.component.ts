import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      profil: [''],
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', Validators.required],
      confirmation_mot_de_passe: ['', Validators.required],
      sexe: [''],
      confirmation_infos: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      alert("Veuillez remplir correctement tous les champs obligatoires !");
      return;
    }

    const { mot_de_passe, confirmation_mot_de_passe } = this.registerForm.value;

    if (mot_de_passe !== confirmation_mot_de_passe) {
      alert("❌ Les mots de passe ne correspondent pas !");
      return;
    }

    // Envoi des données vers le backend
    this.authService.REGISTER(this.registerForm.value).subscribe({
      next: (response) => {
        console.log("✅ Inscription réussie :", response);
        alert("🎉 Compte créé avec succès !");
        this.router.navigate(['/login']); // Redirige vers la page de connexion
      },
      error: (err) => {
        console.error("❌ Erreur lors de l'inscription :", err);
        alert("Une erreur est survenue lors de l'inscription. Veuillez réessayer !");
      }
    });
  }
}
