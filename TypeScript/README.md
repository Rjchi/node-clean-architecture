# Pasos para usar Node con TypeScript con Nodemon

Más información - [Docs Oficiales](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)

1. Instalar TypeScript y tipos de Node, como dependencia de desarrollo
```
npm i -D typescript @types/node
```
2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto), aquí indicamos que nos cree el archivo tsconfig.json y indicamos cual es el directorio de distribución (./dist -> directorio final/producción) y que este pendiente del directorio src.
```
npx tsc --init --outDir dist/ --rootDir src
```

3. **Opcional** - Para traspilar el código, se puede usar este comando, y aparte debemos tener otra terminal con la ejecución en este caso de nodemon, pero con la compilación de js.
```
npx tsc --watch
npx nodemon dist/app
```

4. Configurar Nodemon y Node-TS (permite ejecutar codigo de typescript en node sin tener que transpilarlo).
```
npm install -D ts-node nodemon
```
5. Debemos crear el archivo de configuración de Nodemon - **nodemon.json** y agregar lo siguiente (watch -> pendiente del archivo src, ext -> busca las extensiones, ignora y exec -> ejecuta el comando).
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```
6. Crear script para correr en desarrollo en el **package.json**
```
  "dev": "nodemon"
  "dev": "npx nodemon" // En caso de no querer instalar nodemon
```

7. Instalar rimraf (Herramienta que funciona similar al rm -f) lo utilizamos para eliminar un directorio
```
npm install -D rimraf
```

8. Crear scripts en el package.json para construcción del proyecto (generando lo que vamos a subir a un hosting o server, con build) e iniciar en modo de producción (start), con build eliminamos el directorio de distribución ./dist y lo volvemos a generar con tsc, y con start nos aseguramos de que build este con los ultimos cambios (ya que lo estamos ejecutando en start) y levantamos nuestra aplicación en producción con node dist/app.js.
```
   "build": "rimraf ./dist && tsc",
   "start": "npm run build && node dist/app.js"
```

***

# Node con TypeScript - Recomendado

1. Instalar TypeScript y demás dependencias
```
npm i -D typescript @types/node ts-node nodemon rimraf
```

2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
```
npx tsc --init --outDir dist/ --rootDir src
```

3. Crear archivo de configuración Nodemon - nodemon.json
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```

4. Crear scripts para dev, build y start

```
  "dev": "nodemon",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```
