
function Link() {
    var rdm = Math.round(Math.random() * 25);
    console.log('下一句'+rdm);
    if (rdm == 1) {
        Linkings.innerHTML = '<span>实践是检验真理的唯一标准。</span>' + '—— 「实践是检验真理的唯一标准」 ';
    } else if (rdm == 2) {
        Linkings.innerHTML = '<span>失落至极致，是虚无。</span>' + '—— GoodChing「原创」 ';
    } else if (rdm == 3) {
        Linkings.innerHTML = '<span>江流天地外，山色有无中。</span>' + '—— 王维「汉江临泛 / 汉江临眺」 ';
    } else if (rdm == 4) {
        Linkings.innerHTML = '<span>碑是那么小，与其说是为了纪念，更像是为了忘却。</span>' + '  —— 「三体」 ';
    } else if (rdm == 5) {
        Linkings.innerHTML = '<span>无论做什么，记得为自己而做，那就毫无怨言。</span>' + ' —— 「流金岁月」 ';
    } else if (rdm == 6) {
        Linkings.innerHTML = '<span>失去的东西虽然拿不回来，但是，忘记的事情是可以想起来的。</span>' + '—— 「TOUCH」 ';
    } else if (rdm == 7) {
        Linkings.innerHTML = '<span>若教眼底无离恨，不信人间有白头。</span>' + '—— 辛弃疾「鹧鸪天·晚日寒鸦一片愁」 ';
    } else if (rdm == 8) {
        Linkings.innerHTML = '<span>电脑高手,哈哈哈哈哈,你这嘴里蹦的都是几几年的形容词啊</span>' + '—— 「三色绘恋」';
    } else if (rdm == 9) {
        Linkings.innerHTML = '<span>人生用特写镜头来看是悲剧，长镜头来看则是喜剧。</span>' + ' —— 卓别林「名人名言」 ';
    } else if (rdm == 10) {
        Linkings.innerHTML = '<span>积土而为山，积水而为海。</span>' + '—— 「荀子·儒效」';
    } else if (rdm == 11) {
        Linkings.innerHTML = '<span>憧憬是距离理解最遥远的感情</span>' + '—— 「蓝染惣右介」';
    } else if (rdm == 12) {
        Linkings.innerHTML = '<span>少年听雨歌楼上。红烛昏罗帐。</span>' + '—— 蒋捷「虞美人·听雨」 ';
    } else if (rdm == 13) {
        Linkings.innerHTML = '<span>你要的未来，就是这个样子吗？</span>' + ' —— 「永远的七日之都」 ';
    } else if (rdm == 14) {
        Linkings.innerHTML = '<span>只要能努力，就应当去努力；只要还能前进，就要向前走去。</span>' + '—— 「CLANNAD」';
    } else if (rdm == 15) {
        Linkings.innerHTML = '<span>人总是害怕死亡，却殊不知有出生之时必有死亡之日。</span>' + ' —— 阿尔贝·加缪「加缪手记·第二卷」';
    } else if (rdm == 16) {
        Linkings.innerHTML = '<span>每个人的心里，都有一个忘不记，却无法拥抱珍惜的人。</span>' + '—— 「热评」 ';
    } else if (rdm == 17) {
        Linkings.innerHTML = '<span>失落至极致，是虚无。</span>' + '—— 「不善」 ';
    } else if (rdm == 18) {
        Linkings.innerHTML = '<span>当我忘了你的时候，我就忘了我自己。</span>' + '—— 「呼啸山庄」 ';
    } else if (rdm == 19) {
        Linkings.innerHTML = '<span>——什么是孤独？——心里明明空荡荡的，却什么也装不下。</span>' + '—— 此账号已注销「网易云」';
    } else if (rdm == 20) {
        Linkings.innerHTML = '<span>见贤思齐焉，见不贤而内自省也。</span>' + '—— 「雪中悍刀行」 ';
    } else if (rdm == 21) {
        Linkings.innerHTML = '<span>试问天上仙人，谁敢来此人间！</span>' + '—— F&C FC01「Canvas2 ～七彩的素描～」';
    } else if (rdm == 22) {
        Linkings.innerHTML = '<span>当你决定了要向前迈进的那一刻, 你就已经踏出前进的一步了。</span>' + '—— 「随笔」 ';
    } else if (rdm == 23) {
        Linkings.innerHTML = '<span>我们是独立的个体，却不是孤独的存在。</span>' + '—— 「千里共良宵」 ';
    } else if (rdm == 24) {
        Linkings.innerHTML = '<span>哪有顷刻之间的心灰意冷，有的，只是日积月累的看透罢了。</span>' + '—— 觅楽「觅楽-语录」';
    } else if (rdm == 25) {
        Linkings.innerHTML = '<span>我这一生都是坚定不移的唯物主义者，唯有你，我希望有来生。</span>' + ' —— 「周恩来」 ';
    }
}
var timer = setInterval(Link, 5000);    
var LinObj={
    LinNext:function(){
        //可以在Lin消失之后停止定时器
        Linkings.style.opacity='0';
        setTimeout(function(){
            Linkings.display='none';
        },1500)
    },
    LinPrev:function(){
        Linkings.style.opacity='1';
        Linkings.style.display='flex';
    },

}
// 不能选择字体
function Linselect(){
    Linkings.addEventListener('selectstart',function(){
        return true;
    })
}
