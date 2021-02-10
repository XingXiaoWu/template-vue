// 中文正则
const chineseRule = /^[\u4e00-\u9fa5]+$/;
// 以/开头
const pathStart = /^\/.*$/;
// 密码,字母和数字组成，大于6位数
// const passwordRule = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
// 密码，包括一个数字一个字母
const passwordRule = /^(?=\S*\d)(?=\S*[a-zA-Z])\S*$/;
// 中文英文数字
const cen = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;

// 字母数字
const en = /^[A-Za-z0-9]+$/;
export {
  chineseRule, pathStart, passwordRule, cen, en,
};
