import { Component, OnInit, AfterViewInit } from '@angular/core';

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
    name: '斜体'
  }, {
    name: 'h1'
  }, {
    name: 'h2'
  }, {
    name: '链接'
  }];
  private editor: HTMLElement;

  constructor() { 
  }

  ngOnInit() {
    this.editor = <HTMLElement>document.querySelector(".edit-area");
  }

  
  changeInput(feature) {
    // let selection = window.getSelection();
    // let range = selection.getRangeAt(0);
    // console.log(range);
    console.log(this.editor);
    let result = document.execCommand("Cut", false, null);
    console.log('是否成功', result);
  }

}
