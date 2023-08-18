/*
 * @Author: zk.zhouyf
 * @Date: 2023-08-18 16:02:47
 * @LastEditors: zk.zhouyf
 * @LastEditTime: 2023-08-18 17:31:11
 * @FilePath: \BBCPlus\BBCPlus\compontents\agreement\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by zk.zhouyf, All Rights Reserved. 
 */

/**
 *同意协议
 *
 * @return {*} 
 */
const Agreement = () => {

    return `<div class="info">
        <span>点击即同意</span>
        <a href="javascript: privacyPolicy('privacyPolicy1.html .container')">《麦德龙会员协议》</a>
        <a href="javascript: privacyPolicy('privacyPolicy2.html .container')">《麦德龙个人信息保护及隐私政策》</a>
        <a href="javascript: privacyPolicy('privacyPolicy3.html .container')">《麦德龙授权协议》</a>
        <a href="javascript: privacyPolicy('privacyPolicy4.html .container')">《麦德龙儿童个人信息保护规则及监护人须知》</a>
    </div>`
};

export {
    Agreement
}