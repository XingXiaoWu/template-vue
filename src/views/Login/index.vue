<template>
  <div class="login-main flex align-items-center justify-content-center">
    <div class="login-box flex column">
      <el-form :ref="setFormRef" :model="form" label-width="60px" label-position="left">
        <p class="title">{{ siteName }}</p>
        <el-form-item label="帐号" prop="account" :rules="[rules.required('账号')]">
          <el-input v-model="form.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[rules.required('密码')]">
          <el-input v-model="form.password" :type="cipher ? 'password' : 'text'">
            <template #suffix>
              <i :class="cipher ? 'template_view' : 'template_view_off'" @click="lookPassword" />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="login" :loading="loading">登 陆</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus';
import {
  getCurrentInstance,
  reactive,
  toRefs,
  defineComponent,
  ComponentInternalInstance,
  ref,
  computed,
} from 'vue';
import Rules from '@/utils/rules';
import globalSettings from '@/setting';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  props: {},
  setup() {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      cipher: true,
      form: {
        account: '',
        password: '',
      },
      loading: false,
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const rules = computed(() => Rules);
    const siteName = computed(() => globalSettings.siteName);
    const setFormRef = (el: InstanceType<typeof ElForm>) => {
      formRef.value = el;
    };
    const login = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          state.loading = true;
          // 请求
          proxy?.$api.login({
            account: state.form.account,
            password: state.form.password,
          })
            .then((response) => {
              // 清除所有数据
              store.dispatch('userStore/logonFailure');
              // 写入新数据
              store.commit('userStore/setToken', response.token);
              // 写入用户信息
              store.commit('userStore/setUserInfo', {
                // 在admin账号没有realname的时候修改为username
                username: response.username,
              });
              // 跳转页面
              router.push({
                path: '/home',
              });
            })
            .catch((e) => {
              console.log(e);
            })
            .finally(() => {
              state.loading = false;
            });
        }
      });
    };
    const lookPassword = () => {
      state.cipher = !state.cipher;
    };

    return {
      ...toRefs(state),
      setFormRef,
      lookPassword,
      rules,
      siteName,
      login,
    };
  },
});
</script>

<style lang="less" scoped>
.login-main {
  overflow: auto;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/images/login/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  .login-box {
    background: #ffffff;
    border-radius: 5px;
    padding: 26px 70px 42px 70px;
    .title {
      margin-bottom: 40px;
      text-align: center;
    }
  }
}
</style>
