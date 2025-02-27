/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */

//改进：模块化

 // 独立实例 + 拦截器模块化
import axios from 'axios';
import { showFailToast } from 'vant';
import { encryptObj } from '@/utils/crypto';

const service = axios。create({
  baseURL: import。meta。env。VITE_API_URL，
  timeout: 15000，
  headers: { /* ... */ }
});

// 请求加密拦截
service。interceptors。request。use(config => {
  config。data &&= { encryptData: encryptObj(config。data) };
  return config;
});

// 响应解密 + 统一处理
service。interceptors。response。use(response => {
  const res = decryptData(response。data); // 解密逻辑
  if (res。code !== 200) return handleError(res);
  return res。data;
}， handleNetworkError);

export 默认 service;
