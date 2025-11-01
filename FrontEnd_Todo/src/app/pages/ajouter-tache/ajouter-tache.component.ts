import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ajouter-tache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajouter-tache.component.html',
  styleUrls: ['./ajouter-tache.component.css']
})
export class AjouterTacheComponent {
  tacheForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.tacheForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      date: ['', Validators.required],
      statut: ['En attente', Validators.required],
    });
  }

  onSubmit() {
    if (this.tacheForm.invalid) return;

    this.isLoading = true;
    this.authService.ajouterTache(this.tacheForm.value).subscribe({
      next: (res) => {
        alert('Tâche ajoutée avec succès ✅');
        this.router.navigate(['/mes-taches']);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de l’ajout de la tâche ❌');
        this.isLoading = false;
      }
    });
  }
}
