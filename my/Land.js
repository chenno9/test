/**
 * Created by a on 2017/2/18.
 */
(function (Fly) {

    var Land= function (obj) {
        this.ctx=obj.ctx;
        this.x=obj.x;
        this.img=obj.img;
        this.imgW=obj.img.width;
        this.y=cv.height-this.img.height;

        this.speed=2;
    }

    Land.prototype={
        constructor:Land,

        draw: function () {
            this.x-=this.speed;
            if(this.x<=-this.imgW){
                this.x+=4*this.imgW;
            }
            this.ctx.drawImage(this.img,this.x,this.y);

            this.ctx.rect(this.x, this.y,this.imgW,this.img.height);
        }
    }
    Fly.getLand= function (obj) {
        return new Land(obj);
    }

})(Fly);