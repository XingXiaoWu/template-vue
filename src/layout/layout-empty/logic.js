export default {
  name: 'layout-empty',
  components: {
  },
  props: {
  },
  data: () => ({
  }),
  computed: {
    key() {
      return this.$route.path;
    },
  },
  watch: {},
  created() { },
  mounted() { },
  beforeCreate() { }, // 生命周期 - 创建之前
  beforeMount() { }, // 生命周期 - 挂载之前
  beforeUpdate() { }, // 生命周期 - 更新之前
  updated() { }, // 生命周期 - 更新之后
  beforeDestroy() { }, // 生命周期 - 销毁之前
  destroyed() { }, // 生命周期 - 销毁完成
  activated() { },
  methods: {},
};