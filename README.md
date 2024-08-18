<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).





# steep by steep for crate a new project of nest

actualiza nvm

    nvm install 18
    nvm use 18

instala nest de forma global 
 
    npm install -g @nestjs/cli

Este comando instalará el CLI de NestJS de forma global en tu sistema, permitiéndote usar el comando `nest` en cualquier directorio.

    nest --version

Esto debería mostrar la versión instalada del CLI.

    nest new quickloan-app

Esto creará un nuevo directorio llamado `quickloan-app` con la estructura básica de un proyecto NestJS y te pedirá seleccionar un gestor de paquetes (npm o yarn). Después de ejecutar este comando, el CLI instalará todas las dependencias necesarias.

### 6. **Revisar la Estructura del Proyecto**

Una vez creado el proyecto, navega al directorio del proyecto:

    cd quickloan-app

![imagen](https://github.com/user-attachments/assets/0a55dbc6-09c4-4563-9eda-b224e0614744)




# 🛠️ Sentando Bases con NestJS

---

## **Objetivo:**
**Sentar las bases en NestJS** a través de una serie de temas fundamentales que permitirán al estudiante construir una comprensión sólida de este poderoso framework. Los temas a tocar en el taller incluyen:

- 🛡️ **¿Qué es Nest?**
- 🤔 **¿Por qué usarlo?**
- 🗂️ **Explicación sobre cada archivo en un proyecto nuevo de Nest**
- 🏗️ **Core Nest building blocks**
- 📦 **Módulos**
- 📋 **Controladores (Post, Patch, Get, Delete)**
- 🏷️ **Primeros decoradores**
- 💼 **Servicios**
- 💉 **Inyección de dependencias**
- 🧪 **Pipes**
- 🚨 **Exception Filters**

---

## **Introducción:**
> **¡Bienvenidos!** 🎉 Después de un viaje profundo por el mundo de Node.js, TypeScript, decoradores, pruebas de desempeño y otras cosas que generan una potencial frustración 😅, nos adentramos ahora en el universo de NestJS, un framework que nos permitirá estructurar nuestras aplicaciones de manera modular y escalable, llevando nuestras habilidades a un nuevo nivel. En este taller, crearemos una base sólida en NestJS, preparándonos para enfrentar problemas complejos en el ámbito de la tecnología financiera.

---

## **Instrucciones de Entrega:**
- **Subir tu proyecto a GitHub:** Crea un repositorio en GitHub y sube tu proyecto de NestJS.
- **Compartir el enlace:** Sube tu enlace a la plataforma de Laboratoria para que pueda revisar tu proyecto.
---

## **Problemática:**

**Contexto de la Problemática:**

Imagina que has sido contratado por una fintech emergente que busca revolucionar el mercado de microcréditos. La compañía, **QuickLoan**, quiere ofrecer préstamos rápidos a personas con poca o ninguna historia crediticia, pero se enfrenta a varios desafíos:

1. **Velocidad y Seguridad:** Los usuarios esperan decisiones inmediatas sobre sus solicitudes de préstamo, lo cual requiere un sistema rápido y seguro.
2. **Escalabilidad:** A medida que la fintech crezca, el sistema debe ser capaz de manejar miles de solicitudes simultáneamente.
3. **Modularidad y Mantenimiento:** El sistema debe ser modular para permitir la incorporación de nuevas funcionalidades y mejoras sin comprometer la estabilidad.
4. **Personalización y Manejo de Excepciones:** Se requiere un sistema que pueda personalizar las ofertas de crédito y manejar excepciones de manera eficiente para evitar posibles fraudes.

**Problemática**: QuickLoan necesita un sistema backend robusto que permita manejar solicitudes de préstamos de manera segura, rápida y escalable, asegurando una experiencia fluida para el usuario final. Debes crear la base de este sistema utilizando NestJS.

---

## **Epica:**

**Como** desarrollador backend en **QuickLoan**,
**Quiero** construir un sistema modular y seguro en NestJS,
**Para** gestionar ***solicitudes de préstamos*** de manera eficiente y escalable, mientras garantizo la seguridad de los datos y el manejo adecuado de excepciones.

---

## **Criterios de Aceptación:**

- **Comprensión y Explicación de la Estructura de un Proyecto NestJS**: El estudiante debe identificar y explicar la función de cada archivo en la estructura básica de un proyecto NestJS.
- **Implementación de Controladores Eficientes**: El estudiante debe crear controladores que manejen diferentes métodos HTTP (Post, Patch, Get, Delete) para gestionar solicitudes de préstamo.
- **Uso Efectivo de Decoradores y Servicios**: Implementar decoradores y servicios que permitan personalizar y manejar la lógica de negocio del sistema de préstamos.
- **Configuración Adecuada de Pipes y Exception Filters**: Configurar y aplicar pipes para la validación de datos y filtros de excepción para manejar errores y proteger el sistema.
- **Aplicación de la Inyección de Dependencias para Modularidad**: Usar inyección de dependencias para construir un sistema modular, permitiendo la fácil adición de nuevas funcionalidades.


---

## **Historias de Usuario**

## **Historia de Usuario 1: Configuración Inicial y Estructura del Proyecto**

**Como** desarrollador backend,  
**Quiero** aprender a configurar y entender la estructura básica de un proyecto NestJS,  
**Para** asegurarme de que la arquitectura del proyecto sea modular y fácilmente escalable.

**Tareas:**

### **1. Configuración del Proyecto**

- **Propuesta de Solución**:
   - Crear un nuevo proyecto NestJS llamado `quickloan-app` utilizando el CLI:
   ```bash
   nest new quickloan-app
   ```
   - Revisar y entender la estructura de archivos generada por defecto. Asegúrate de leer la documentación o las notas adicionales proporcionadas. Puedes explorar cada archivo y carpeta para comprender su propósito y cómo contribuye a la arquitectura del proyecto [aquí](../notes/files-explanation.md) o [aquí](../notes/components.md).
   - Identificar el propósito de cada archivo y cómo contribuye a la modularidad del proyecto. Puedes leer la siguiente documentación [Estructura propuesta aplicaciones NestJS](../notes/proposed-architecture.md).

- **Preguntas**:
   1. ¿Qué propósito cumple el archivo `main.ts` en un proyecto NestJS y por qué es crucial en la configuración inicial? Puedes leer más sobre el archivo [aquí](../first-step-project/src/main.ts) en la sección inferior de
   notas.

### Propósito de `main.ts`

1. **Configuración de la Aplicación**:
   - `main.ts` es el archivo donde se configura e inicia la aplicación NestJS. Es el lugar donde se crea la instancia principal de la aplicación y se configuran aspectos clave como el módulo raíz y el puerto en el que la aplicación escuchará las solicitudes HTTP.

2. **Inicialización del Módulo Raíz**:
   - En `main.ts`, se importa el módulo raíz (generalmente `AppModule`) y se utiliza para crear una instancia de la aplicación. Este módulo raíz es el punto de entrada para todos los módulos, controladores y servicios de la aplicación.

3. **Arranque del Servidor**:
   - Una vez que la aplicación está configurada, `main.ts` también se encarga de arrancar el servidor HTTP. Aquí se especifica el puerto en el que la aplicación escuchará las solicitudes.

### Contenido Típico de `main.ts`

Un archivo `main.ts` típico en NestJS se ve así:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

En este ejemplo:

- **`NestFactory.create(AppModule)`**: Crea una nueva instancia de la aplicación NestJS usando el módulo raíz `AppModule`.
- **`app.listen(3000)`**: Indica que la aplicación escuchará en el puerto 3000 para recibir solicitudes.

### Importancia en la Configuración Inicial

1. **Punto de Entrada Centralizado**:
   - `main.ts` centraliza la configuración y el arranque de la aplicación. Esto facilita la gestión y el control del flujo de ejecución desde un único lugar.

2. **Configuración del Entorno**:
   - Puedes agregar configuraciones específicas para el entorno, como variables de entorno o configuraciones de middleware, en `main.ts`. Esto asegura que tu aplicación esté bien configurada desde el inicio.

3. **Facilita la Escalabilidad**:
   - Al tener un punto de entrada claro y configurado, es más fácil mantener y escalar la aplicación. Puedes modificar la configuración inicial sin tener que buscar en múltiples archivos.

---

## Propósito de `main.ts` con Nest CLI

Si estás utilizando el CLI de NestJS (`@nestjs/cli`), el archivo `main.ts` sigue siendo crucial porque actúa como el punto de entrada principal para la aplicación. Aquí te explico cómo se integra y por qué es importante:

### Propósito de `main.ts` con Nest CLI

1. **Configuración Inicial Automática**:
   - Cuando creas un nuevo proyecto usando el CLI de NestJS con el comando `nest new`, el CLI genera automáticamente el archivo `main.ts` en el directorio `src`. Esto te ahorra tiempo al configurar la estructura básica de tu aplicación.

2. **Creación de la Aplicación**:
   - El archivo `main.ts` generado por el CLI contiene el código necesario para crear una instancia de la aplicación NestJS. Utiliza `NestFactory.create()` para iniciar la aplicación usando el módulo raíz (generalmente `AppModule`).

3. **Configuración del Servidor**:
   - En `main.ts`, se especifica el puerto en el que la aplicación escuchará las solicitudes. El CLI configura este archivo para que la aplicación esté lista para aceptar conexiones en el puerto predeterminado, que suele ser el 3000.

### Ejemplo de `main.ts` Generado por Nest CLI

Cuando utilizas el CLI para crear un nuevo proyecto, el archivo `main.ts` generado suele verse así:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

Aquí:

- **`NestFactory.create(AppModule)`**: Crea una instancia de la aplicación utilizando el módulo `AppModule`, que es el módulo raíz generado por el CLI.
- **`app.listen(3000)`**: Configura el servidor para escuchar en el puerto 3000.

### Importancia del Archivo `main.ts` en un Proyecto Generado con CLI

1. **Punto de Configuración Inicial**:
   - A pesar de que el CLI genera el archivo por ti, `main.ts` sigue siendo esencial porque es el punto donde se configura el inicio de la aplicación. Aquí se definen aspectos clave como el módulo principal y el puerto del servidor.

2. **Facilita Personalizaciones**:
   - Aunque el CLI establece una configuración básica, puedes personalizar `main.ts` según tus necesidades, como agregar middleware global, configurar `helmet` para seguridad, o ajustar la configuración de CORS.

3. **Centraliza la Inicialización**:
   - Mantiene la inicialización de la aplicación centralizada en un único archivo, lo que facilita el mantenimiento y la escalabilidad. Si necesitas ajustar cómo se inicia tu aplicación o añadir configuraciones adicionales, lo haces en `main.ts`.

### Personalizaciones Adicionales

Con el CLI, puedes ajustar `main.ts` para incluir configuraciones específicas:

- **Agregar Middleware Global**:

  ```typescript
  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';
  import * as helmet from 'helmet';

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet()); // Agrega middleware para seguridad
    await app.listen(3000);
  }
  bootstrap();
  ```

- **Configurar CORS**:

  ```typescript
  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(); // Habilita CORS
    await app.listen(3000);
  }
  bootstrap();
  ```

En resumen, incluso cuando usas el CLI de NestJS, el archivo `main.ts` sigue siendo crucial. Es el archivo donde se configura e inicia la aplicación, y proporciona un punto central para cualquier configuración adicional o personalización que necesites realizar.



   2. ¿Qué diferencia existe entre `app.module.ts` y `app.controller.ts`? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación? Puedes leer sobre el archivo [aquí](../notes/files-explanation.md) o [aquí](../notes/components.md).


   ## Diferencias entre `app.module.ts` y `app.controller.ts`

### `app.module.ts`

- **Propósito**:
  - `app.module.ts` define el módulo raíz de la aplicación. Es donde se configuran los módulos, servicios y otros componentes esenciales que forman la estructura de la aplicación.

- **Responsabilidades**:
  - **Configuración del Módulo**: Declara qué módulos importará, qué proveedores (servicios) estarán disponibles, y qué controladores manejarán las solicitudes.
  - **Inyección de Dependencias**: Configura los servicios y proveedores que estarán disponibles para inyección en otros componentes.
  - **Organización**: Sirve como el punto central de configuración para los módulos de la aplicación, facilitando la modularidad y la separación de responsabilidades.

- **Ejemplo**:

  ```typescript
  import { Module } from '@nestjs/common';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';

  @Module({
    imports: [], // Módulos importados
    controllers: [AppController], // Controladores gestionados por este módulo
    providers: [AppService], // Servicios proporcionados por este módulo
  })
  export class AppModule {}

## Relación entre app.module.ts y app.controller.ts

- **Configuración y Dependencias**
        app.module.ts importa AppController en su configuración para que pueda manejar las solicitudes. También inyecta AppService como proveedor que AppController puede usar.
        app.controller.ts depende de AppService para procesar datos. Esta dependencia se configura en app.module.ts.

-    **Modularidad**:
        app.module.ts organiza y agrupa los componentes relacionados, proporcionando una estructura modular a la aplicación. Define cómo se ensamblan los diferentes componentes.
        app.controller.ts define cómo se manejarán las solicitudes dentro de esa estructura. Encapsula la lógica de manejo de solicitudes, separándola de la lógica de negocio que reside en los servicios.

- **Conclusión**

    app.module.ts es el archivo de configuración que define los módulos, controladores y servicios que conforman la aplicación.
    app.controller.ts define cómo se manejan las solicitudes HTTP y cómo se interactúa con los servicios.

Ambos archivos trabajan juntos para construir una aplicación modular y bien estructurada en NestJS, con app.module.ts manejando la configuración global y app.controller.ts manejando la lógica de manejo de solicitudes.


---

### **2. Creación de Módulos Básicos**

- **Propuesta de Solución**:
   - Crear un módulo `LoansModule` para gestionar operaciones de préstamos:
   ```bash
   nest g mo loans
   ```
   - Crear un módulo `UsersModule` para gestionar la información de los usuarios:
   ```bash
   nest g mo users
   ```

- **Cascarita**: Revisa el nombre del módulo generado y asegúrate de que sea correcto y consistente con el estándar de nombres.

- **Preguntas**:


   1. ¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?

Modularizar una aplicación separando funcionalidades en diferentes módulos es importante por varias razones:

    Organización:
        La modularidad permite organizar el código en unidades coherentes y manejables. Cada módulo se encarga de una parte específica de la aplicación (por ejemplo, gestión de usuarios o préstamos), lo que hace que el código sea más fácil de entender y mantener.

    Reutilización:
        Los módulos pueden ser reutilizados en diferentes partes de la aplicación o incluso en diferentes proyectos. Esto es posible porque los módulos encapsulan funcionalidades específicas y proporcionan una interfaz clara para interactuar con otras partes del código.

    Separación de Responsabilidades:
        La modularidad ayuda a mantener una separación clara entre diferentes responsabilidades y funcionalidades. Esto evita la creación de grandes archivos de código que hacen muchas cosas, facilitando la identificación y resolución de problemas.

    Desarrollo Colaborativo:
        En equipos grandes, diferentes desarrolladores o equipos pueden trabajar en diferentes módulos simultáneamente sin interferir en el trabajo de los demás. Esto mejora la eficiencia y reduce los conflictos en el código.



   2. ¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?
  - La modularidad tiene un impacto significativo en el mantenimiento y escalabilidad de la aplicación:

    - **Mantenimiento**:
        Simplicidad en la Gestión de Código: Los módulos permiten hacer cambios y correcciones en una parte específica del sistema sin afectar otras áreas. Esto facilita la localización y solución de problemas.
        Actualizaciones y Mejoras: Las actualizaciones en un módulo se pueden hacer de forma independiente, lo que permite implementar nuevas funcionalidades o realizar mejoras sin necesidad de rediseñar toda la aplicación.

   - **Escalabilidad**:
        Facilidad para Agregar Funcionalidades: A medida que la aplicación crece, puedes agregar nuevos módulos para implementar nuevas funcionalidades sin alterar la estructura existente. Esto permite que la aplicación escale de manera ordenada.
        Manejo de Complejidad: Al dividir la aplicación en módulos, se reduce la complejidad de cada componente. Esto facilita el crecimiento de la aplicación sin que se vuelva demasiado compleja de gestionar.



#### 3. Después de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?

Cuando creas un módulo usando el CLI de NestJS con el comando `nest g mo <module-name>`, se genera un archivo de módulo básico. Aquí está lo que se genera:

1. **`<module-name>.module.ts`**:
   - Este archivo define el módulo en sí. Contiene la clase del módulo con el decorador `@Module`, que agrupa los componentes relacionados (controladores, proveedores, etc.). Ejemplo para `loans`:

     ```typescript
     import { Module } from '@nestjs/common';
     import { LoansService } from './loans.service';
     import { LoansController } from './loans.controller';

     @Module({
       imports: [],
       controllers: [LoansController],
       providers: [LoansService],
     })
     export class LoansModule {}
     ```

   - **Relación**: `LoansModule` agrupa `LoansController` y `LoansService`, y define qué controladores y proveedores están disponibles en este módulo.

2. **Archivos Adicionales** (si creas controladores y servicios asociados):

   - **`<module-name>.controller.ts`**:
     - Define el controlador que maneja las solicitudes HTTP para el módulo. Ejemplo para `loans`:

       ```typescript
       import { Controller, Get } from '@nestjs/common';
       import { LoansService } from './loans.service';

       @Controller('loans')
       export class LoansController {
         constructor(private readonly loansService: LoansService) {}

         @Get()
         findAll() {
           return this.loansService.findAll();
         }
       }
       ```

   - **`<module-name>.service.ts`**:
     - Define el servicio que contiene la lógica de negocio del módulo. Ejemplo para `loans`:

       ```typescript
       import { Injectable } from '@nestjs/common';

       @Injectable()
       export class LoansService {
         findAll() {
           // Lógica para obtener todos los préstamos
           return [];
         }
       }
       ```

   - **Relación**: El controlador (`LoansController`) maneja las solicitudes HTTP y delega la lógica de negocio al servicio (`LoansService`). El servicio (`LoansService`) realiza operaciones y devuelve datos que el controlador usa para construir las respuestas.

En resumen, al modularizar la aplicación en NestJS, se crean archivos que definen la estructura y comportamiento de cada módulo, facilitando la organización, mantenimiento y escalabilidad de la aplicación.
```

---

### **3. Implementación de Controladores**

- **Propuesta de Solución**:
   - Crear un controlador `LoansController` para manejar solicitudes POST de creación de préstamos:
   ```bash
   nest g co loans
   ```
   - Implementar rutas GET para consultar el estado de un préstamo en el mismo controlador:
   ```typescript
   import { Controller, Get, Post, Body, Param } from '@nestjs/common';

   @Controller('loans')
   export class LoansController {
     @Post()
     createLoan(@Body() createLoanDto: any) {
       return 'Loan created';
     }

     @Get(':id')
     getLoanStatus(@Param('id') id: string) {
       return `Status of loan ${id}`;
     }
   }
   ```

- **Cascarita**: Asegúrate de que las rutas estén correctamente definidas y que los decoradores estén aplicados en los lugares correctos.

- **Preguntas**:
   1. ¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?

   ## Problemas Causados por Decoradores Incorrectos**

    - **Errores en la Ruteo de Solicitudes**:
        Descripción: Los decoradores como @Get, @Post, @Put, @Delete, etc., definen cómo se manejan las solicitudes HTTP para diferentes rutas en el controlador.
        Efecto: Si defines un decorador incorrectamente (por ejemplo, usando @Get en lugar de @Post), el endpoint no responderá a las solicitudes HTTP esperadas. Por ejemplo, si esperas una solicitud POST en una ruta pero usas el decorador @Get, la solicitud será ignorada o responderá con un error de método no permitido.

    - **Errores en el Manejo de Datos de Solicitud**:
        Descripción: Los decoradores como @Body, @Query, @Param ayudan a extraer datos de la solicitud HTTP.
        Efecto: Si usas un decorador incorrecto para extraer datos, es posible que el controlador no reciba la información esperada. Por ejemplo, usar @Body() en lugar de @Query() cuando se espera un parámetro de consulta resultará en la ausencia de los datos que el método necesita para procesar la solicitud.

    - **Errores de Validación y Tipos de Datos**:
        Descripción: Los decoradores proporcionan la estructura para manejar y validar los datos de la solicitud.
        Efecto: Si defines un decorador incorrecto, como no usar @Body() para recibir datos en una solicitud POST, puedes enfrentar problemas con la validación y manejo de datos. Esto puede causar errores en la lógica de negocios si el controlador recibe datos en un formato inesperado o nulo.

    - **Errores de Respuesta**:
        Descripción: El tipo de decorador usado influye en cómo se formulan las respuestas.
        Efecto: Si el decorador incorrecto se usa en el método del controlador, la respuesta puede no estar formateada correctamente o no coincidir con lo que se espera. Por ejemplo, si el decorador @Get() está mal configurado, la respuesta no será accesible a través del método HTTP GET.

    - **Errores en el Enrutamiento Interno**:
        Descripción: Decoradores como @Controller() definen la ruta base para los métodos dentro del controlador.
        Efecto: Si se usa un decorador incorrecto para definir la ruta base, los métodos dentro del controlador pueden no ser accesibles desde las rutas esperadas. Esto puede causar que los endpoints no respondan o no estén disponibles para los clientes.




   2. ¿Por qué es importante manejar rutas dinámicas (por ejemplo, `@Get(':id')`) en aplicaciones que interactúan con bases de datos?

 - **Acceso Específico a Recursos**

    Descripción: Las rutas dinámicas permiten acceder a recursos específicos en una base de datos mediante identificadores únicos, como IDs. Por ejemplo, @Get(':id') en un controlador permite obtener un recurso específico usando su identificador.

    Importancia: Esto es crucial para aplicaciones que manejan datos individuales, como usuarios, productos o pedidos. Puedes realizar operaciones precisas sobre recursos específicos sin tener que trabajar con todos los datos a la vez, lo que mejora la eficiencia y la experiencia del usuario.

    Ejemplo: Si quieres obtener los detalles de un usuario específico, la ruta /users/123 utilizará @Get(':id') para obtener el usuario con ID 123.

-  **Interacción Flexible con la Base de Datos**

    Descripción: Las rutas dinámicas permiten construir consultas más flexibles a la base de datos basadas en parámetros de ruta. Puedes usar estos parámetros para filtrar, buscar o manipular datos en la base de datos.

    Importancia: Esto es esencial para operaciones como la búsqueda de registros específicos, la visualización de detalles, o la actualización y eliminación de datos individuales. Permite que la aplicación interactúe de manera eficiente con la base de datos para realizar operaciones específicas basadas en los datos recibidos en la ruta.

    Ejemplo: Una ruta como /loans/:id permite buscar y devolver el préstamo específico en la base de datos que corresponde al ID proporcionado en la ruta.

 - **Optimización del Rendimiento**

    Descripción: Al utilizar rutas dinámicas, puedes limitar la cantidad de datos que necesitas recuperar y procesar. En lugar de cargar todos los registros de una base de datos, solo obtienes el recurso específico solicitado.

    Importancia: Esto mejora el rendimiento y la velocidad de la aplicación al reducir la carga en la base de datos y la cantidad de datos que se deben enviar a través de la red. También ayuda a reducir el uso de recursos en el servidor y mejorar la eficiencia general.

    Ejemplo: Si solo necesitas los detalles de un préstamo específico, puedes hacer una consulta para ese préstamo en particular en lugar de recuperar todos los préstamos y filtrar el resultado en la aplicación.

-  **Facilita la Escalabilidad**

    Descripción: Rutas dinámicas permiten que la aplicación maneje un gran volumen de solicitudes de manera eficiente al interactuar con la base de datos de forma específica y dirigida.

    Importancia: En aplicaciones grandes y escalables, es esencial poder manejar peticiones de manera granular y eficiente. Las rutas dinámicas permiten escalar la aplicación sin comprometer el rendimiento o la eficiencia al manejar datos específicos.

    Ejemplo: En una aplicación con millones de usuarios, manejar rutas dinámicas permite consultar información específica de un usuario sin afectar el rendimiento general de la aplicación.

-  **Soporte para Operaciones CRUD**

    Descripción: Las rutas dinámicas son una parte esencial para implementar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una API RESTful.

    Importancia: Facilitan la implementación de funcionalidades como la lectura de un recurso específico (@Get(':id')), la actualización de un recurso (@Put(':id')), y la eliminación de un recurso (@Delete(':id')), lo que permite gestionar y manipular datos en la base de datos de manera efectiva.

    Ejemplo: Para actualizar la información de un recurso, se puede usar @Put(':id') para especificar el recurso que se debe actualizar con base en el ID proporcionado en la ruta.

- **Resumen**

Manejar rutas dinámicas en aplicaciones que interactúan con bases de datos es esencial para:

    Acceder de manera específica a recursos individuales.
    Construir consultas flexibles y precisas.
    Optimizar el rendimiento al reducir la cantidad de datos procesados.
    Facilitar la escalabilidad y manejo eficiente de grandes volúmenes de datos.
    Implementar operaciones CRUD de manera efectiva.

Utilizar rutas dinámicas mejora la eficiencia y efectividad de las operaciones en aplicaciones basadas en datos, permitiendo una gestión más precisa y optimizada de la información.

---

## **Historia de Usuario 2: Implementación de la Lógica de Negocio y Seguridad**

**Como** desarrollador backend,  
**Quiero** aprender a implementar la lógica de negocio y asegurar la seguridad de las transacciones,  
**Para** garantizar que el sistema maneje las solicitudes de préstamos de manera segura y eficiente.

**Tareas:**

### **1. Desarrollo de Servicios**

- **Propuesta de Solución**:
   - Crear un servicio `LoansService` para manejar la lógica de negocio de los préstamos:
   ```bash
   nest g s loans
   ```
   - Implementar un método para calcular el riesgo del préstamo basado en el perfil del usuario:
   ```typescript
   import { Injectable } from '@nestjs/common';

   @Injectable()
   export class LoansService {
     calculateLoanRisk(userProfile: any): string {
       // Lógica básica para determinar el riesgo
       if (userProfile.creditScore > 700) {
         return 'Low Risk';
       } else {
         return 'High Risk';
       }
     }
   }
   ```

- **Cascarita**: Verifica que el nombre del método y su propósito estén alineados con la lógica de negocio y que el servicio esté correctamente inyectado en el controlador.

- **Preguntas**:
   1. ¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?

   ## Ventajas de Manejar la Lógica de Negocio en Servicios en Lugar de Controladores

### 1. Separación de Responsabilidades
- **Descripción**: Los controladores manejan las solicitudes HTTP y las respuestas, mientras que los servicios contienen la lógica de negocio que implementa la funcionalidad principal.
- **Ventaja**: Promueve una clara separación de responsabilidades. Los controladores se enfocan en la interacción con el cliente, y los servicios en la lógica de negocio, haciendo el código más modular y fácil de mantener.

### 2. Reutilización de Código
- **Descripción**: Los servicios pueden ser reutilizados en diferentes partes de la aplicación o en diferentes controladores.
- **Ventaja**: Centralizar la lógica de negocio en servicios permite reutilizar ese código sin duplicar la lógica, fomentando la consistencia y reduciendo la duplicación de código.

### 3. Pruebas Unitarias Más Efectivas
- **Descripción**: La lógica de negocio en los servicios puede ser probada de forma independiente de los controladores.
- **Ventaja**: Permite realizar pruebas unitarias más efectivas y aisladas, facilitando la identificación y corrección de errores.

### 4. Facilidad de Mantenimiento y Evolución
- **Descripción**: La lógica de negocio encapsulada en servicios es más fácil de mantener y evolucionar.
- **Ventaja**: Los servicios proporcionan un lugar centralizado para la lógica de negocio, facilitando actualizaciones y mantenimiento sin modificar múltiples controladores.

### 5. Escalabilidad y Flexibilidad
- **Descripción**: Los servicios proporcionan una estructura escalable y flexible para manejar la lógica de negocio.
- **Ventaja**: Permite escalar la aplicación de manera más ordenada y adaptarse a nuevos requisitos sin afectar a los controladores.

### 6. Implementación de Patrones de Diseño
- **Descripción**: Manejar la lógica de negocio en servicios facilita la implementación de patrones de diseño como el Patrón de Repositorio o el Patrón de Servicio.
- **Ventaja**: Mejora la calidad y flexibilidad del código, y permite una mejor gestión de la lógica de negocio y la interacción con la capa de datos.

### 7. Consistencia en la Aplicación
- **Descripción**: Centralizar la lógica de negocio en servicios ayuda a mantener una lógica consistente en toda la aplicación.
- **Ventaja**: Asegura que todas las partes de la aplicación sigan las mismas reglas y procesos, evitando inconsistencias y errores.

### Ejemplo Práctico

Considera una aplicación de e-commerce con funcionalidades para crear pedidos y calcular impuestos. En lugar de tener la lógica directamente en los controladores, puedes crear un servicio `OrderService` para manejar estas operaciones.

**Código del Controlador:**

```typescript
import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: any) {
    return this.orderService.createOrder(createOrderDto);
  }
}

codigo de el servicio 
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  createOrder(orderDto: any) {
    // Lógica para calcular impuestos y validar el pedido
    const total = this.calculateTotal(orderDto);
    // Guardar el pedido en la base de datos
    return `Order created with total ${total}`;
  }

  private calculateTotal(orderDto: any): number {
    // Lógica para calcular el total del pedido
    return 100; // Ejemplo
  }
}


En este ejemplo, OrderController maneja las solicitudes HTTP y delega la lógica de negocio a OrderService, manteniendo el controlador limpio y enfocado en las solicitudes y respuestas.
Conclusión

Manejar la lógica de negocio en servicios en lugar de en controladores ofrece ventajas significativas en términos de modularidad, reutilización de código, pruebas, mantenimiento, escalabilidad y consistencia. Promueve una arquitectura más limpia y organizada, facilitando el desarrollo y mantenimiento a largo plazo.







   2. ¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?

---

### **2. Aplicación de Decoradores y Pipes**

- **Propuesta de Solución**:
   - Utilizar decoradores como `@Body`, `@Param`, y `@Query` para manejar datos de las solicitudes en el `LoansController`:
   ```typescript
   @Post()
   createLoan(@Body() createLoanDto: any) {
     return `Loan created for ${createLoanDto.userId}`;
   }
   ```

   - Implementar un `ValidationPipe` para validar los datos de entrada:
   ```typescript
   import { ValidationPipe } from '@nestjs/common';

   // En main.ts
   app.useGlobalPipes(new ValidationPipe());
   ```

- **Cascarita**: Asegúrate de que el `ValidationPipe` esté configurado correctamente y aplicado en la instancia de la aplicación.

- **Preguntas**:
   1. ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?

  ### ¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?

Validar los datos de entrada en una aplicación que maneja transacciones financieras es crucial por las siguientes razones:

1. **Seguridad**: Al utilizar `class-validator` junto con `DTOs` (Data Transfer Objects) en NestJS, se puede asegurar que los datos recibidos cumplen con los requisitos esperados, evitando posibles vulnerabilidades, como inyecciones de código que podrían comprometer la seguridad de la aplicación.

2. **Integridad de los datos**: La validación garantiza que los datos procesados son correctos y completos, evitando errores en transacciones financieras. En NestJS, esto se implementa en los controladores o servicios mediante decoradores como `@IsNotEmpty()`, `@IsNumber()`, entre otros, para asegurar que los valores sean válidos antes de su procesamiento.

3. **Cumplimiento regulatorio**: Muchas normativas financieras requieren que los datos procesados sean precisos y seguros. NestJS facilita la implementación de estos controles mediante la validación y la estructura de los DTOs, asegurando que la aplicación cumpla con los estándares requeridos.

4. **Prevención de errores**: Validar los datos ayuda a prevenir errores en tiempo de ejecución que podrían llevar a transacciones incorrectas o inconsistencias en la base de datos. NestJS permite manejar estos errores de manera centralizada utilizando filtros de excepciones (`Exception filters`) y pipes de validación.

### Código de ejemplo en NestJS

```typescript
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  accountId: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  amount: number;

  @IsNotEmpty()
  description: string;
}

