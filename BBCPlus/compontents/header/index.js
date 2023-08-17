/*
 * @Author: zk.zhouyf zhouyf@zhikaisoft.com
 * @Date: 2023-08-15 14:56:49
 * @LastEditors: zk.zhouyf zhouyf@zhikaisoft.com
 * @LastEditTime: 2023-08-16 13:25:02
 * @FilePath: \BBCPlus\BBCPlus\compontents\header\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
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