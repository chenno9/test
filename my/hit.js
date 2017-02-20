/**
 * Created by a on 2017/2/18.
 */
var hitJudge= function (bird) {

    var bx=bird.hit.x+8;
    var by=bird.hit.y+11;
    var bw=34+bx;
    var bh=24+by;
    //
    //var lx=land.hit.x;
    //var ly=land.hit.y;
    //var lw=land.hit.width;
    //var lh=land.hit.height;
    //
    //var px=pipe.hit.x;
    //var puy=pipe.hit.upy;
    //var pdy=pipe.hit.downy;
    //var pw=pipe.hit.width;
    //var ph=pipe.hit.height;
    for(var x=bx;x<bw;x++){
        for(var y=by;y<bh;y++){
            if(ctx.isPointInPath(x,y)||y<=0){
                //console.log(y);
                return false;
            }
        }
    }
    return true;
}