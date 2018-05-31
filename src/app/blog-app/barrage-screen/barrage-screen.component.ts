import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'app-barrage-screen',
    templateUrl: './barrage-screen.component.html',
    styleUrls: ['./barrage-screen.component.scss']
})
export class BarrageScreenComponent implements OnInit {

    @ViewChild('barrage') barrage: ElementRef

    @Input() barrageWave: object[] = [{}];

    barrageList: object[] = [];

    ctx: any;

    w: any;

    h: any;

    textList: string[] = ['弹幕', '666', '233333333',
        'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
        'Angular', '测试弹幕效果'
    ];



    constructor() { }

    ngOnInit() {
        console.log(this.barrage.nativeElement, '----')
        this.ctx = this.barrage.nativeElement.getContext('2d');
        let rect = this.barrage.nativeElement.getBoundingClientRect();
        this.w = rect.right - rect.left;
        this.h = rect.bottom - rect.top;
        this.draw();
        this.textList.forEach((t) => {
            this.shoot(t);
        })
    }

    //添加弹幕列表
    shoot(value) {
        let top = this.getTop();
        let color = this.getColor();
        let offset = this.getOffset();
        let width = Math.ceil(this.ctx.measureText(value).width);

        let barrage = {
            value: value,
            top: top,
            left: this.w,
            color: color,
            offset: offset,
            width: width
        }
        this.barrageList.push(barrage);
    }

    //开始绘制
    draw() {
        console.log('开始')
        if (this.barrageList.length) {
            this.ctx.clearRect(0, 0, this.w, this.h);
            for (let i = 0; i < this.barrageList.length; i++) {
                let b: any = this.barrageList[i];
                if (b.left + b.width <= 0) {
                    this.barrageList.splice(i, 1);
                    i--;
                    continue;
                }
                b.left -= b.offset;
                this.drawText(b);
            }
        }
        requestAnimationFrame(this.draw.bind(this));
    }

    //绘制文字
    drawText(barrage) {
        this.ctx.fillStyle = barrage.color;
        this.ctx.fillText(barrage.value, barrage.left, barrage.top);
    }

    //获取随机颜色
    getColor() {
        return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    }

    //获取随机top
    getTop() {
        //canvas绘制文字x,y坐标是按文字左下角计算，预留30px
        return Math.floor(Math.random() * (this.h - 30)) + 30;
    }

    //获取偏移量
    getOffset() {
        return +(Math.random() * 4).toFixed(1) + 1;
    }

}


}
