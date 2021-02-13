<template>
  <div class="login-main flex align-items-center justify-content-center">
    <div class="login-box flex column">
      <el-form
        :ref="setFormRef"
        :model="form"
        label-width="60px"
        label-position="left"
      >
        <p class="title">医网信质控平台账号登录</p>
        <el-form-item label="帐号" prop="account" :rules="[rules.required('请输入账号')]">
          <el-input v-model="form.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[rules.required('请输入账号')]">
          <el-input v-model="form.password" :type="cipher ? 'password' : 'text'">
            <template #suffix>
              <i :class="cipher ? 'template_view' : 'template_view_off'" @click="lookPassword" />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary">登 陆</el-button>
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

export default defineComponent({
  name: 'Login',
  props: {},
  setup() {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    const state = reactive({
      cipher: true,
      form: {
        account: '',
        password: '',
      },
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const rules = computed(() => Rules);
    const setFormRef = (el: InstanceType<typeof ElForm>) => {
      formRef.value = el;
    };

    const lookPassword = () => {
      state.cipher = !state.cipher;
    };

    return {
      ...toRefs(state),
      setFormRef,
      lookPassword,
      rules,
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
