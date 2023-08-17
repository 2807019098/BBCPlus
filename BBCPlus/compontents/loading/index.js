/*
 * @Author: zk.zhouyf
 * @Date: 2023-08-17 13:02:09
 * @LastEditors: zk.zhouyf
 * @LastEditTime: 2023-08-17 15:12:10
 * @FilePath: \BBCPlus\BBCPlus\compontents\loading\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by zk.zhouyf, All Rights Reserved. 
 */

/**
 *等待提示
 *
 * @param {*} color
 * @return {*} 
 */
const Loading = (color) => {
    return `<div class="spinner">
        <div class="spinner-container container-1">
            <div class="circle1" style="background-color: ${color}"></div>
            <div class="circle2" style="background-color: ${color}"></div>
            <div class="circle3" style="background-color: ${color}"></div>
            <div class="circle4" style="background-color: ${color}"></div>
        </div>
        <div class="spinner-container container-2">
            <div class="circle1" style="background-color: ${color}"></div>
            <div class="circle2" style="background-color: ${color}"></div>
            <div class="circle3" style="background-color: ${color}"></div>
            <div class="circle4" style="background-color: ${color}"></div>
        </div>
        <div class="spinner-container container-3">
            <div class="circle1" style="background-color: ${color}"></div>
            <div class="circle2" style="background-color: ${color}"></div>
            <div class="circle3" style="background-color: ${color}"></div>
            <div class="circle4" style="background-color: ${color}"></div>
        </div>
    </div>`;
};

export {
    Loading
}