// Controlador en NestJS
import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    // Lógica para crear una transacción
  }
}
```

Este ejemplo muestra cómo NestJS puede ayudar a garantizar la seguridad y precisión de los datos mediante la validación estructurada en DTOs.





   2. ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?
### 2. ¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?

En el contexto de NestJS, los decoradores y pipes juegan un papel fundamental en la validación y transformación de datos. Si un decorador está mal colocado o si no se aplican los pipes correctamente, pueden ocurrir los siguientes problemas:

1. **Validación ineficaz**: Si un decorador de validación (`@IsNotEmpty()`, `@IsNumber()`, etc.) está mal colocado o faltante, los datos recibidos podrían no ser validados adecuadamente, lo que podría permitir la entrada de datos incorrectos o maliciosos, comprometiendo la integridad y seguridad de la aplicación.

2. **Errores en la lógica de negocio**: La ausencia o incorrecta aplicación de pipes podría llevar a errores en la transformación de datos. Por ejemplo, un pipe que transforma un string en un número (`ParseIntPipe`) puede no aplicarse correctamente, resultando en errores durante el procesamiento posterior de la información, ya que la aplicación espera un tipo de dato específico.

3. **Excepciones inesperadas**: Si los decoradores o pipes no se aplican correctamente, es probable que se produzcan excepciones en tiempo de ejecución. Por ejemplo, si un decorador de validación está mal colocado, se podría lanzar una excepción que no fue prevista, lo que podría causar la interrupción del flujo normal de la aplicación.

4. **Mal funcionamiento de las rutas**: En algunos casos, los decoradores están ligados al funcionamiento correcto de las rutas o controladores en NestJS. Un decorador mal colocado podría hacer que una ruta no reciba los parámetros necesarios o que la información no se procese como se espera, lo que podría resultar en errores 400 (Bad Request) o 500 (Internal Server Error).

5. **Problemas de depuración**: Decoradores mal colocados o pipes incorrectamente aplicados pueden dificultar la depuración de la aplicación, ya que los errores no serán tan evidentes. Esto puede resultar en tiempos de desarrollo más largos y dificultad para identificar la causa raíz de los problemas.

### Código de ejemplo en NestJS

Supongamos que tenemos un DTO mal configurado:

```typescript
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty() // Correcto
  accountId: number; // Falta el decorador @IsNumber()

  @IsNotEmpty() // Correcto
  amount: number; // Falta el decorador @Min(0)
  
  description: string; // Falta el decorador @IsNotEmpty()
}
```

Y un controlador donde no se aplica un pipe correctamente:

```typescript
import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    // Aquí no se está aplicando ParseIntPipe para asegurarse de que accountId sea un número
    // La ausencia de un pipe correcto puede llevar a problemas de tipo en tiempo de ejecución
  }
}
```

En este ejemplo, la ausencia de decoradores y pipes correctos podría llevar a la entrada de datos incorrectos, resultando en errores difíciles de rastrear y potencialmente comprometiendo la estabilidad y seguridad de la aplicación.
---

### **3. Configuración de Exception Filters**

- **Propuesta de Solución**:
   - Implementar filtros de excepción para manejar errores comunes:
   ```typescript
   import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

   @Catch(HttpException)
   export class HttpErrorFilter implements ExceptionFilter {
     catch(exception: HttpException, host: ArgumentsHost) {
       const ctx = host.switchToHttp();
       const response = ctx.getResponse();
       const status = exception.getStatus();

       response.status(status).json({
         statusCode: status,
         message: exception.message,
       });
     }
   }
   ```

   - Asegurarse de que los errores se manejen adecuadamente en las respuestas al usuario.

- **Cascarita**: Verifica que el filtro de excepción esté registrado correctamente en el módulo o aplicado globalmente.

- **Preguntas**:
   1. ¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?

   ### ¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?

El manejo adecuado de excepciones en una aplicación, especialmente en un entorno como NestJS, es crucial tanto para la experiencia del usuario como para la seguridad de la aplicación. A continuación, se detallan los impactos en ambas áreas:

#### 1. **Impacto en la Experiencia del Usuario**

- **Mensajes de Error Claros y Comprensibles**: Un manejo adecuado de excepciones permite proporcionar mensajes de error claros y específicos. Esto ayuda al usuario a entender qué salió mal y, en algunos casos, cómo puede corregir el problema. Por ejemplo, si un usuario intenta realizar una transacción con datos incorrectos, un mensaje como "El número de cuenta es inválido" es mucho más útil que un mensaje genérico de "Error en el servidor".

- **Mantenimiento de la Fluidez de la Aplicación**: Cuando las excepciones se manejan correctamente, la aplicación puede continuar funcionando sin interrupciones innecesarias. Los usuarios no se verán forzados a reiniciar la aplicación o perder su progreso debido a errores inesperados. Por ejemplo, si se produce un error durante una operación específica, el manejo adecuado de la excepción puede permitir que otras partes de la aplicación sigan funcionando normalmente.

- **Retroalimentación Inmediata**: Los usuarios pueden recibir retroalimentación inmediata sobre los errores, lo que les permite tomar decisiones informadas rápidamente. Esto es esencial en aplicaciones críticas como las financieras, donde cada acción del usuario tiene implicaciones importantes.

#### 2. **Impacto en la Seguridad de la Aplicación**

- **Prevención de Exposición de Información Sensible**: Sin un manejo adecuado de excepciones, detalles internos de la aplicación, como trazas de pila, rutas específicas, o lógica de negocios, podrían exponerse a los usuarios. Esto es un riesgo de seguridad, ya que los atacantes podrían utilizar esta información para explotar vulnerabilidades. El manejo de excepciones permite responder con mensajes genéricos y seguros, ocultando detalles internos de la aplicación.

- **Mitigación de Ataques**: Manejar adecuadamente las excepciones puede ayudar a mitigar ciertos tipos de ataques, como inyecciones SQL, ataques XSS (Cross-Site Scripting), y otros. Por ejemplo, al capturar y manejar excepciones correctamente, puedes asegurarte de que las entradas maliciosas no desencadenen comportamientos no deseados o comprometidos.

- **Logs y Auditoría**: Un buen manejo de excepciones también permite registrar los errores de manera controlada, lo que es vital para la auditoría y el monitoreo de la aplicación. Los registros detallados y seguros de las excepciones ayudan a identificar y corregir vulnerabilidades o problemas recurrentes antes de que puedan ser explotados.

### Ejemplo de Manejo de Excepciones en NestJS

Con NestJS, puedes implementar un filtro global de excepciones para capturar y manejar errores de manera consistente en toda la aplicación:

```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    // Registro del error para auditoría
    console.error('Error capturado:', exception.message);

    // Respuesta segura y amigable para el usuario
    response.status(status).json({
      statusCode: status,
      message: 'Ocurrió un error inesperado, por favor intente nuevamente',
    });
  }
}
```

En este ejemplo, se asegura que el mensaje enviado al usuario no revela información sensible, mientras que se mantiene un registro detallado del error para su posterior revisión y análisis.
   2. ¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?

   ### ¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?

El manejo centralizado de excepciones en una aplicación NestJS es crucial por varias razones que impactan tanto la calidad del código como la robustez y seguridad de la aplicación:

#### 1. **Consistencia en el Manejo de Errores**
   - **Respuesta Uniforme**: Al centralizar el manejo de excepciones, se garantiza que todos los errores sean gestionados de manera uniforme en toda la aplicación. Esto significa que los usuarios recibirán respuestas coherentes, independientemente de dónde ocurra el error en el sistema.
   - **Estandarización de Mensajes de Error**: Un manejo centralizado permite definir un formato estándar para los mensajes de error, lo cual mejora la comprensión y facilita la depuración.

#### 2. **Mejora en la Mantenibilidad**
   - **Reducción de Código Repetitivo**: Centralizar el manejo de excepciones reduce la necesidad de duplicar el mismo código de manejo de errores en diferentes partes de la aplicación, lo que simplifica la base de código y facilita su mantenimiento.
   - **Facilidad de Actualización**: Cuando se necesita actualizar la lógica de manejo de errores, se puede hacer en un solo lugar en lugar de revisar múltiples puntos en la aplicación.

#### 3. **Seguridad**
   - **Control de la Información Expuesta**: Centralizar el manejo de excepciones permite controlar y limitar la información que se expone en las respuestas de error, evitando la fuga de detalles internos que podrían ser explotados por atacantes.
   - **Gestión de Errores Críticos**: Se pueden implementar estrategias globales para manejar errores críticos que podrían comprometer la seguridad de la aplicación, asegurando que siempre se tomen medidas adecuadas en caso de fallos inesperados.

#### 4. **Facilidad de Monitorización y Auditoría**
   - **Registro Consistente de Errores**: Al centralizar, se pueden registrar todas las excepciones de manera uniforme, lo que facilita la auditoría y el monitoreo de la aplicación. Esto es esencial para detectar patrones de fallos y tomar acciones correctivas.
   - **Integración con Servicios de Monitorización**: Se pueden integrar servicios de monitorización y alertas de manera más sencilla, asegurando que cualquier excepción sea reportada y gestionada de forma eficiente.

#### 5. **Mejora en la Experiencia del Usuario**
   - **Manejo Controlado de Errores**: Al tener un punto centralizado para el manejo de excepciones, se puede garantizar que los usuarios reciban retroalimentación clara y útil cuando ocurre un error, lo que mejora su experiencia general.
   - **Reducción del Impacto de Errores**: El manejo centralizado permite capturar y mitigar errores antes de que afecten otras partes de la aplicación, reduciendo el impacto negativo en la experiencia del usuario.

### Ejemplo de Manejo Centralizado de Excepciones en NestJS

NestJS facilita la implementación de un manejo centralizado de excepciones mediante la creación de filtros globales:

```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception instanceof HttpException
      ? exception.getStatus()
      : 500;

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception instanceof HttpException ? exception.message : 'Internal server error',
    };

    console.error('Exception caught:', exception);

    response.status(status).json(errorResponse);
  }
}
```

### Registro Global del Filtro

Para aplicar este filtro globalmente:

```typescript
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
```

Con este enfoque, cualquier excepción no manejada será capturada y gestionada por el filtro centralizado, proporcionando una estrategia robusta y coherente para el manejo de errores en toda la aplicación.

---
