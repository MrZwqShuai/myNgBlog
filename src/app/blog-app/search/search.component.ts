import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public _commonService: CommonService) { }

  ngOnInit() {
  }

  
}
