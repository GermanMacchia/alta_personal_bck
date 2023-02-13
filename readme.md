<div style="display:flex; margin-top: 30px">
    <img style="height:220px; width: 230px"  src="https://miro.medium.com/max/816/1*TpbxEQy4ckB-g31PwUQPlg.png" alt="imagen" />
    <img style="height:220px; width: 350px"  src="https://www.hostnextra.com/kb/wp-content/uploads/2021/02/install-expressjs-on-ubuntu-20-04.png" alt="imagen" />
    <img style="height:220px; width: 330px"  src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" alt="imagen" />
</div>

<br>

Deploy:

[https://germanmacchia.github.io/alta_personal_frt/](https://germanmacchia.github.io/alta_personal_frt/)
<br>

Repositorio Front End:

[https://github.com/GermanMacchia/alta_personal_frt](https://github.com/GermanMacchia/alta_personal_frt)
<br>

Actualización del proyecto:

[Alta empleados V3](https://github.com/GermanMacchia/alta-empleados-v3)
<br>

<br><br>

---

# Indice

A. [Inicializar proyecto](#inicializar-proyecto)

B. [Crear Proyecto desde inicio](#crear-proyecto)

C. [Documentación relevante](#documentación-relevante)

D. [Documentación del proyecto](#documentación-del-proyecto)

- [DLR-DER](#dlr-der)

- [Tecnologías](#tecnologías)

- [Utils](#utils)

- [Peticiones](#peticiones)

  - [Test](#test)

    - GET

  - [Seed](#seed)

    - GET

  - [Empleado](#empleado)

    - GET
    - POST
    - PATCH
    - DELETE

  - [Area](#area)

    - GET
    - POST
    - PATCH
    - DELETE

  - [Avatar](#avatar)
    - GET
    - GET/:id
    - POST
    - DELETE

<br><br>

---

# Inicializar proyecto

1. Clonar el repositorio

2. Ejecutar

```
npm install
```

3. Establecer las variables de entorno **.env** como lo especifica el archivo **./src/env.config.ts**

4. Levantar la base de datos con docker para trabajar de forma local (o establecer conexión a un servicio mongodb)

```
docker-compose up -d
```

5. Establecer variables de entorno

   a. PORT => Puerto <br>
   b. DB_CONN_STRING => Direccion de coneccion mongodb <br>
   c. DB_NAME => Nombre de documento <br>
   d. EMPLEADOS_COLECTION => Nombre de coleccion empleado <br>
   e. AREA_COLECTION => Nombre de coleccion área <br>
   f. JWTSECRET => Palabra secreta para signature JWT <br>
   g. CLOUDINARY_NAME => Clave de cloudinary<br>
   h. CLOUDINARY_KEY => Clave de cloudinary <br>
   i. CLOUDINARY_SECRET => Clave de cloudinary <br>

6. Iniciar el testing

```
npm test
```

7. Iniciar el proyecto en desarrollo

```
npm run dev
```

8. Iniciar en build de la carpeta ./dist

```
npm build
```

9. Testear peticion

```
http://localhost:3000/test
```

10. Popular base de datos

```
http://localhost:3000/seed
```

<br><br><br>

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
npm i jsonwebtoken
npm i bcrypt
npm i @typegoose/typegoose
npm i express-fileupload
npm i cloudinary
```

6. Instalar los types para Typescript

```
npm i --save-dev @types/express
npm i --save-dev @types/cors
npm i --save-dev @types/dotenv
npm i --save-dev @types/jest
npm i --save-dev @types/supertest
npm i --save-dev @types/express-fileupload
npm i --save-dev @types/bcrypt
npm i --save-dev @types/jsonwebtoken
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

<br><br>

---

# Documentación relevante

[Typescript](https://www.typescriptlang.org/)

[Typegoose](https://typegoose.github.io/typegoose/)

[Node](https://nodejs.org/es/)

[Express](https://expressjs.com/es/)

[MongoDB](https://www.mongodb.com/)

[jest](https://jestjs.io/)

[Cloudinary](https://cloudinary.com/documentation/node_integration)

[JWT](https://jwt.io/)

<br><br>

---

# Documentación del proyecto

<br><br>

## DLR-DER

---

---

  <img style="height:420px; width: 530px"  src="./public/DLR - DER.jpg" alt="dlr-der" />

<br><br>

## Tecnologías

---

---

<br>

**Typescript**

Se trata de un superset de Javascript que nos permite establecer un tipado estricto en el contexto de desarrollo.
Typescript nos facilita también comprender el código estableciendo referencias explícitas.
<br><br>

**MongoDb**

Mongodb es un sistema de base de datos NoSQL, orientado a documentos y de código abierto.
Nos permite cierta flexibilidad para establecer los datos y conveniente utilizar javascript para
realizar peticiones. Así como otros SQL, podemos establecer referencias a otros documentos y programar
triggers para que se ejecuten de acuerdo a las necesidades.
<br><br>

**NodeJs + Express + Jest + Supertest**

Express es una libreria conveniente para realizar backend sencillos y escalables.
Nos otorga las funcionalidades más que necesarias para realizar el proyecto.
Así también, contamos con Jest para realizar prubeas unitarias y Supertest para realizar pruebas de servicios http.
<br><br>

**Cloudinary**

Se trata de un SaaS que nos permite gestionar y persistir imagenes y videos en la nube.<br>
También proporciona varias herramientas para transformar, minificar y cambiar el formato de nuestros archivos.<br><br>

**JWT**

Se trata de una herramienta estandart para otorgar privilegios de información de manera segura y efectiva.<br>
Elabora cadenas compuestas por tres partes que serializa una base de números y letas.<br><br>

**Bcrypt**

Nos permite encriptar las contraseñas de nuestros usuarios de manera que no puedan ser vistas en la base de datos.<br><br>

**Express fileUpload**

Nos permite crear un path temporal para el archivo de imagen que recibimos<br>

<br><br>

## Utils

---

---

<br>

---

**hasLength.error**<br>
Devuelve un error al tener un array vacío

---

**http.handler**<br>
Permite establecer respuestas http

---

<br><br>

## Peticiones

---

---

El token asignado a través del signIn se deberá incluir en headers para las peticiones que lo requieran:

```
Authorization:'eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiX2lkIjoiNjNkZDA2MWM1ODU2MTAxYTU3YzgwMzFlIiwiaWF0IjoxNjc1NDI5NDE2LCJleHAiOjE2NzU1MTU4MTZ9.6UfRONgcftHloEL1zRT8gRFnaf7WfP33RI8VnUiGD0U'
```

<br>

---

### **TEST**

---

A> **GET-**

_@params_: --<br>
_@body_: --<br>

_resultado_: <br>Retorna un string = 'API online'.<br><br>
_restricciones_: --<br><br>

---

### **SEED**

---

A> **GET-**

_@params_: --<br>
_@body_: --<br>

_resultado_: <br> Popula la base de datos con los array de la carpeta SEED.<br><br>
_restricciones_:<br>
Que el nombre del área no exista en la base de datos.<br>
Que el dni del empleado no exista en la base de datos.<br><br>

---

### **EMPLEADO**

---

A> **GET-** /api/empleado/

_@params_: --<br>
_@body_: --<br>

_resultado_: <br>Retorna un array de tipo Empleado[].<br><br>
_restricciones_: <br>
El solicitante debe tener un token asignado.<br><br>

---

B> **POST-** /api/empleado/

_@params_: --<br>
_@body_:<br>

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

_resultado_:<br>
Permite ingresar un empleado al documento de MongoDb empleado.<br>
Retorna JSON tipo Empleado con dato ingresado.<br><br>
_restricciones_: <br>
Todos datos del JSON son requeridos según el EmpleadoModel.<br>
El formato de la fecha debe ser válido.<br>
No debe existir un dni con el mismo número.<br>
El solicitante debe tener un token asignado.<br><br>

---

C> **PATCH-** /api/empleado/:id

_@params_:<br>
Requiere id de tipo ObjectId segun mongodb ej. "63d0348ded35d69d110a9b59".<br> <br>
_@body_: <br>

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

_resultado_: <br>Retorna un JSON con los datos anteriores.<br><br>
_restricciones_: <br>
El Id debe ser de un empleado existente.<br>
El solicitante debe tener un token asignado.<br><br>

---

D> **DELETE-** /api/empleado/:id

_@params_: <br>
Requiere id de tipo ObjectId segun mongodb ej. "63d0348ded35d69d110a9b59".<br><br>
_@body_: --<br>

_resultado_: <br>Retorna un resultado JSON con los siguientes datos:

```

{
"acknowledged": true,
"deletedCount": 1
}

```

_restricciones_: <br>
El Id debe ser de un empleado existente.<br>
El solicitante debe tener un token asignado.<br><br>

---

### **AREA**

---

A> **GET-** /api/area/

_@params_: --<br>
_@body_: --<br>

_resultado_: <br>Retorna un array de tipo Area[].<br><br>
_restricciones_: --<br><br>

---

B> **POST-** /api/area/

_@params_: --<br>
_@body_:<br>

```

{
"nombre": "Administración",
}

```

_resultado_:<br>
Permite ingresar un area al documento de MongoDb area.<br>
Retorna JSON tipo Area con dato ingresado.<br><br>
_restricciones_: <br>
Todos datos del JSON son requeridos segun el AreaModel.<br>
El nombre no debe existir en BD.<br>
El solicitante debe tener un token asignado.<br><br>

---

C> **PATCH-** /api/area/:id

_@params_:<br>
Requiere id de tipo ObjectId segun mongodb ej. "63d0348ded35d69d110a9b59".<br> <br>
_@body_: <br>

```

{
"nombre": "Recursos Humanos",
}

```

_resultado_:<br> Retorna un JSON con los datos anteriores.<br><br>
_restricciones_: <br>
El Id debe ser de un área existente.<br>
El solicitante debe tener un token asignado.<br><br>

---

D> **DELETE-** /api/area/:id

_@params_: <br>
Requiere id de tipo ObjectId segun mongodb ej. "63d0348ded35d69d110a9b59".<br><br>
_@body_: --<br>

_resultado_: <br>Retorna un resultado JSON con los siguientes datos:

```

{
"acknowledged": true,
"deletedCount": 1
}

```

_restricciones_: <br>
El Id debe ser de un área existente.<br>
El solicitante debe tener un token asignado.<br><br>

---

### **AVATAR**

---

A> **GET-** /api/avatar/

_@params_: --<br>
_@body_: --<br>

_resultado_: <br>Retonorna una array de tipo Avatar[].<br><br>

_restricciones_: <br>
El solicitante debe tener un token asignado.<br><br>

---

A> **GET-** /api/avatar/:id

_@params_: Requiere id de tipo ObjectId segun mongodb ej. "63d0348ded35d69d110a9b59".<br><br>
_@body_: --<br>

_resultado_: <br>

```

{
"\_id": {
"$oid": "63e465e35eb9b3d55cb2a9de"
  },
  "empleado_id": {
    "$oid": "63d042456fe4c922b5db7252"
},
"url": "https://res.cloudinary.com/dbmxs9ttb/image/upload/v1675912674/avatares/tmp-10-1675912673836_rajjpe.jpg",
"public_id": "avatares/tmp-10-1675912673836_rajjpe",
"nombre": "julian estecochea",
"\_\_v": 0
}

```

_restricciones_: <br>
El Id debe ser de un empleado existente.<br>
El solicitante debe tener un token asignado.<br><br>

---

B> **POST-** /api/avatar/

_@params_: --<br>
_@body_: <br>Recibe un multipart/form-data con un archivo de imagen:

```
{
formData.append('image', file, file.name)
formData.append('\_id', empleado.\_id as string)
formData.append('nombre', `${empleado.nombre} ${empleado.apellido}`)
}

```

_resultado_: <br>
Solo existe una imagen por empleado, por lo tanto se borra de la base de datos y de cloudinary el anterior asociado al empleado_id.<br>
Devuelve un string: 'Imagen Recibida'.<br>

_restricciones_: <br>
Todos datos del FormData son requeridos.<br>
El solicitante debe tener un token asignado.<br><br>

---

C> **DELETE-** /api/avatar/:id

_@params_: <br> Requiere id de tipo ObjectId segun mongodb ej. "63d0348ded35d69d110a9b59".<br><br>
_@body_: --<br>

_resultado_:<br>
Elimina el archivo del documento mongodb avatar correspondiente al id del empleado.<br>
Elimina el archivo de imagen correspondiente al public_id en cloudinary.<br>
Responde con 'avatar eliminado' cuando la petición es exitosa.<br>

_restricciones_: <br>
El solicitante debe tener un token asignado.<br><br>

---
