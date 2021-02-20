
class tab {
    constructor(cl) {
        // 获取元素
        
         this.mian = document.querySelector(cl);
         this.add = this.mian.querySelector('.tabadd');
         // 获取li的父元素
         this.lifa = this.mian.querySelector('.nav ul');
         // 获取section的父元素
         this.sefa = this.mian.querySelector('.main_content');
         this.init();
    }
    init() {
        this.updateNode();
        // init 初始化操作让相关的元素绑定事件
        for(var i = 0;i<this.lis.length;i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            this.close[i].onclick = this.removeTab.bind(this.close[i], this);
            this.spans[i].ondblclick = this.updateTab;
            this.sections[i].ondblclick = this.updateTab;
        }
        this.add.onclick = this.addTab.bind(this.add, this);
    }
    // 动态添加元素 需要重新获取所有元素
    updateNode() {
        this.lis = this.mian.querySelectorAll('li');
        this.sections = this.mian.querySelectorAll('section');
        this.close = this.mian.querySelectorAll('img');
        this.spans = this.mian.querySelectorAll('.nav li span');
    }
    //1.切换功能
    toggleTab(that) {
        that.clearClass();
        this.className = 'li_show';
        that.sections[this.index].className = 'section_show';
    }
    clearClass() {
        for(var i = 0; i < this.lis.length;i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //2.添加功能
    addTab(that) {
        // 清除所有li和section的类
        that.clearClass();
        // (1) 创建li元素和section元素
        var li = '<li class="li_show"><span>新选项卡</span><img src="img/close.png"></li>';
        var section = '<section class="section_show">新增内容</section>';
        // (2) 把这两个元素追加到对应的父元素里面
        that.lifa.insertAdjacentHTML('beforeend', li);
        that.sefa.insertAdjacentHTML('beforeend', section);
        // (3) 添加点击事件
        that.init();
    }
    //3.删除功能
    removeTab(that, e) {
        e.stopPropagation(); // 阻止冒泡 防止触发li的点击事件
        var index = this.parentNode.index;
        console.log(index);
        // 删除索引对应的li 和 section
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当删除了不是选中状态的li时，原来选择状态的 li 保持不变
        if(document.querySelector('.li_show')) return;
        // 当删除了选中状态的这个li时，让它的前一个li处于选的状态
        index--;
        // 手动调用点击事件，不需要鼠标触发
        if(that.lis[index]) {
            if(index<0) {
                index++;
            that.lis[index].onclick();
            }
            else {
            that.lis[index].onclick();
            }
        } 
        
    }
    //4.修改功能
    updateTab() {
        var str = this.innerHTML;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.section.empty();
        this.innerHTML = '<input type="text" style="width: 90%; height: 90%;" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里面的文字处于选定状态
        // 当离开文本框就把文本框的值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        // 按下回车也能实现操作
        input.onkeyup = function(e) {
            if(e.keyCode == 13) {
                // 手动调用失去焦点事件，不需要鼠标离开操作
                this.blur();
            }
        }
    }
}
var T = new tab('.content');
console.log(T.sections);