function clone(source) {
       
    if (source == null || typeof (source) != 'object') return null;

    let target = new Object();
    for (let attr in source) {
        if (typeof (source[attr]) != 'object') {
            target[attr] = source[attr];
        } else {
            target[attr] = clone(source[attr]);
        }

    }

    return target;

}


 /*
                //下的面
                if (ballY >= b.y + (b.height) / 2 && ballY <= b.y + b.height){
                    if (ballX >= b.x && ballX <= b.x + b.width) {
                        dx *= -1;
                        b.status = false;
                    }
                }  
                //上的面
                if (ballY >= b.y  && ballY <= b.y + (b.height)/2){
                    if (ballX >= b.x && ballX <= b.x + b.width) {
                        dx *= -1;
                        b.status = false;
                    }
                }
                //左
               
                if (ballX >= b.x  && ballX <= b.x + ((b.width)/2 -10)) {
                    if (ballY >= b.y && ballY <= b.y + b.height) {
                        dy *= -1;
                        b.status = 0;
                    }
                }
                //右
                if (ballX >= b.x + ((b.width)/2 -10) && ballX <= b.x + b.width) {
                    if (ballY >= b.y && ballY <= b.y + b.height) {
                        dy *= -1;
                        b.status = 0;
                    }
                }
                */