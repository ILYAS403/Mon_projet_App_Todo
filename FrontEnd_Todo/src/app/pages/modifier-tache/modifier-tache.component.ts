/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modifier-tache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modifier-tache.component.html',
  styleUrls: ['./modifier-tache.component.css']
})
export class ModifierTacheComponent implements OnInit {
  tacheForm!: FormGroup;
  id!: number;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.tacheForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      date: ['', Validators.required],
      statut: ['']
    });

    this.authService.getTacheById(this.id).subscribe({
      next: (data) => this.tacheForm.patchValue(data),
      error: (err) => console.error(err)
    });
  }

  onSubmit() {
    if (this.tacheForm.invalid) return;

    this.isLoading = true;
    this.authService.modifierTache(this.id, this.tacheForm.value).subscribe({
      next: () => {
        alert('Tâche mise à jour ✅');
        this.router.navigate(['/mes-taches']);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la modification ❌');
        this.isLoading = false;
      }
    });
  }
}
*/