# Projeto React - Lista de Contatos
## Descrição
Este projeto é uma aplicação de lista de contatos desenvolvida em React que permite aos usuários criar, editar e excluir contatos. A aplicação utiliza as seguintes tecnologias e bibliotecas:

React: Biblioteca JavaScript para construção de interfaces de usuário.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
Styled Components: Biblioteca para estilização de componentes utilizando tagged template literals.
Redux: Biblioteca para gerenciamento de estado global.
React Router: Biblioteca para gerenciamento de rotas.
Framer Motion: Biblioteca para animações.
Local Storage: Armazenamento de dados no navegador para persistência dos contatos.
Tema Dinâmico: Alteração de temas utilizando o Styled Components.

### Funcionalidades

Criação de Contatos: Adicione novos contatos com nome, e-mail e telefone.
Edição de Contatos: Edite os detalhes dos contatos existentes.
Exclusão de Contatos: Remova contatos da lista.
Persistência de Dados: Os contatos são armazenados no Local Storage, garantindo que os dados persistam entre as sessões.
Navegação: Utilize o React Router para navegar entre diferentes páginas da aplicação.
Animações: Aplicadas animações suaves às transições de componentes com o Framer Motion.
Tema Dinâmico: Alterne entre temas claros e escuros usando Styled Components.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
