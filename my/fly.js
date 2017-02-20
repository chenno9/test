/**
 * Created by a on 2017/2/17.
 */
(function (window) {
    var Fly={};

    Fly.createCanvas= function (id) {
        var container=document.getElementById(id+"");
        var cv=document.createElement("canvas");
        cv.width=800;
        cv.height=600;
        container.appendChild(cv);
        return cv;
    }
    
    Fly.loadImage= function (imgsArr,callback) {
        var imgList={};
        var imgLength=imgsArr.length;
        var loadedLength=0;
        imgsArr.forEach(function (src) {
            var img=new Image();
            img.src="imgs/"+src+".png";
            imgList[src]=img;

            img.addEventListener("load", function () {
                loadedLength++;
                if(loadedLength>=imgLength){
                    callback(imgList);
                }
            })
        })
    }

    Fly.toRadian = function(angle) {
        return angle / 180 * Math.PI;
    };

window.Fly=Fly;

})(window)