import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private sub: any;
  public metaName: string = '';
  public totalAt: number = 0;

  constructor(public router: Router, public elementRef: ElementRef, public renderer: Renderer2, public _speacialColumnServiceService: SpeacialColumnServiceService, private activatedRoute: ActivatedRoute) {
    super(router, elementRef, renderer, _speacialColumnServiceService);
  }

  ngOnInit() {
    this.bindMetaName();
  }

  getArticleByMeta(tagId: number) {
    this._speacialColumnServiceService.getArticleByMeta(tagId)
      .subscribe((notesData: any) => {
        this.notes = notesData.data;
        this.totalAt = notesData.data.length;
        this.selectLoading(this.articleEl, '1');
      }, (error: any) => {
        this.closeError(error);
        if (error) {
          this.selectLoading(this.articleEl, '1');
        }
      })
  }

  bindMetaName() {
    this.sub = this.activatedRoute
      .queryParams
      .subscribe(queryParams => {
        this.metaName = queryParams.name;
        this.getArticleByMeta(queryParams.id);
      })
  }

}
