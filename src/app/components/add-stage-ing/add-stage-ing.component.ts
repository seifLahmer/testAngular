import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StageService } from '../../services/stage.service';

@Component({
  selector: 'app-add-stage-ing',
  templateUrl: './add-stage-ing.component.html'
})
export class AddStageIngComponent implements OnInit {
  stageForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: StageService
  ) {}

  ngOnInit(): void {
    this.stageForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]],
      entreprise: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.stageForm.valid) {
      const stage = {
        ...this.stageForm.value,
        disponible: true,
        nbrInteresse: 0
      };
      this.service.addStage(stage).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}