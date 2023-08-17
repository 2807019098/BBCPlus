/*
 * @Author: zk.zhouyf
 * @Date: 2023-08-15 14:56:49
 * @LastEditors: zk.zhouyf
 * @LastEditTime: 2023-08-17 15:11:55
 * @FilePath: \BBCPlus\BBCPlus\compontents\header\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by zk.zhouyf, All Rights Reserved. 
 */

/**
 *通用标题栏
 *
 * @param {*} name
 * @return {*} 
 */
const MHead = (name) => {

    return `<div class="header flex-row-center">
        <a class="back flex-row-justify-start"></a>
        <h2>${name}</h2>
    </div>`;

};

const GoBack = () => {

    window.history.go("-1");

};

export {
    MHead,
    GoBack
}