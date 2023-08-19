/*
 * @Author: zk.zhouyf
 * @Date: 2023-08-15 19:50:42
 * @LastEditors: zk.zhouyf
 * @LastEditTime: 2023-08-19 17:56:10
 * @FilePath: \BBCPlus\BBCPlus\js\common.js
 * @Description: 
 * 
 * Copyright (c) 2023 by zk.zhouyf, All Rights Reserved. 
 */

/**
 *提示窗
 *
 * @param {*} text
 * @param {*} time
 * @return {*} 
 */
const Toast = (text, time) => {
    const elementTag = typeof HTMLDialogElement === 'function' ? 'dialog' : 'div';
    const para = document.createElement(elementTag);
    
    para.setAttribute('toast', '');
    para.className = 'toast';
    para.textContent  = text;

    if (elementTag === 'dialog') {
        para.show();
    }

    document.body.appendChild(para);

    setTimeout(() => {
        document.body.removeChild(para);
    }, time);

    return para;

};

/**
 *函数节流
 *
 * @param {*} func
 * @param {*} delay
 * @return {*} 
 */
const Throttle = (func, delay) => {
    let previous = 0;
    return function() {
        const now = Date.now();
        if (now - previous > delay) {
          func.apply(this, arguments);
          previous = now;
        }
    };
}

/**
 *模态窗
 *
 * @param {*} options
 */
const Dialog = (options) => {
    const elementTag = typeof HTMLDialogElement === 'function' ? 'dialog' : 'div';
    const dialog = document.createElement(elementTag);
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    document.body.appendChild(dialog);
    dialog.appendChild(div);
    div.appendChild(h2);
    div.appendChild(div2);
    div.appendChild(div3);
    dialog.id = 'dialog';
    dialog.style.position = 'fixed';
    dialog.style.backgroundColor = 'rgba(127, 127, 127, .7)';
    dialog.style.width = window.innerWidth + 'px';
    dialog.style.height = window.innerHeight + 'px';
    dialog.style.left = '0';
    dialog.style.top = '0';
    dialog.style.zIndex = '1000000';
    dialog.style.color = '#333333';
    dialog.style.fontSize = '14px';
    dialog.style.padding = '0';
    dialog.style.margin = '0';
    dialog.style.border = '0';
    dialog.style.outline = '0';
    div.className = 'dialog';
    div2.className = 'content';
    div3.className = 'btn';
    if (elementTag === 'dialog') {
        dialog.show();
    }
    h2.innerText = options.title || "";
    div2.innerHTML = options.content || "";
    div3.textContent = options.confirmButtonText || "";

    document.querySelector(".dialog .btn").addEventListener('click', function() {
        if (typeof options.onConfirm === 'function') {
            options.onConfirm();
        }
        document.body.removeChild(dialog);
    });
};


/**
 *小程序弹窗
 *
 * @param {*} options
 */
 const MiniprogramDialog = (options) => {
    const elementTag = typeof HTMLDialogElement === 'function' ? 'dialog' : 'div';
    const dialog = document.createElement(elementTag);
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    document.body.appendChild(dialog);
    dialog.appendChild(div);
    div.appendChild(h2);
    div.appendChild(div2);
    div.appendChild(div3);
    dialog.id = 'dialog';
    dialog.style.position = 'fixed';
    dialog.style.backgroundColor = 'rgba(127, 127, 127, .7)';
    dialog.style.width = window.innerWidth + 'px';
    dialog.style.height = window.innerHeight + 'px';
    dialog.style.left = '0';
    dialog.style.top = '0';
    dialog.style.zIndex = '1000000';
    dialog.style.color = '#333333';
    dialog.style.fontSize = '14px';
    dialog.style.padding = '0';
    dialog.style.margin = '0';
    dialog.style.border = '0';
    dialog.style.outline = '0';
    div.className = 'dialog';
    div2.className = 'content';
    div3.className = 'btn';
    if (elementTag === 'dialog') {
        dialog.show();
    }
    h2.innerText = options.title || "";
    div2.innerHTML = options.content || "";


     if (dialog) {
        const node = document.querySelector(options.dom).cloneNode(true);

        const updateMinni = () => {
            return new Promise((resolve, reject) => {
                div3.appendChild(node);
                node.classList.add('active');
                resolve();
            })
        };

        (async () => {
            try {
                const step = await updateMinni();
            } catch (error) {
                
            }
        })();
        
    }

};



const privacyPolicy = (url) => {
    noteBody();
    
    document.querySelector("#noteBody").addEventListener('touchmove', function (e) {
        e.stopPropagation();
    }, { passive: true });
    $("#nodeContent").load(url,"",function(){
        
    })
};

const noteBody = () => {

    document.querySelector("#noteBody").addEventListener('touchmove', function (e) {
        e.stopPropagation();
    }, { passive: true });

    $("#noteBody").animate({
        top:'0'
    },300);
    $("#noteBody").css('opacity', 1);
};

const getTop = () => {
    return new Promise((resolve, reject) => {
        $("#noteBody").animate({
            top:'100%'
        },300);
    })
};

const getOpacity = () => {
    return new Promise((resolve, reject) => {
        $("#noteBody").css('opacity', 0);
    })
};

const closeNote = async () => {
    try {
        
        const step1 = await getTop();
        const step2 = await getOpacity();
        
    } catch (error) {
        
    }
};
