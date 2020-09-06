// 权限校验文件,用于权限校验
import router from '@/router/index';
// 添加不需要重定向的白名单,填写命名
const whiteList = ['login'];

router.beforeEach(async (to, from, next) => {
//   console.log(`form:${from.path},to:${to.path}`);
  //   判断是否是白名单
  if (whiteList.indexOf(to.name) !== -1) {
    next();
  } else {
  //   TODO:重定向
    next();
  }
});

router.afterEach(() => {
//   console.log('跳转成功');
});
