## instalar jest no React Native

```bash
npm install --save-dev jest @testing-library/react-native @types/jest jest-expo ts-jest @testing-library/jest-native ts-node
```

## Configurar o jest
# criar o arquivo jest.config.ts na raiz do projeto e por esse código:

```
module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
```

## No package.json:
```
"scripts": {
  "test": "jest --watchAll"
}
```

## Instalar esse comando com a exata versão do react no package.json 

```bash
npm install react-test-renderer@18.3.1 --save-dev                                     
```