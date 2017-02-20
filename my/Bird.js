/**
 * Created by a on 2017/2/17.
 */
(function (Fly) {

    var Bird = function (obj) {

        this.ctx = obj.ctx;
        this.img = obj.img;
        this.imgW = this.img.width / 3;
        this.imgH = this.img.height;
        this.speed = 0;
        this.x = 100;
        this.y = 100;
        this.frameIndex = 0;
        this.a = 0.0005;

        this.lastFrameTime = new Date();

        this.hit={};

    };
    Bird.prototype = {
        constrcutor: Bird,

        draw: function () {
            var ctx = this.ctx;

            this.curFrameTime = new Date();
            this.delta = this.curFrameTime - this.lastFrameTime;
            //ctx.clearRect(0, 0, cv.width, cv.height);


            this.lastFrameTime = this.curFrameTime;

            var maxAngleSpeed = .3;
            var maxAngle=45;

            var curAngle = this.speed / maxAngleSpeed * 45;
            if(curAngle>=maxAngle){
                curAngle=maxAngle;
            }else if(curAngle<-maxAngle){
                curAngle=-maxAngle;
            }


            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(Fly.toRadian(curAngle));
            ctx.drawImage(this.img, this.frameIndex * this.imgW, 0, this.imgW, this.imgH, - 1/2*this.imgW, - 1/2*this.imgH, this.imgW, this.imgH)
            ctx.restore();


            //Åö×²Ìå»ý´æ´¢
            this.hit.x=this.x-this.imgW/2;
            this.hit.y=this.y-this.imgH/2;
            this.hit.height=this.imgH;
            this.hit.width=this.imgW;


            this.frameIndex++;
            this.frameIndex %= 3;



            this.speed = this.speed + this.a * this.delta;
            this.y = this.y + this.speed * this.delta + this.a * this.delta * this.delta / 2;

        }
    }


    Fly.getBird = function (obj) {

        return new Bird(obj);
    }
})(Fly)