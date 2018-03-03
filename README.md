# Entorno de trabajo React

* `yarn init`, inicia un __package.json__ se crea un __yarn.lock__

* se agrega en el `package.json` para poder ejecutar `yarn start` y desplegar un servidor.
```js
{
  "scripts": {
    "start": "static"
  }
}
```

* `yarn add -D babel-cli babel-preset-react` para instalar el cliente de babel, el preset de babel para react, con el flag `-D` para indicar que son dependencias de desarrollo.

* Se crea un `npm script` `build` para que ejecute babel sobre nuestro archivo `page.js` usando el `--preset react` y coloque el resultado en la carpeta `build` _(**our-dir**)_
```js
{
  "scripts": {
    "start": "static",
    "build": "babel page.js --presets react --out-dir=build"
  }
}
```

* podemos agregar el flag `-w` al _script_ de `build` para que **babel** se quede escuchando cambios en el arcivo `page.js`.
```js
{
  "scripts": {
    "start": "static",
    "build": "babel page.js --presets react --out-dir=build -w"
  }
}
```

Usar `yarn install` para instalar las dependencias.
