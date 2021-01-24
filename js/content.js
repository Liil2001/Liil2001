// 头像点击事件
box.addEventListener('click', function () {
    if (flag == 0) {
        // 头像上移
        box.style.transform = 'translateY(-100px) scale(0.7)';
        // 一言消失
        LinObj.LinNext();
        // tab显示
        tabObj.tabNext();
        flag = 1;
    } else {
        // 头像下移
        box.style.transform = 'scale(1.2)';
        // 一言出现
        LinObj.LinPrev();
        // tab消失
        tabObj.tabPrve();
        flag = 0;
    }
})

//一言模块变化
Linselect();

//tab栏模块
// // tab内容
// //选择栏
// var tabBox=document.querySelector('.tabBox');
// var tab=tabBox.querySelector('.tab');
// var tabBoxlis=tab.querySelectorAll('li'); 
// //内容栏
// var tabCon=tabBox.querySelector('.tabCon');
// var tabCondivs=tabCon.querySelectorAll('div');
for (var i = 0; i < tabBoxlis.length; i++) {
    tabBoxlis[i].setAttribute('data_index', i);
    tabBoxlis[i].onclick = function () {
        let index = this.getAttribute('data_index');
        console.log(index);
        for (var i = 0; i < tabBoxlis.length; i++) {
            tabBoxlis[i].style.backgroundColor = 'hsl(6, 93%, 71%,.6)';
        }
        this.style.backgroundColor = 'hsl(219, 96%, 66%,.8)';
        for (var j = 0; j < tabCondivs.length; j++) {
            tabCondivs[j].className = '';
        }
        tabCondivs[index].className = 'tabConPre';
    }
}
// tab栏函数封装
var tabObj = {
    tabNext: function () {
        tabBox.style.opacity='1';
        setTimeout(function () {
            tabBox.style.display = 'flex';
        }, 1500)
    },
    tabPrve: function () {
        tabBox.style.opacity='0';
        tabBox.style.display = 'none';
    }
}
