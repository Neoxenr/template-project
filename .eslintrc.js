const { configure, presets } = require("eslint-kit");

module.exports = configure({
  mode: "default",
  allowDebug: process.env.NODE_ENV !== "production",
  presets: [
    presets.typescript({
      root: "./",
      tsconfig: "tsconfig.json"
    }),
    presets.prettier({
      bracketSpacing: true,
      printWidth: 80,
      trailingComma: "none",
      tabWidth: 2,
      useTabs: false,
      arrowParens: "always",
      endOfLine: "auto"
    }),
    presets.react({ version: "detect" })
  ],
  extend: {
    extends: ["plugin:perfectionist/recommended-natural"],
    rules: {
      "perfectionist/sort-imports": [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'type',
            'react',
            'nanostores',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          'custom-groups': {
            value: {
              react: ['react', 'react-*'],
              nanostores: '@nanostores/**',
            },
            type: {
              react: 'react'
            }
          },
          'newlines-between': 'always',
          'internal-pattern': [
            '@/components/**',
            '@/stores/**',
            '@/pages/**',
            '@/lib/**',
          ],
          'read-tsconfig': false,
        },
      ],
    }
  }
});
