function Draw(array, canvas, obj) {
    var ctx = canvas.getContext("2d");
    //获取画布的宽度
    this.ctxWidth = canvas.width;
    //获取画布的高度
    this.ctxHeight = canvas.height;
    //定义一个空数组用来存放坐标对象
    this.points = [];
    //画坐标轴
    this.drawPiex = function() {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, this.ctxHeight - 50);
        ctx.lineTo(this.ctxWidth - 50, this.ctxHeight - 50);
        ctx.moveTo(40, 60);
        ctx.lineTo(50, 50);
        ctx.lineTo(60, 60);
        ctx.moveTo(this.ctxWidth - 60, this.ctxHeight - 60);
        ctx.lineTo(this.ctxWidth - 50, this.ctxHeight - 50);
        ctx.lineTo(this.ctxWidth - 60, this.ctxHeight - 40);
        ctx.stroke();
        ctx.closePath();
    }
    //算出坐标轴上的坐标在画布上对应坐标
    this.drawPoint = function() {
        var length = array.length;
        var x_dis = this.ctxWidth - 100 - 10;
        var per_disX = x_dis / length;
        var y_dis = this.ctxHeight - 110;
        var scale = y_dis / this.getMaxY();
        for (var i = 0; i < array.length; i++) {
            var x = (i + 1) * per_disX + 50;
            var y = this.ctxHeight - scale * array[i].value - 50;
            var p = new Point(x, y);
            this.points.push(p);

        }
        // console.log(this.points);
        this.beginDrawPoint();
    }
    //画折线图
    this.beginDrawPoint = function() {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.strokeStyle = obj.color;
        ctx.lineWidth = obj.lineWidth;
        ctx.stroke();
        ctx.closePath();
    }
    //得到数组中value的最大值
    this.getMaxY = function() {
        var max = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i].value > max) {
                max = array[i].value;
            }
        }
        return max;
    }
}
//点的函数
function Point(x, y) {
    this.x = x;
    this.y = y;
}
