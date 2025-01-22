import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] }, // Обрабатываем только JS/JSX файлы
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные браузера
      },
    },
  },
  pluginJs.configs.recommended, // Рекомендуемые правила ESLint
  pluginReact.configs.flat.recommended, // Рекомендуемые правила для React
  {
    // Настройки для React
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
    rules: {
      "react/jsx-uses-react": "off", // Отключаем для React 17+
      "react/react-in-jsx-scope": "off", // Отключаем для React 17+
    },
  },
];