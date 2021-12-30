module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    // 자바스크립트 버전, 7은 ECMA2016
    ecmaVersion: 7,
    // 모듈 export를 위해 import, export를 사용 가능여부를 설정, script는 사용불가
    sourceType: 'script',
    // jsx 허용을 설정, back-end 설정이기 때문에 사용 안함
    ecmaFeatures: {
      jsx: false,
    },
  },
  extends: [
    'airbnb-base', // or airbnb-base
    'plugin:import/errors', // 설치한 경우
    'plugin:import/warnings', // 설치한 경우
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'no-param-reassign': [2, { props: false }],
    'no-nested-ternary': 0,
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'react-hooks/rules-of-hooks': 0,
    'no-extra-semi': 'error',
    'react/jsx-filename-extension': [
      0,
      { extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'] },
    ], // 확장자로 js와 jsx ts tsx 허용하도록 수정
    'arrow-parens': ['warn', 'as-needed'], // 화살표 함수의 파라미터가 하나일때 괄호 생략
    'no-unused-vars': ['off'], // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    'no-console': ['off'], // 콘솔을 쓰면 에러가 나던 규칙 해제
    'import/prefer-default-export': ['off'], // export const 문을 쓸때 에러를 내는 규칙 해제
    'react-hooks/exhaustive-deps': ['off'], // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': [0, { custom: 'ignore' }], // props spreading을 허용하지 않는 규칙 해제
    'linebreak-style': 0,
    'prettier/prettier': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'func-names': ['off'],
  },
};
