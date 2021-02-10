/* eslint-disable no-param-reassign */
// import AsyncValidator from 'async-validator';
/*
const getValueByProp = (obj, prop) => {
  let tempObj = obj;
  prop = prop.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
  const keyArr = prop.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; i += 1) {
    if (!tempObj) break;
    const key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      break;
    }
  }
  if (tempObj) {
    return typeof tempObj[keyArr[i]] === 'string' ? tempObj[keyArr[i]].trim() : tempObj[keyArr[i]];
  }
  return null;
};

const validateItem = (rules, prop, value, callback) => {
  if (!rules || JSON.stringify(rules) === '{}') {
    if (callback instanceof Function) {
      callback();
    }
    return true;
  }
  const propRules = [].concat(rules[prop] || []);
  propRules.forEach((rule) => {
    if (rule.pattern) {
      rule.pattern = new RegExp(rule.pattern);
    }
  });
  const descriptor = {
    [prop]: propRules,
  };
  const validator = new AsyncValidator(descriptor);
  const model = {
    [prop]: value,
  };
  validator.validate(model, {
    firstFields: true,
  }, (errors) => {
    callback(errors);
  });
  return true;
};

const validate = (model, rules, callback, options) => {
  // 初始化
  const initOptions = {
    showMessage: true,
  };
  options = { ...initOptions, ...options || {} };
  let promise = null;
  if (typeof callback !== 'function') {
    promise = new Promise((resolve, reject) => {
      callback = (valid) => {
        if (valid) {
          resolve(valid);
        } else {
          reject(valid);
        }
      };
    });
  }

  // 如果需要验证的fields为空，调用验证时立刻返回callback
  if ((!rules || rules.length === 0) && callback) {
    callback(true, null);
    return true;
  }

  let errors = [];
  const props = Object.keys(rules);
  let count = 0;
  props.forEach((prop) => {
    const value = getValueByProp(model, prop);
    validateItem(rules, prop, value, (err) => {
      if (err && err.length > 0) {
        errors = errors.concat(err);
      }
      // 处理异步校验，等所有校验都结束时再callback
      count += 1;
      if (count === props.length) {
        if (errors.length > 0) {
          if (options.showMessage) {
            // utils.showToast(errors[0].message);
            // TODO：展示错误
          }
          callback(false, errors);
        } else {
          callback(true, null);
        }
      }
    });
  });
  if (promise) {
    return promise;
  }
  return true;
};
export { validate, validateItem };
*/
// 暂且认为，进来的都是string
// const Validator = (param, rules, callback) => {
//   // 去空
//   const tmpParam = param.trim();
//   rules.forEach((rule) => {
//     // 如果存在正则，就加正则
//     if (rule.pattern) {
//       rule.pattern = new RegExp(rule.pattern);
//     }
//   });
//   const descriptor = {
//     [tmpParam]: rules,
//   };
//   const validator = new AsyncValidator(descriptor);
//   const model = {
//     [tmpParam]: tmpParam,
//   };
//   validator.validate(model, {
//     // 碰到第一个就停止校验
//     firstFields: true,
//   }, (errors) => {
//     callback(errors);
//   });
// };
// export { Validator };
