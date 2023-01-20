<div style="display:flex; margin-top: 30px">
    <img style="height:220px; width: 230px"  src="https://miro.medium.com/max/816/1*TpbxEQy4ckB-g31PwUQPlg.png" alt="imagen" />
    <img style="height:220px; width: 350px"  src="https://www.hostnextra.com/kb/wp-content/uploads/2021/02/install-expressjs-on-ubuntu-20-04.png" alt="imagen" />
    <img style="height:220px; width: 330px"  src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" alt="imagen" />
</div>

<br/><br/><br/>

---
# Indice

A. [Inicializar proyecto](#inicializar-proyecto)

B. [Crear Proyecto desde inicio](#crear-proyecto)

C. [Documentación](#documentación)

<br/><br/><br/>

---

# Inicializar proyecto
1. Clonar el repositorio

2. Ejecutar
```
npm install
```
3. Establecer las variables de entorno __.env__ como lo especifica el archivo __env.confg.ts__

4. Levantar la base de datos con docker para trabajar de forma local
```
docker-compose up -d
```

<br/><br/><br/>

---
# Crear Proyecto desde inicio
1. Inicializar el proyecto
```
npm init -y
```

2. iniciar el tsconfig.json
```
npm run tsc -- --init
```


3. Configurar el outDir, sourceMap, no implicitReturns, etc. del tsconfig.json
```
...
    "resolveJsonModule": true,
    "outDir": "./dist",  
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,  
    "emitDecoratorMetadata": true,
    "removeComments": true,   
    ...
...
```

4. Instalar los paquetes dependencia
```
npm i express -E
npm i cors
npm i typescript -D
npm i ts-node-dev -D
npm i dotenv
npm i ts-jest supertest -D
npm i mongoose
npm i @typegoose/typegoose
```
6. Instalar los types para Typescript
```
npm i --save-dev @types/express
npm i --save-dev @types/cors
npm i --save-dev @types/dotenv
npm i --save-dev @types/jest
npm i --save-dev @types/supertest
```

5. incluir en package.json
```
{
    "scripts":{
        "dev": "ts-node-dev src/index.ts",
        "tsc": "tsc",
        "start": "node dist/index.js",
    }
}
```

<br/><br/><br/>

---
# Documentación

[Typescript](https://www.typescriptlang.org/)

[Typegoose](https://typegoose.github.io/typegoose/)

[Node](https://nodejs.org/es/)

[Express](https://expressjs.com/es/)

[jest](https://jestjs.io/)
