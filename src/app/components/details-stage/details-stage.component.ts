import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StageService } from '../../services/stage.service';

@Component({
  selector: 'app-details-stage',
  templateUrl: './details-stage.component.html',
  styleUrls: ['./details-stage.component.css']
})
export class DetailsStageComponent implements OnInit {
  stage: any;

  constructor(private route: ActivatedRoute, private service: StageService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getStageById(id).subscribe((data) => {
      this.stage = data;
    });
  }
}