import { Component, ChangeDetectionStrategy, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit {

  constructor(private _renderer2: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
  }

  show(): void {
    this.updateStatusLoading(true);
  }

  updateStatusLoading(isShow: boolean) {
    if(isShow) {
      this._renderer2.addClass(this.elementRef.nativeElement, 'show');
      return;
    }
    this._renderer2.removeClass(this.elementRef.nativeElement, 'show');
  }

}
