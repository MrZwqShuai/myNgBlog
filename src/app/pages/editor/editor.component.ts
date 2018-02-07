import { Component, OnInit, AfterViewInit,ViewChild, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @ViewChild('textColor') textColor: ElementRef;

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
  }, {
    name: '分割线',
    feature: 'insertHorizontalRule'
  }, {
    name: '图片',
    feature: 'insertImage'
  }];
  private placeholder: string = '请输入内容';
  private editor: HTMLElement;
  private showColorPicker: string = 'foreColor';
  private color: string;
  private fontSize: number = 5;
  private backgroundColor: string = '#999';
  private richColor: HTMLElement;
  private isInsertHyperlink: boolean = false;
  private hyperlink: any = '';
  private startContainer: any = '';
  private endContainer: any = '';

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) { 
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  
  changeInput(aCommandName: string) {
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
      this.editArea(aCommandName, false, this.backgroundColor);
      break;
      case 'fontSize':
      this.editArea(aCommandName, false, this.fontSize);
      break;
      case 'foreColor':
      this.editArea(aCommandName, false, this.color);
      break;
      case 'createLink':
      this.isInsertHyperlink = true;
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    range.setStart(range.startContainer, 1);
    range.setEnd(range.endContainer, 3);
    this.startContainer = range.startContainer;
    this.endContainer = range.endContainer;
    console.log(range);
      // this.insertHyperlink(aCommandName, false, this.hyperlink);
      break;    
      case 'insertHorizontalRule':
      this.editArea(aCommandName, false, null);
      break; 
      case 'insertImage':
      this.editArea(aCommandName, false, 'https://angular.cn/assets/images/logos/angular/logo-nav@2x.png');
      break;
      default:
    }
    console.log(this.color, '---');
  }

  editArea(aCommandName: string, aShowDefaultUI: boolean, aValueArgument: any) {
    console.log(aCommandName, aShowDefaultUI, aValueArgument);
    let result = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
    // console.log('是否成功', range);
  }
 
  insertHyperlink(aCommandName: string, aShowDefaultUI: boolean, aValueArgument: any) {
    this.inputLink();
    let result = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
    console.log(aCommandName, aShowDefaultUI, aValueArgument, result);
    if(result) {
      this.isInsertHyperlink = false;
    }
  }
  
  closeUrlPopup() {
    this.isInsertHyperlink = false;
  }

  inputLink() {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    console.log(range);
    range.setStart(this.startContainer, 1);
    range.setEnd(this.endContainer, 3); 
  }

}
