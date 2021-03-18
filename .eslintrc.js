module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
  },
  extends: ["airbnb-base"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 12
  },
  globals: {
    Ember: true,
    DS: true,
    Encompass: true,
    $: true,
    moment: true,
    SelectionHighlighting: true,
    guiders: true,
  },
  rules: {
    "accessor-pairs": "error",
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-callback-return": "off",
    "array-element-newline": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-scoped-var": "error",
    "block-spacing": "off",
    "brace-style": "off",
    "callback-return": "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "comma-style": ["error", "last"],
    complexity: "error",
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "off",
    "consistent-this": "off",
    curly: "error",
    "default-case": "error",
    "dot-location": "off",
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],
    "eol-last": "off",
    eqeqeq: "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": "off",
    "func-style": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "error",
    "global-require": "off",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "implicit-arrow-linebreak": ["error", "beside"],
    indent: "off",
    "indent-legacy": "off",
    "init-declarations": "off",
    "jsx-quotes": "error",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "line-comment-position": "off",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "off",
    "lines-around-directive": "error",
    "lines-between-class-members": "error",
    "max-classes-per-file": "error",
    "max-depth": ["error", 6],
    "max-len": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "error",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-alert": "off",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "warn",
    "no-bitwise": "error",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "error",
    "no-undef": 2,
    "no-continue": "error",
    "no-console": "off",
    "no-unused-vars": ["warn", { args: "none" }],
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "off",
    "no-empty-function": "off",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "off",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-floating-decimal": "error",
    "no-implicit-globals": "off",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "off",
    "no-loop-func": "warn",
    "no-magic-numbers": "off",
    "no-misleading-character-class": "error",
    "no-mixed-operators": "off",
    "no-mixed-requires": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "off",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "off",
    "no-native-reassign": "error",
    "no-negated-condition": "off",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-path-concat": "error",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "off",
    "no-restricted-globals": "off",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "off",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "off",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "error",
    "no-useless-call": "off",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "off",
    "no-useless-escape": "off",
    "no-var": "off",
    "no-void": "error",

    "no-warning-comments": "off",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "error",
    "object-curly-spacing": "off",
    "object-shorthand": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "after"],
    "padded-blocks": "off",
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "warn",
    "prefer-promise-reject-errors": "off",
    "prefer-reflect": "off",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "prefer-template": "off",
    "quote-props": "off",
    quotes: "off",
    radix: ["error", "always"],
    "require-atomic-updates": "error",
    "require-await": "warn",
    "require-jsdoc": "off",
    "require-unicode-regexp": "off",
    "rest-spread-spacing": ["error", "never"],
    semi: "error",
    "semi-spacing": "error",
    "semi-style": ["error", "last"],
    "sort-imports": "error",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "error",
    "spaced-comment": "off",
    strict: ["error", "never"],
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": "error",
    "unicode-bom": ["error", "never"],
    "valid-jsdoc": "off",
    "vars-on-top": "off",
    "wrap-iife": "error",
    "wrap-regex": "off",
    "yield-star-spacing": "error",
    yoda: "off",
  },
};
