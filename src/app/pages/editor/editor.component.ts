import { Component, OnInit, AfterViewInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { SpeacialColumnServiceService } from '../service/speacial-column.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})


export class EditorComponent implements OnInit {

  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('Editor') myEditor: ElementRef;
  @ViewChild('uploadImgForm') myUploadImgForm: ElementRef;

  private menuCollection: Array<Object> = [{
    name: '加粗',
    feature: 'bold'
  }, {
    name: '斜体',
    feature: 'italic'
  }, {
    name: '双引号',
    feature: 'formatBlock'
  }, {
    name: '下划线',
    feature: 'underline'
  }, {
    name: '居中',
    feature: 'justifyCenter'
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
    feature: 'insertimage'
  }];
  private placeholder: string = '请输入内容';
  private editor: HTMLElement;
  private showColorPicker: string = 'foreColor';
  private filePicker: string = 'insertImage'
  private color: string;
  private fontSize: number = 5;
  private backgroundColor: string = '#999';
  private richColor: HTMLElement;
  private isInsertHyperlink: boolean = false;
  private hyperlink: any = '';
  private startContainer: any = '';
  private endContainer: any = '';
  private selection: any;
  private range: any;
  private cursorOffset: {
    startOffset: number,
    endOffset: number
  } = {
      startOffset: 0,
      endOffset: 0
    };
  private title: string | number = '';
  private isHideFileInput: boolean = false;

  constructor(private _renderer: Renderer, private _elementRef: ElementRef, private _speacialColumnServiceService: SpeacialColumnServiceService) {
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
      case 'formatBlock':
        this.editArea(aCommandName, false, 'p');
        break;
      case 'underline':
        this.editArea(aCommandName, false, null);
        break;
      case 'justifyCenter':
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
        this.createLink();
        break;
      case 'insertHorizontalRule':
        this.editArea(aCommandName, false, null);
        break;
      case 'insertimage':
        this.editArea(aCommandName, false, 'https://ss0.bdstatic.com/-0U0b8Sm1A5BphGlnYG/kmarketingadslogo/1ba4e76cbb064acee0638f5170e34701_259_194.jpg');
        break;
      default:
    }
    console.log(this.color, '---');
  }

  editArea(aCommandName: string, aShowDefaultUI: boolean, aValueArgument: any) {
    console.log(aCommandName, aShowDefaultUI, aValueArgument);
    let result = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
    console.log('是否成功', result);
  }

  insertHyperlink(aCommandName: string, aShowDefaultUI: boolean, aValueArgument: any) {
    this.inputLink();
    let result = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
    console.log(aCommandName, aShowDefaultUI, aValueArgument, result);
    if (result) {
      this.isInsertHyperlink = false;
    }
  }

  createLink() {
    this.selection = window.getSelection();
    this.range = this.selection.getRangeAt(0);
    this.startContainer = this.range.startContainer;
    this.endContainer = this.range.endContainer;
    this.cursorOffset = {
      startOffset: this.range.startOffset,
      endOffset: this.range.endOffset,
    }
    if (this.cursorOffset.endOffset - this.cursorOffset.startOffset > 0) {
      this.isInsertHyperlink = true;
    }
  }

  closeUrlPopup() {
    this.isInsertHyperlink = false;
  }

  inputLink() {
    this.myEditor.nativeElement.focus();
    console.log(this.selection, 'this.selection');
    this.range = this.selection.getRangeAt(0);
    this.range.setStart(this.startContainer, this.cursorOffset.startOffset);
    this.range.setEnd(this.endContainer, this.cursorOffset.endOffset);
  }

  //上传图片
  uploadArticleImg() {
    let eventTarget: EventTarget = <EventTarget>event.currentTarget
    let img = eventTarget.files[0];
    let imgFormFile = new FormData(this.myUploadImgForm.nativeElement);
    imgFormFile.append('file', img);
    console.log('选择图片', imgFormFile);
    this._speacialColumnServiceService.uploadImg(imgFormFile)
      .subscribe(({ data }) => {
        console.log(data);
        this.myEditor.nativeElement.focus();
        let url: string = data.url;
        let result = this.editArea('insertimage', false, url);
      }, (error) => {
        console.log('错误信息', error);
      })
  }

  // 保存文章 HTML 
  saveArticle() {
    console.log(this.myEditor.nativeElement.innerHTML, this.title);
    let content = this.myEditor.nativeElement.innerHTML;
    this._speacialColumnServiceService.saveOneArticleByUser(this.title, content)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      })
  }

}
