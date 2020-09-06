此文件夹下放置放置 vuex 的 sotre 相关
index中引入了所有store,并且要求sotre中需要开始命名空间隔离
调用action的时候,需要加上文件名做前缀
例如:
```
loginStore中的action:increment
使用时,调用为
store.dispatch('loginStore/increment')

普通页面想读取
this.$store.state.loginStore.count
```