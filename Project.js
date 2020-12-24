//简单的网页效果
//提示
var reminder = document.querySelector('.reminder');
reminder.addEventListener('selectstart', function(e) {
    e.preventDefault();
})
reminder.addEventListener('contextmenu', function(e) {
    e.preventDefault();
})
setTimeout(function() {
        reminder.style.display = 'none';
    }, 5000)
    //遮罩
var mask = document.querySelector('.mask');
setTimeout(function() {
    reminder.style.display = 'none';
}, 5000)
setTimeout(function() {
    mask.style.display = 'none';
}, 5000)
if (mask.style.display == 'block') {
    document.removeEventListener('mousemove', mousePointer);
}
//右侧边栏
var flag = 0;
var right_side = document.querySelector('.right_side');
var right_side_back = document.querySelector('.back');
//返回  不可被选中
right_side_back.addEventListener('selectstart', function(e) {
        e.preventDefault();
    })
    //返回
right_side_back.addEventListener('click', function() {
        if (flag == 0) {
            right_side.style.display = 'none';
            this.innerHTML = '<';
            flag = 1;
        } else if (flag == 1) {
            right_side.style.display = 'block';
            this.innerHTML = '>';
            flag = 0;
        }
    })
    //动态获取鼠标位置
function mousePointer(e) {
    var pointer_x = e.pageX;
    var pointer_y = e.pageY;
    var GetCursorPos = document.querySelector('.GetCursorPos');
    var GetCursorPos_con = GetCursorPos.querySelector('span');
    GetCursorPos_con.innerHTML = '(' + pointer_x + ',' + pointer_y + ')';
}
document.addEventListener('mousemove', mousePointer);
if (mask.style.display == 'block') {
    document.removeEventListener('mousemove', mousePointer);
}
//背景颜色的更换
var BackGroundColor = right_side.querySelector('.BackGroundColor');
var BackGroundColor_a = BackGroundColor.querySelector('.BackGroundColor.a'); //五彩虹
var BackGroundColor_b = BackGroundColor.querySelector('.BackGroundColor.b'); //水蜜桃
var BackGroundColor_c = BackGroundColor.querySelector('.BackGroundColor.c'); //青山雾
BackGroundColor_a.addEventListener('click', function() {
    document.body.className = 'body_a';
})
BackGroundColor_b.addEventListener('click', function() {
    document.body.className = 'body_b';
})
BackGroundColor_c.addEventListener('click', function() {
        document.body.className = 'body_c';
    })
    //页面地址
var PageLocation = right_side.querySelector('.PageLocation');
var PageLocation_con = PageLocation.querySelector('span');
PageLocation_con.innerHTML = '<span style="font-size:0.5px">' + document.location.href + '</span>';
