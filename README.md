# Diobank Frontend

Este projeto representa o desafio do curso "Fulstack typescript" da DIO, focado na criação de um sistema básico de banco digital com um login.

## Tecnologias Utilizadas

-   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
-   **TypeScript:** Superset tipado do JavaScript para maior segurança e manutenibilidade.
-   **Vite:** Ferramenta de build para frontend rápida.
-   **Jest:** Framework de testes JavaScript.
-   **React Testing Library:** Biblioteca para testar componentes React de forma eficiente.
-   **Tailwind CSS:** Framework CSS utility-first para estilização rápida.

## Como Configurar e Rodar o Projeto Localmente

1.  Clone o repositório:


```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
