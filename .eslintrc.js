module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: [
        // 'plugin:vue/vue3-recommended',
        // 'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],

    rules: {
        // override/add rules settings here, such as:
        // 关闭驼峰命名规则
        'vue/multi-word-component-names': 0,
        '@typescript-eslint/ban-types': 'error',
        //9-22新增的，为了解决this赋值给变量的报错，因为是在ts环境中的
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
                allowedNames: ['self'], // Allow `const self = this`; `[]` by default
            },
        ],
    },
};
