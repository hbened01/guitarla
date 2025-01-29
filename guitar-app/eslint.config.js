import pluginJs from '@eslint/js'
import jsLint from '@eslint/js'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import vueLint from 'eslint-plugin-vue'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  jsLint.configs.recommended,
  ...vueLint.configs['flat/recommended'],
  // ignore files
  {
    ignores: [
      'dist/**/*',
      'node_modules/**/*'
    ]
  },
  // config parsers
  {
    files: ['**/*.{js,mjs,cjs,vue}']
  },
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        sourceType: 'module'
      }
    }
  },
  // Add more specific rules and conventions here:
  {
    rules: {
      // Vue specific rules
      'vue/no-unused-vars': 'error', // Disallow unused variables in Vue components
      'vue/multi-word-component-names': 'off', // Allow single-word component names
      'vue/html-quotes': ['error', 'double'], // Enforce double quotes in Vue templates

      // General JavaScript rules
      'semi': ['error', 'never'], // Disallow semicolons
      'brace-style': 'error', // Enforce one true brace style
      'comma-dangle': ['error', 'never'], // Disallow trailing commas
      'quotes': ['error', 'single'], // Enforce single quotes
      'array-bracket-spacing': ['error', 'never'], // Disallow spaces inside array brackets
      'arrow-spacing': 'error', // Enforce spacing around arrow function arrows
      'spaced-comment': ['error', 'always'], // Enforce spacing after comments
      'indent': ['error', 2, { 'SwitchCase': 1 }], // Enforce 2-space indentation, with 1 level for switch cases
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // Enforce spacing around colons in object literals
      'object-curly-spacing': ['error', 'always'], // Enforce spacing inside curly braces
      'block-spacing': ['error', 'always'], // Enforce spacing inside single-line blocks
      'comma-spacing': ['error', { 'before': false, 'after': true }], // Enforce spacing around commas
      'func-call-spacing': ['error', 'never'], // Disallow spacing between function identifiers and their invocations
      'no-trailing-spaces': 'error', // Disallow trailing spaces
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }], // Disallow multiple empty lines
      'keyword-spacing': ['error', { 'before': true, 'after': true }], // Enforce spacing around keywords
      'space-infix-ops': 'error', // Enforce spacing around infix operators
      'space-before-blocks': ['error', 'always'], // Enforce spacing before blocks
      'space-in-parens': ['error', 'never'], // Disallow spaces inside parentheses

      // Best practices
      'no-var': 'warn', // Suggest using const or let instead of var
      'object-shorthand': ['warn', 'properties'], // Suggest using object shorthand syntax
      'array-callback-return': ['error', { 'allowImplicit': false, 'checkForEach': false }], // Enforce return statements in array callbacks
      'camelcase': ['error', { 'allow': ['^UNSAFE_'], 'properties': 'never', 'ignoreGlobals': true }], // Enforce camelcase naming convention
      'curly': ['error', 'multi-line'], // Enforce consistent brace style for all control statements
      'default-case-last': 'error', // Enforce default case to be last in switch statements
      'dot-notation': ['error', { 'allowKeywords': true }], // Enforce dot notation whenever possible
      'eqeqeq': ['error', 'always', { 'null': 'ignore' }], // Enforce the use of === and !==
      'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false, 'properties': true }], // Enforce capitalization of new constructors
      'no-array-constructor': 'error', // Disallow Array constructors
      'no-caller': 'error', // Disallow use of arguments.caller or arguments.callee
      'no-eval': 'error', // Disallow use of eval()
      'no-extend-native': 'error', // Disallow extending native objects
      'no-extra-bind': 'error', // Disallow unnecessary function binding
      'no-global-assign': 'error', // Disallow assignments to native objects or read-only global variables
      'no-implied-eval': 'error', // Disallow implied eval()
      'no-iterator': 'error', // Disallow use of the __iterator__ property
      'no-labels': ['error', { 'allowLoop': false, 'allowSwitch': false }], // Disallow use of labeled statements
      'no-lone-blocks': 'error', // Disallow unnecessary nested blocks
      'no-multi-str': 'error', // Disallow multiline strings
      'no-new': 'error', // Disallow new operators outside of assignments or comparisons
      'no-new-func': 'error', // Disallow new operators with the Function object
      'no-new-object': 'error', // Disallow Object constructors
      'no-new-symbol': 'error', // Disallow new operators with the Symbol object
      'no-new-wrappers': 'error', // Disallow new operators with the String, Number, and Boolean objects
      'no-octal-escape': 'error', // Disallow octal escape sequences in string literals
      'no-proto': 'error', // Disallow use of the __proto__ property
      'no-regex-spaces': 'error', // Disallow multiple spaces in regular expressions
      'no-return-assign': ['error', 'except-parens'], // Disallow assignment operators in return statements
      'no-self-compare': 'error', // Disallow comparisons where both sides are exactly the same
      'no-sequences': 'error', // Disallow comma operators
      'no-template-curly-in-string': 'error', // Disallow template literal placeholder syntax in regular strings
      'no-throw-literal': 'error', // Disallow throwing literals as exceptions
      'no-undef-init': 'error', // Disallow initializing variables to undefined
      'no-unmodified-loop-condition': 'error', // Disallow unmodified loop conditions
      'no-unneeded-ternary': ['error', { 'defaultAssignment': false }], // Disallow ternary operators when simpler alternatives exist
      'no-unreachable-loop': 'error', // Disallow loops with a body that allows only one iteration
      'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true, 'allowTaggedTemplates': true }], // Disallow unused expressions
      'no-use-before-define': ['error', { 'functions': false, 'classes': false, 'variables': false }], // Disallow use of variables before they are defined
      'no-useless-call': 'error', // Disallow unnecessary calls to .call() and .apply()
      'no-useless-computed-key': 'error', // Disallow unnecessary computed property keys in object literals
      'no-useless-constructor': 'error', // Disallow unnecessary constructors
      'no-useless-rename': 'error', // Disallow renaming import, export, and destructured assignments to the same name
      'no-useless-return': 'error', // Disallow redundant return statements
      'no-void': 'error', // Disallow use of the void operator
      'one-var': ['error', { 'initialized': 'never' }], // Enforce variables to be declared either together or separately in functions
      'prefer-const': ['error', { 'destructuring': 'all' }], // Suggest using const declaration for variables that are never reassigned after declared
      'prefer-promise-reject-errors': 'error', // Enforce using Error objects as Promise rejection reasons
      'prefer-regex-literals': ['error', { 'disallowRedundantWrapping': true }], // Enforce the use of regex literals instead of regex constructors
      'symbol-description': 'error', // Require symbol descriptions
      'yoda': ['error', 'never'] // Disallow Yoda conditions
    }
  },
  // plugins
  {
    plugins: {
      // key "simple-import-sort" is the plugin namespace
      'simple-import-sort': pluginSimpleImportSort
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          'groups': [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']]
        }
      ],
      'simple-import-sort/exports': 'error',
      'import/newline-after-import': 'off'
    }
  }
]