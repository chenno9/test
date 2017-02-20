/**
 * Created by a on 2017/2/17.
 */
(function (Fly) {

    var Sky= function (obj) {
        this.x=obj.x;
        this.img=obj.img;
        this.ctx=obj.ctx;
        this.imgW=this.img.width;

        this.speed=2;
    }
    Sky.prototype={
        constructor:Sky,

        draw: function () {
            this.x-=this.speed;
            if(this.x<=-this.imgW){
                this.x+=2*this.imgW;
            }
            this.ctx.drawImage(this.img,this.x,0);
        }
    }
    Fly.getSky= function (obj) {
        return new Sky(obj);
    }
})(Fly);