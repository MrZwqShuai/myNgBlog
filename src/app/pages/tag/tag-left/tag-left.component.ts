import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SpeacialColumnServiceService } from '../../../pages/service/speacial-column.service';
import { ColumnLeftComponent } from '../../speacial-column/column-left/column-left.component';
import { TagNAVLIST } from '../../static-data/static-nav'

@Component({
  selector: 'app-tag-left',
  templateUrl: './tag-left.component.html',
  styleUrls: ['./tag-left.component.scss']
})
export class TagLeftComponent extends ColumnLeftComponent implements OnInit {
  public navList = TagNAVLIST;
  constructor(public router: Router, public elementRef: ElementRef, public renderer: Renderer2, public _speacialColumnServiceService: SpeacialColumnServiceService) { 
    super(router, elementRef, renderer, _speacialColumnServiceService);
  }
  ngOnInit() {
    this.getArticleByMeta();
  }

  getArticleByMeta() {
    this._speacialColumnServiceService.getArticleByMeta()
    .subscribe((notesData: any) => {
      this.notes = notesData.data;
      this.selectLoading(this.articleEl, '1');
    }, (error: any) => {
      this.closeError(error);
      if(error) {
        this.selectLoading(this.articleEl, '1');
      }
    })
  }

}
