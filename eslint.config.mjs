import path from 'node:path'
import { fileURLToPath } from 'node:url'
import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default tseslint.config(
  {
    ignores: ['**/dist'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.mocha,
        },

        parser: tsParser,
        ecmaVersion: 2015,
        sourceType: 'module',

        parserOptions: {
            project: './tsconfig.eslint.json',
            tsconfigRootDir: __dirname,
        },
    },

    rules: {
        'no-console': 'error',
        semi: ['error', 'never'],

        'brace-style': ['error', 'stroustrup', {
            allowSingleLine: true,
        }],

        'comma-dangle': ['error', 'always-multiline'],
    },
  }
)
