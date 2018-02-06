import { Component, OnInit, AfterViewInit, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SpeacialColumnServiceService } from '../../service/speacial-column.service';

@Component({
  selector: 'app-column-right',
  templateUrl: './column-right.component.html',
  styleUrls: ['./column-right.component.scss']
})
export class ColumnRightComponent implements OnInit {

  private hotNotes: Array<Object> = [{
    title: '程序生涯'
  }, {
    title: '篮球生涯'
  }, {
    title: '游戏生涯'
  }];

  private news: Array<Object> = [{
    title: '微软可能会在智能耳机上与苹果AirPods竞争'
  }, {
    title: '消息称SAP/McAfee/赛门铁克正让俄罗斯监管机'
  }, {
    title: '《绝地求生》Xbox One版销量已达400万 官方将免费送3万BP币'
  }];

  private channels: Array<String> = [
    'Java',
    'Javascript',
    'NodeJs',
    'Angular',
    'Vue',
    'MYSQL',
    '后端',
    '前端',
    'Python',
    'React',
    'C++',
    'C#'
  ];

  private metaData: String[];

  //控制mouse事件的变量
  private forMouseDown: boolean = true;
  private forMouseMove: boolean = false;
  private forMouseUp: boolean = false;

  // 鼠标按下位移
  private startX: number = 0;
  private startY: number = 0;
  private disX: number = 0;
  private disY: number = 0;

  // 获取立方体dom
  private cubeMeta: HTMLElement;
  private cubePlane: Array<HTMLElement>;
  private shadow: HTMLElement;

  constructor(private _speacialColumnServiceService: SpeacialColumnServiceService, private _elementRef: ElementRef, 
    private _renderer: Renderer, private _renderer2: Renderer2, private _router: Router) { }

  ngOnInit() {
    this.metaData =this.channels;
    this.cubeMeta = this._elementRef.nativeElement.querySelector('.channel-sz');
    this.getAllMeta();
    this.listenerWindowKeyUp();
  }
  ngAfterViewInit() {
    this.cubePlane = this._elementRef.nativeElement.querySelectorAll('.tangent-plane');
    this.shadow = this._elementRef.nativeElement.querySelector('.shadow');
  }

  getAllMeta() {
    this._speacialColumnServiceService.getAllMeta()
      .subscribe((metaData: any) => {
        this.metaData = metaData.data
        this.channels = metaData.data.slice(0, 6);
      })
  }

  mouseDown(e: MouseEvent) {
    this.forMouseMove = true;
    this.startX = e.clientX/2;
    this.startY = e.clientY/2;
    this._renderer.setElementStyle(this.cubeMeta, 'transition', 'all .2s ease');
  }

  mouseMove(e: MouseEvent) {
    if (this.forMouseMove) {
      let xx = e.clientX/2;
      let yy = e.clientY/2;
      this.disX += (xx - this.startX)*1.5;
      this.disY += (yy - this.startY)*1.5;
      this.shadowScale(this.shadow, this.disX);
      this._renderer.setElementStyle(this.cubeMeta, 'transform', `rotateX(${this.disX}deg) rotateY(${this.disY}deg) rotateZ(0deg)`);  
      this.startX = e.clientX/2;
      this.startY = e.clientY/2;
    }
    this.forMouseUp = true;
  } 

  mouseUp(e: MouseEvent) {
    // this.mouseMove = null;
    if(this.forMouseUp) {
      this.forMouseMove = false;
    }
  }
  
  changeMeta():void {
    //清除move事件
    this.forMouseMove = false;
    this._renderer.setElementStyle(this.cubeMeta, 'transition', 'all 1s ease');
    this._renderer.setElementStyle(this.cubeMeta, 'transform', `rotateY(${this.getRadomAngle(90)}deg) rotateY(${this.getRadomAngle(180)}deg) rotateZ(${this.getRadomAngle(90)}deg)`);
    this.getRadomMeta();
    this.shadowScale(this.shadow, this.disX);
    // this.addMetaChildrenClass();
    this.startX = this.getRadomAngle(90);
    this.startY = this.getRadomAngle(180);
  }

  addMetaChildrenClass() {
    this.cubePlane.forEach((e: HTMLElement) => {
      this._renderer2.setStyle(e, 'transform', 'rotateX(100px) rotateY(100px)');
    })
  }

  getRadomMeta() {
    // 换一批标签
    let randomNum = Math.floor(Math.random()*6);
    this.channels = this.metaData.slice(randomNum, randomNum+6);
  }

  // 获得随机角度
  getRadomAngle(baseAngle: number) {
    return Math.floor(baseAngle + Math.random()*360);
  }

  // 监听全局keyup事件
  listenerWindowKeyUp() {
    window.onmouseup = (e: MouseEvent):void => {
      if(this.forMouseUp) {
        this.forMouseMove = false;
      }
    }
  }

  // cbue阴影变化
  shadowScale(target: HTMLElement, changeVaue: number) {
    this._renderer2.setStyle(target, 'transform', `rotatex(275deg) rotateY(1deg) translateY(47px) translateZ(172px) scale(${.6+Math.random()-0.5})`);
    this._renderer2.setStyle(target, 'transition', 'all 1.5s ease');
  }

  getArticleByTag(tag) {
    this._router.navigate(['t'], {
      queryParams: {
        name: tag.name,
        id: tag.id
      }
    });
  }
}
