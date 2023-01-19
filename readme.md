<p align="center"><img style="height:220px; width: 330px"  src="https://res.cloudinary.com/practicaldev/image/fetch/s--c9CzdmYU--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/trp0zksm3rffm69rp35z.png" alt="imagen" /></p>

# Indice

A. [Inicializar proyecto](#inicializar-proyecto)
B. [Crear Proyecto desde inicio](#crear-proyecto)

# Inicializar proyecto

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
    // "removeComments": true,   
...
```

4. Instalar los paquetes dependencia
```
npm i express -E
npm i typescript -D
npm i ts-node-dev -D
npm i cors
npm i dotenv
npm i ts-jest supertest -D
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