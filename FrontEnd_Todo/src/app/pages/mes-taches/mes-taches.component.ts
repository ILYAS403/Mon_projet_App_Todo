import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; // ✅ Important pour *ngFor et date
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mes-taches',
  standalone: true,
  imports: [CommonModule, DatePipe], // ✅ Ajouté pour pipes et ngFor
  templateUrl: './mes-taches.component.html',
  styleUrls: ['./mes-taches.component.css']
})
export class MesTachesComponent implements OnInit {
  currentDate = new Date(); // ✅ Déclare bien ici
  currentDay: number = 1;   // ✅ Ajout obligatoire
  tachesDuJour: any[] = []; // ✅ Initialisé vide
  user: any = {};
  

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.chargerTaches();
  }

  chargerTaches(): void {
    this.authService.getTachesParJour(this.currentDay).subscribe({
      next: (data: any) => (this.tachesDuJour = data), // ✅ typé
      error: (err: any) => console.error("Erreur chargement taches :", err),
    });
  }

  suivant(): void {
    if (this.currentDay < 6) {
      this.currentDay++;
      this.chargerTaches();
    }
  }

  precedent(): void {
    if (this.currentDay > 1) {
      this.currentDay--;
      this.chargerTaches();
    }
  }

  editerTache(tache: any): void {
    this.router.navigate(['/modifier-tache', tache.id]);
  }

  supprimerTache(id: number): void {
    if (confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
      this.authService.deleteTache(id).subscribe({
        next: () => this.chargerTaches(),
        error: (err: any) => console.error("Erreur suppression :", err)
      });
    }
  }
}
