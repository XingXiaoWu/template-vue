<template>
  <el-table-column v-bind="column" v-on="$listeners">
    <template slot="header" slot-scope="scope">
      <free-render
        v-if="column.renderHeader"
        :scope="scope"
        :render="column.renderHeader"
      />
      <span v-else>{{ scope.column.label }}</span>
    </template>

    <template slot-scope="scope">
      <component
        v-if="column.component"
        v-bind="getCptBind(scope, column)"
        v-on="column.listeners"
        :is="column.component"
      />

      <!-- 嵌套表格 -->
      <template v-else-if="column.children">
        <free-column
          v-for="col in column.children"
          :key="col.prop"
          :column="col"
        />
      </template>

      <free-render v-else :scope="scope" :render="column.render" />
    </template>
  </el-table-column>
</template>

<script>
import FreeRender from './render.vue';
import CellForced from './forced';

export default {
  name: 'FreeColumn',
  props: {
    column: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    FreeRender,
  },
  watch: {
    column: {
      handler: 'renderColumn',
      immediate: true,
    },
  },
  methods: {
    renderColumn() {
      const { column } = this;
      // 多选：selection / 索引：index / 展开的按钮：expand
      if (column.type) {
        column.renderHeader = CellForced[column.type].renderHeader;
        column.render = column.render || CellForced[column.type].renderCell;
      }
      // 格式化内容
      if (column.formatter) {
        column.render = (h, scope) => (
            <span>
              {scope.column.formatter(
                scope.row,
                scope.column,
                scope.row[scope.column.property],
                scope.$index,
              )}
            </span>
        );
      }
      // 渲染成text
      if (!column.render) {
        column.render = (h, scope) => <span>{scope.row[scope.column.property]}</span>;
      }

      return column;
    },

    getColBind(col) {
      const bind = { ...this.$attrs, ...col };
      delete bind.component;
      delete bind.listeners;
      delete bind.propsHandler;
      return bind;
    },

    getCptBind({ row, column }, col) {
      const props = { row, col, column };
      const handler = col.propsHandler;
      return (handler && handler(props)) || props;
    },
  },
};
</script>
