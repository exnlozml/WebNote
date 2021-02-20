window.onload = function () {
    var reg_phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var reg_name = /^[a-zA-Z]{6,10}$/;
    var reg_QQ = /^[1-9]\d{4,9}$/;
    var reg_psd = /^[a-zA-Z0-9_-]{6,10}$/;

    // 手机
    var tel = document.querySelector('#phone');
    regexp(tel, reg_phone); 
    
    // 昵称
    var name = document.querySelector('#name');
    regexp(name, reg_name);
    
    // QQ
    var qq = document.querySelector('#qq');
    regexp(qq, reg_QQ);

    // 密码
    var psd = document.querySelector('#psd');
    regexp(psd, reg_psd);

    // 表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.innerHTML = '正确';
                this.nextElementSibling.className = 'success';
            } else {
                this.nextElementSibling.innerHTML = '格式错误';
                this.nextElementSibling.className = 'wrong';
            }
        }
    }
    //确认密码
    var rp = document.querySelector('#cfpsd');
    rp.onblur = function () {
        if (this.value == psd.value) {
            this.nextElementSibling.innerHTML = '正确';
            this.nextElementSibling.className = 'success';
        } else {
            this.nextElementSibling.innerHTML = '密码不一致';
            this.nextElementSibling.className = 'wrong';
        }
    }

}