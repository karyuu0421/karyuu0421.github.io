    function moveImg(list,index) {
        for(var i=0;i<list.length;i++){
            if(list[i].className=='opa-on'){//���li��͸������ʽ
                list[i].className='';
            }
        }
        list[index].className='opa-on';
    }
    function moveIndex(list,num){//�ƶ�СԲȦ
        for(var i=0;i<list.length;i++){
            if(list[i].className=='on'){//���li�ı�����ʽ
                list[i].className='';
            }
        }
        list[num].className='on';
    }
     var imgList=document.getElementById('img').getElementsByTagName('li');
    var list=document.getElementById('index').getElementsByTagName('li');
    var index=0;
    var timer;

    for(var i=0;i<list.length;i++){//��긲�����ĸ�СԲȦ��ͼƬ���ƶ����ĸ�СԲȦ����ֹͣ
        list[i].index=i;
        list[i].onmouseover= function () {
            var clickIndex=parseInt(this.index);
            index=clickIndex;

            moveImg(imgList,index);
            moveIndex(list,index);
            clearInterval(timer);
        };
        list[i].onmouseout= function () {//�ƿ�������ֲ�
            play();
        };

    }

    var nextMove=function(){
        index+=1;
        if(index>=4){
            index=0
        }
        moveImg(imgList,index);
        moveIndex(list,index);
    };
    var play=function(){
        timer=setInterval(function(){
            nextMove();
        },3500);
    };
    play();