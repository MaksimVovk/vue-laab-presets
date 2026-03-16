import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import configPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/*.cli.js', '**/*.system.js', '**/*.ignore.js'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue', '**/*.js'],
    plugins: {
      vue: pluginVue,
    },
    linterOptions: {
      reportUnusedInlineConfigs: 'error',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'never'],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'no-console': ['error', { allow: ['error', 'info', 'dir', 'warn'] }],
      curly: ['error', 'all'],
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      indent: ['error', 2, { SwitchCase: 1 }],
      'vue/multi-word-component-names': 'off',
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/attributes-order': [
        'error',
        {
          order: [
            'CONDITIONALS',
            'LIST_RENDERING',
            'DEFINITION',
            'RENDER_MODIFIERS',
            ['UNIQUE', 'SLOT'],
            'CONTENT',
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'GLOBAL',
            'OTHER_ATTR',
            'EVENTS',
          ],
          alphabetical: false,
        },
      ],
    },
  },
  configPrettier,
]