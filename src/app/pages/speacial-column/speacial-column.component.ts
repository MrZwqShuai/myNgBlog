import { Component, OnInit } from '@angular/core';
import { SpeacialColumnServiceService } from './speacial-column.service';

@Component({
  selector: 'app-speacial-column',
  templateUrl: './speacial-column.component.html',
  styleUrls: ['./speacial-column.component.scss'],
  providers: [SpeacialColumnServiceService]
})
export class SpeacialColumnComponent implements OnInit {

  constructor(private _speacialColumnServiceService: SpeacialColumnServiceService) { }

  ngOnInit() {
  }

}
