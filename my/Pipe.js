/**
 * Created by a on 2017/2/18.
 */
(function (Fly) {

    var Pipe= function (obj) {
        this.ctx=obj.ctx;
        this.x=obj.x;
        this.imgUp=obj.imgUp;
        this.imgDown=obj.imgDown;
        this.imgW=this.imgUp.width;
        this.imgH=this.imgUp.height;


        this.speed=2;
        this.pipeSpace=150;
        this.upY=0;
        this.downY=0;


        this._initPipeY();

    }
    Pipe.prototype={
        constructor:Pipe,

        draw: function () {

            this.x-=this.speed;
            if(this.x<-this.imgW){
                this.x+=this.imgW*3*6;
                this._initPipeY();
            }
            this.ctx.drawImage(this.imgUp,this.x,this.upY);
            this.ctx.drawImage(this.imgDown,this.x,this.downY);

            this._initPath();
        },

        _initPipeY:function () {
            var pipeTopHight=Math.floor(Math.random()*200)+50;
            this.upY=-this.imgH+pipeTopHight;
            this.downY=pipeTopHight+this.pipeSpace;
        },

        _initPath: function () {
            var ctx=this.ctx;
            ctx.rect(this.x,this.upY,this.imgW,this.imgH);
            ctx.rect(this.x,this.downY,this.imgW,this.imgH);
        }
    }


    Fly.getPipe= function (obj) {
        return new Pipe(obj);
    }
})(Fly);