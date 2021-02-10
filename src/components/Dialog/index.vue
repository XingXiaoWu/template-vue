<template>
  <el-dialog
    custom-class="sz-dialog"
    v-model="visible"
    :before-close="beforeClose"
    :show-close="showClose"
    :close-on-click-modal="closeOnClickModal && !loading"
    :close-on-press-escape="!loading"
    @opened="opened"
    @open="open"
  >
    <!-- <span>这是一段信息</span> -->
    <p class="title">{{ title }}</p>
    <slot>
      {{ message }}
    </slot>
    <template #footer>
      <slot v-if="$slots.footer" name="footer" />
      <span v-else class="sz-dialog-footer flex jusa">
        <el-button :type="confirmType" @click="confirm" :loading="loading">{{
          confirmText
        }}</el-button>
        <el-button @click="cancel" :disabled="loading">取 消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Dialog',
  props: {
    title: {
      type: String,
      default: '',
    },
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
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    beforeClose: {
      type: Function,
      default: (done: Function) => {
        done();
      },
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    confirmType: {
      type: String,
      default: 'primary',
    },
    confirmText: {
      type: String,
      default: '确 定',
    },
  },
  emits: ['update:modelValue', 'update:loading', 'cancel', 'confirm', 'opened', 'open'],
  setup(props, context) {
    const visible = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        context.emit('update:modelValue', value);
      },
    });
    const cancel = () => {
      context.emit('cancel');
      visible.value = false;
    };
    const confirm = () => {
      context.emit('update:loading', true);
      context.emit('confirm');
    };
    const opened = () => {
      context.emit('opened');
    };
    const open = () => {
      context.emit('open');
    };
    return {
      visible,
      cancel,
      confirm,
      opened,
      open,
    };
  },
});
</script>

<style lang="less">
.sz-dialog {
  max-width: 650px;
  .title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 16px;
  }
  .sz-dialog-footer {
    display: flex;
  }
}
</style>
