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

C. [Documentación relevante](#documentación-relevante)

D. [Documentación del proyecto](#documentación-del-proyecto)

* [Técnologias](#tecnologias)

* [Peticiones](#peticiones)

<br/><br/><br/>

---

# Inicializar proyecto
1. Clonar el repositorio

2. Ejecutar
```
npm install
```
3. Establecer las variables de entorno __.env__ como lo especifica el archivo __env.confg.ts__

4. Levantar la base de datos con docker para trabajar de forma local (o establecer conexión a un servicio mongodb)
```
docker-compose up -d
```
5. Iniciar el testing
```
npm test
```
6. Iniciar el proyecto en desarrollo
```
npm run dev
```
7. Iniciar en build de la carpeta ./dist
```
npm build
```
8. Testear peticion
```
http://localhost:3000/test
```
9. Popular base de datos
```
http://localhost:3000/seed
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
    "resolveJsonModule": true,
    "outDir": "./dist",  
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,  
    "emitDecoratorMetadata": true,
    "removeComments": true,   
    },
    "include": ["src/**/*"]

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
# Documentación relevante

[Typescript](https://www.typescriptlang.org/)

[Typegoose](https://typegoose.github.io/typegoose/)

[Node](https://nodejs.org/es/)

[Express](https://expressjs.com/es/)

[MongoDB](https://www.mongodb.com/) 

[jest](https://jestjs.io/)

<br/><br/><br/>

---
# Documentación del proyecto

<br/>

## Tecnologías

<br/>

**a. Typescript**


Se trata de un superset de Javascript que nos permite establecer un tipado estricto en el contexto de desarrollo.
Typescript nos facilita también comprender el código estableciendo referencias explícitas.


**b. MongoDb**


Mongodb es un sistema de base de datos NoSQL, orientado a documentos y de código abierto.
Nos permite cierta flexibilidad para establecer los datos y conveniente utilizar javascript para
realizar peticiones. Así como otros SQL, podemos establecer referencias a otros documentos y programar
triggers para que se ejecuten de acuerdo a las necesidades.

**c. NodeJs + Express + Jest + Supertest**


Express es una libreria conveniente para realizar backend sencillos y escalables. 
Nos otorga las funcionalidades más que necesarias para realizar el proyecto. 
Así también, contamos con Jest para realizar prubeas unitarias y Supertest para realizar pruebas de servicios http.


<br/>

## Peticiones

<br/>

**Empleado**

a. GET - /api/empleado/

Retorna un array con todos los empleados

b POST - /api/empleado/

Permite ingresar un empleado al documento de MongoDb empleado requiere de un JSON en el cuerpo de la petición:
```
{
    "descripcion": "Node, Nest, Express",
    "dni": 31394089,
    "esDesarrollador": true,
    "fechaNac": "1990-12-17T02:00:00.000Z",
    "nombre": "esteban",
    "apellido": "gomez",
    "area": "63cd4b8b4b48470ca73a7c18",
}
```


<br/>

## Utils

<br/>

**a.hasLength.error**
Devuelve un error al tener un array vacío

**http.handler**
Permite establecer respuestas http en una sola linea
