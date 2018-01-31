import { Component, OnInit } from '@angular/core';
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
    'MYSQL'
  ];

  constructor(private _speacialColumnServiceService: SpeacialColumnServiceService) { }

  ngOnInit() {
    // this.getAllMeta();
    
        move();

        clickBox();

        //鼠标按下且移动时触发，   

        function move() {
            var body = document.querySelector("body");
            var box = document.querySelector(".box");
            var xNum = document.querySelector(".xNum");
            var yNum = document.querySelector(".yNum");
            var x = 0, y = 0, z = 0;
            var xx = 0, yy = 0;
            var xArr = [], yArr = [];
            window.onmousedown = function (e) {//鼠标按下事件   
                body.style.cursor = 'url("img/closedhand1.png"),auto';
                xArr[0] = e.clientX / 2;//获取鼠标点击屏幕时的坐标   
                yArr[0] = e.clientY / 2;
                window.onmousemove = function (e) {//鼠标移动事件————当鼠标按下且移动时触发   
                    xArr[1] = e.clientX / 2;//获取鼠标移动时第一个点的坐标   
                    yArr[1] = e.clientY / 2;
                    yy += xArr[1] - xArr[0];//获得鼠标移动的距离   
                    xx += yArr[1] - yArr[0];
                    xNum.value = xx + "°";//将所获得距离数字赋值给input显示旋转角度   
                    yNum.value = yy + "°";
                    //将旋转角度写入transform中   
                    box.style.transform = "rotatex(" + xx + "deg) rotatey(" + yy + "deg) rotatez(0deg)scale3d(0.7,0.7,0.7)";
                    xArr[0] = e.clientX / 2;
                    yArr[0] = e.clientY / 2;
                }

            };
            window.onmouseup = function () {//鼠标抬起事件————用于清除鼠标移动事件，   
                body.style.cursor = 'url("img/openhand1.png"),auto';
                window.onmousemove = null;
            }
        }
        //点击事件、负责立方体盒子的六面伸展   
        function clickBox() {
            var btn = document.querySelector(".open");
            var box = document.querySelector(".box");
            var son = box.children;
            var value = 0;
            //存储立方体散开时的transform参数   
            var arr0 = ["rotatey(-90deg) translatex(-100px)", "rotatey(90deg) translatex(100px)", "rotatex(90deg) translatey(-100px)","rotatex(-90deg) translatey(100px)", "translatez(-100px)", "translatez(100px)"];
            //存储立方体合并时的transform参数   
            var arr1 = ["rotatey(-90deg) translatex(-100px)translatez(100px)", "rotatey(90deg) translatex(100px)translatez(100px)","rotatex(90deg) translatey(-100px)translatez(100px)", "rotatex(-90deg) translatey(100px)translatez(100px)", "translatez(-200px)", "translatez(200px)"];
            btn.onclick = function () {
                if (value == 0) {
                    value = 1;
                    btn.value = "点击合并";
                    for (var i = 0; i < arr1.length; i++) {
                        son[i].style.transform = arr1[i];
                        console.log(son[i])
                    }
                } else if (value == 1) {
                    value = 0;
                    btn.value = "点击散开";
                    for (var j = 0; j < arr0.length; j++) {
                        son[j].style.transform = arr0[j];
                        console.log(j);

                    }
                }
            };
        }

  }

  getAllMeta() {
    this._speacialColumnServiceService.getAllMeta()
      .subscribe((metaData: any) => {
        this.channels = metaData.data.slice(0, 6);
        console.log(this.channels, '222');
      })
  }

}
