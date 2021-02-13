module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭js的no-unused-expressions规则，使用ts的
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'linebreak-style':[0,'error','window'],
    // 标签自闭和
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    //   标签缩进
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    // 导出为default
    'import/prefer-default-export': 0,
    //  除state外,因为vuex需要state
    'no-shadow': [
      'error',
      {
        allow: ['state', 'modules', 'Vue'],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['modules', 'state', 'Vue'],
      },
    ],
    // 对象使用解构,数组不使用
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false,
      },
    ],
  },
};
