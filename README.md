# Ataccama - Table

Project is a demo for `Table Feature Component`, the component can understand a _JSON_ structure object/list
and generate a table in its hierarchy-tree automatically. Everything is managed inside the Table's folder,
so it can as standalone feature regardless the rest of the app.

# Getting Started

to develop:

```
  > npm install
  > npm start
```

to lint:

```
  > npm run tslint
```

# Table Folder Structure

`./components` - React Components/Table's part Components
`./store` - Redux Store
`./styles.ts` - Styled Components
`./tableFactory` - helpers functions to create Table components
`./tableGraph` - analyze/scan and create structure data object from JSON output
`./index` - server Table with Redux Provider


## Built with

- [TypeScript]()
- [Create React App](https://github.com/facebook/create-react-app)
- [React](http://reactjs.org)
- [Redux](https://redux.js.org/)
- [StyledComponents](https://www.styled-components.com/)
