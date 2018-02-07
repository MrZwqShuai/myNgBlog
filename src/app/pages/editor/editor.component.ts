import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  private menuCollection: Array<Object> = [{
    name: '加粗',
    feature: 'bold'
  }, {
    name: '斜体',
    feature: 'italic'
  }, {
    name: '下划线',
    feature: 'underline'
  }, {
    name: 'h1',
    feature: 'fontSize'
  }, {
    name: '背景色',
    feature: 'hiliteColor'
  }, {
    name: '字体颜色',
    feature: 'foreColor'
  }, {
    name: '超链接',
    feature: 'createLink'
  }];
  private editor: HTMLElement;
  private showColorPicker: string = 'foreColor';
  private color: string
  private richColor: HTMLElement;

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) { 
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._elementRef.nativeElement.querySelector('.text-color');
  }

  
  changeInput(aCommandName: string, aValueArgument: any) {
    switch (aCommandName) {
      case 'insertHTML':
      break;
      case 'bold':
      this.editArea(aCommandName, false, null);
      break;
      case 'italic':
      this.editArea(aCommandName, false, null);
      break;
      case 'underline':
      this.editArea(aCommandName, false, null);
      break;
      case 'hiliteColor':
      this.editArea(aCommandName, false, aValueArgument);
      break;
      case 'fontSize':
      this.editArea(aCommandName, false, aValueArgument);
      break;
      case 'foreColor':
      this.editArea(aCommandName, false, aValueArgument);
      break;
      case 'createLink':
      this.editArea(aCommandName, false, 'http://www.baidu.com');
      break;
      default:
    }
    console.log(this.color, '---');
  }

  editArea(aCommandName: string, aShowDefaultUI: boolean, aValueArgument: any) {
    // let selection = window.getSelection();
    // let range = selection.getRangeAt(0);
    console.log(aCommandName, aShowDefaultUI, aValueArgument);
    let result = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
    // console.log('是否成功', range);
  }

}
