/* eslint-disable no-unused-vars */
// 表单规则校验
// 规则校验
import { Any } from '../@types/index';
import {
  chineseRule, passwordRule, cen, en,
} from './regular';

interface Rule {
  field: Any;
}
const Rules = {
  // 不得为空
  required: (message = '') => ({
    required: true,
    message: `${message}不能为空`,
    trigger: ['blur', 'change'],
  }),
  // 不固定长度
  dynamicLength: (min: number, max: number) => ({
    min,
    max,
    message: `长度为${min}-${max}位`,
    trigger: ['blur', 'change'],
  }),
  //   固定长度
  fixedLength: (length: number) => ({
    min: length,
    max: length,
    message: `长度为${length}位`,
    trigger: ['blur', 'change'],
  }),
  // 只允许中文
  chinese: { pattern: chineseRule, message: '只允许输入中文' },
  chinese2: { pattern: chineseRule, message: '支持2-20个汉字' },
  // 比较是否相同,https://github.com/yiminghe/async-validator
  same: <T>(val1: T, val2: T, message = '两次输入不一致') => ({
    validator: (_rule: Rule, _value: Any, callback: Function) => {
      if (val1 === val2) {
        callback();
      } else {
        callback(new Error(message));
      }
    },
    trigger: 'blur',
  }),
  different: <T>(val1: T, val2: T, message = '新密码与旧密码相同，请重新输入') => ({
    validator: (_rule: Rule, _value: Any, callback: Function) => {
      if (val1 === val2) {
        callback(new Error(message));
      } else {
        callback();
      }
    },
    trigger: 'blur',
  }),
  //
  justOne: (length: number, message = '角色名称不足2个字，请重新输入') => ({
    validator: (_rule: Rule, _value: Any, callback: Function) => {
      if (length < 2) {
        callback(new Error(message));
      } else {
        callback();
      }
    },
    trigger: ['blur', 'change'],
  }),
  password: {
    pattern: passwordRule,
    message: '至少需要包含一个数字一个字母',
    trigger: ['blur', 'change'],
  },

  cen: { pattern: cen, message: '只允许输入英文汉字数字', trigger: ['blur', 'change'] },
  en: { pattern: en, message: '只允许输入英文数字', trigger: ['blur', 'change'] },
  en2: { pattern: en, message: '支持2-20个字母或数字', trigger: ['blur', 'change'] },
};

export default Rules;
