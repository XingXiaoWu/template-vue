<template>
  <Dialog
    title="修改密码"
    v-model="visible"
    v-model:loading="loadingnow"
    :before-close="beforeClose"
    :close-on-click-modal="false"
    :onConfirm="confirm"
    @cancel="cancel"
  >
    <!-- 表单 -->
    <el-form :model="form" ref="formRef" label-width="100px">
      <el-form-item label="旧密码" prop="curPassword" :rules="[rules.required('旧密码')]">
        <el-input type="password" placeholder="请输入当前密码" v-model="form.curPassword" />
      </el-form-item>
      <el-form-item
        label="新密码"
        prop="newPassword"
        :rules="[
          rules.required('新密码'),
          rules.password,
          rules.different(form.curPassword, form.newPassword),
          rules.dynamicLength(6, 20),
        ]"
      >
        <el-input
          type="password"
          placeholder="密码格式：字母+数字，6-20位"
          v-model="form.newPassword"
        />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="repeatPassword"
        :rules="[
          rules.required('确认密码'),
          rules.same(form.newPassword, form.repeatPassword, '两次填写的密码不一致，请重新输入'),
          rules.password,
          rules.dynamicLength(6, 20),
        ]"
      >
        <el-input
          type="password"
          placeholder="密码格式：字母+数字，6-20位"
          v-model="form.repeatPassword"
        />
      </el-form-item>
    </el-form>
  </Dialog>
</template>

<script lang="ts">
import {
  reactive, toRefs, computed, ref, getCurrentInstance, defineComponent,
} from 'vue';
import Rules from '@/utils/rules';

export default defineComponent({
  name: 'PasswordDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    dialogClose: {
      type: Function,
      default: (done) => {
        done();
      },
    },
    templates: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ['update:modelValue', 'update:loading', 'success'],
  setup(props, context) {
    const { proxy } = getCurrentInstance();
    const formRef = ref(null);
    const rules = computed(() => Rules);
    const visible = computed({
      get: () => props.modelValue,
      set: (val) => {
        context.emit('update:modelValue', val);
      },
    });
    const loadingnow = computed({
      get: () => props.loading,
      set: (val) => {
        context.emit('update:loading', val);
      },
    });
    const state = reactive({
      form: {},
    });

    const resetForm = () => {
      // 充值
      // context.emit('update:form', {});
      state.form = {};
      formRef.value.resetFields();
    };
    const addAction = () => {
      proxy.api
        .editPassword({
          password: state.form.curPassword,
          newPassword: state.form.newPassword,
          confirmPassword: state.form.repeatPassword,
        })
        .then(() => {
          // console.log(response);
          // debugger;
          context.emit('update:modelValue', false);
          resetForm();
          context.emit('success');
        })
        .finally(() => {
          loadingnow.value = false;
        });
    };
    const cancel = () => {
      resetForm();
      visible.value = false;
      context.emit('cancel');
    };

    const confirm = () => {
      loadingnow.value = false;
      formRef.value.validate((valid) => {
        if (valid) {
          loadingnow.value = true;
          addAction();
        }
      });
    };
    const beforeClose = (done) => {
      resetForm();
      done();
    };

    return {
      ...toRefs(state),
      visible,
      loadingnow,
      cancel,
      resetForm,
      confirm,
      formRef,
      rules,
      beforeClose,
    };
  },
});
</script>

<style lang="less" scoped>
.message {
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
</style>
