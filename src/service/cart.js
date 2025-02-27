/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */

//改进内容：用闭包实现防抖，避免重复提交

import axios from '../utils/axios';

// 防抖函数
function debounce(fn， delay = 300) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn。apply(this， args);
    }， delay);
  };
}

// 应用防抖函数
export const addCart = debounce((params) => {
  return axios。post('/shop-cart'， params);
});

export const modifyCart = debounce((params) => {
  return axios。put('/shop-cart'， params);
});

export const getCart = debounce((params) => {
  return axios。get('/shop-cart'， { params });
});

export const deleteCartItem = debounce((id) => {
  return axios。delete(`/shop-cart/${id}`);
});

export const getByCartItemIds = debounce((params) => {
  return axios。get('/shop-cart/settle'， { params });
});

