import { Component, OnInit } from '@angular/core';
import { StageService } from '../../services/stage.service';

@Component({
  selector: 'app-stages-ing',
  templateUrl: './stages-ing.component.html',
  styleUrls: ['./stages-ing.component.css']
})
export class StagesIngComponent implements OnInit {
  stages: any[] = [];

  constructor(private service: StageService) {}


  ngOnInit(): void {
    this.service.getAllStages().subscribe((data: any[]) => {
      this.stages = data;
    });
  }

  deleteStage(id: number): void {
    this.service.deleteStage(id).subscribe(() => {
      this.stages = this.stages.filter((s) => s.id !== id);
    });
  }
}