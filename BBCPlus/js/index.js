/*
 * @Author: zk.zhouyf zhouyf@zhikaisoft.com
 * @Date: 2023-08-16 13:39:39
 * @LastEditors: zk.zhouyf zhouyf@zhikaisoft.com
 * @LastEditTime: 2023-08-16 13:42:41
 * @FilePath: \BBCPlus\BBCPlus\js\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */


document.body.addEventListener('touchmove', function (e) {
    e.preventDefault();
    e.stopPropagation();
}, { passive: false });

/**
 *
 *
 */
const myTemplate = () => { 
    const template = document.querySelector("template");
    if (template) {
        const clone = template.content.cloneNode(true);
        const dialogBox = document.querySelector("#dialogBox");
        if (dialogBox) {
            dialogBox.appendChild(clone);
        }
    }
};

myTemplate();

const inputLi = document.querySelectorAll(".regInput");

inputLi.forEach(dom => {
    
    dom.addEventListener("focus", function () {
        this.parentElement.classList.add("select");
    });

    dom.addEventListener("blur", function () {
        this.parentElement.classList.remove("select");
    });

    dom.addEventListener("input", function () {
        let val = this.value;
        let mobile = document.querySelector("#mobile").value;
        let phonereg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[6]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[8-9]{1}))+\d{8})$/;
        let sms = document.querySelector("#sms").value;
        
        if (mobile !== "" && sms !== "" && phonereg.test(mobile)) {
            document.querySelector("#login-button").removeAttribute("disabled");
        } else {
            document.querySelector("#login-button").setAttribute("disabled", true);
        }
    });
    
});

const checkSms = () => {
    let mobile = $("#mobile").val();
    let phonereg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[6]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[8-9]{1}))+\d{8})$/;
    
    if (mobile === ""){
        Toast('请输入您的手机号', 1000000);
    } else if (!phonereg.test(mobile)){
        Toast('请填写正确的手机号码', 1000);
    } else {
        sendInfo()
    }

}

let InterValObj; //定时器变量，控制时间
const count = 60; //间隔函数，1秒执行
let curCount;//当前剩余秒数
let code = ""; //验证码
const codeLength = 6;//验证码长度

const sendInfo = () => {
    curCount = count;
    generateCode();
    disableSendButton();
    InterValObj = window.setInterval(setResetTime, 1000);
};

const generateCode = () => {
    code = "";
    for (let i = 0; i < codeLength; i++) {
        code += parseInt(Math.random() * 9).toString();
    }
};

const disableSendButton = () => {
    const sendCodeButton = document.querySelector("#SendCode");
    sendCodeButton.setAttribute("disabled", true);
    sendCodeButton.value = `${curCount}秒后再获取`;
};

const enableSendButton = () => {
    const sendCodeButton = document.querySelector("#SendCode");
    sendCodeButton.removeAttribute("disabled");
    sendCodeButton.value = '获取验证码';
};

const setResetTime = () => {
    if (curCount === 0) {                
        clearInterval(InterValObj);
        enableSendButton();
        code = "";
    }else {
        curCount--;
        updateSendButtonText();
    }
}

const updateSendButtonText = () => {
    const sendCodeButton = document.querySelector("#SendCode");
    sendCodeButton.value = `${curCount}秒后再获取`;
};