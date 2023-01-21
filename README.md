# BACKEND-FP-GEEKSHUBS
Backend Repository final project Bootcamp Full Stack Developer

![image](https://user-images.githubusercontent.com/113507322/205169800-ae8aeff3-2afc-467c-8c53-6c1637671770.png)

### Datos generales

**- Autor del proyecto:** Alejandro López Bellés

**- Título del proyecto:** Proyecto Final GEEKSHUBS ACADEMY - WAVES APP

**- Fecha:** 15/01/2023

- Tecnologías y dependencias: 

![logos-tecnologias-backend](https://user-images.githubusercontent.com/113507322/211791975-936f8d80-4a7a-4907-8d1b-0d683a94c8a1.jpg)

### Descripción general del proyecto 

El siguiente proyecto consiste en el diseño y desarrollo de un backend (base de datos + API) para una app que muestra spots y ubicaciones donde practicar surf así como las condiciones de las playas, accesos, etc. La base de datos para esta aplicación es relacional (SQL) y permite la relación entre las tablas. La base de datos está levantada con 'EXPRESS + SEQUELIZE' y el deploy está hecho en 'RAILWAY'.

### Enlace deploy en Railway

- [x] [backend-fp-geekshubs-production.up.railway.app](https://backend-fp-geekshubs-production.up.railway.app)

### Tablas y relaciones

![db_surf_relations](https://user-images.githubusercontent.com/113507322/211869461-0ddc11af-7bfd-440b-a844-64359d8c3eee.png)

La base de datos consta de 4 tablas: SPOTS, USER-SPOTS, USERS, ROLES.

- La tabla SPOTS tiene una relación de "1 TO MANY" (1:N) con la tabla USERS-SPOTS. 
- La tabla USERS tiene una relación de "1 TO MANY" (1:N) con la tabla USERS-SPOTS. 
- La tabla ROLES tiene una relación de "1 TO MANY" (1:N) con la tabla USERS.
Las relaciones entre las tablas deberían aparecer como en la imagen superior adjunta, siendo las tablas del lado "MANY" las que se traen una FK las PK de la tablas "1". 

### Endpoints

Para poder ejetutar los endpoints se ejecuta la raiz:
## ** [backend-fp-geekshubs-production.up.railway.app](https://backend-fp-geekshubs-production.up.railway.app)

A continuación de esta ruta, se añaden los endpoints con las peticiones GET, POST, PUT y DELETE en el postman o algún servicio similar. 

SPOTS
- GET /spots --> Mostrará el listado con todos los spots.
- GET /spots/id/:id --> Mostrará un spot buscando por su Id.
- GET /spots/name/:name --> Mostrará un spot buscando por su nombre.
- GET /spots/toprated --> Mostrará los spots con mayor puntuación (una puntuación superior al 4 en una escala del 4 al 5).
- GET /spots/lifeguard --> Mostrará los spots que tengan socorrista (true).
- POST /spots/newspot --> Nos permitirá publicar un nuevo spot en la base de datos (necesita TOKEN y rol ADMIN).
      - Se introduce por body: { "spotname": "spotname", "city": "city", "adress": adress, "type": "type(arena o roca)", "conditions": "conditions", "lifeguard": "lifeguard(true or false)", "lenght": "lenght", "rating": "rating (1to5)", "imagepath": "imagepagh(google route.jpg)}".  
- DELETE /spots/deletespot/:id --> Eliminará un spot de la base de datos (necesita token de usuario).
- POST /savespot --> Creará un nuevo registro en la tabla Userspots, con la id del usuario y la id del spot guardado. 
- GET /myspots/:id --> Nos mostrará todos los spots guardados por el usuario (la id es la de usuario). 
- DELETE /deletemyspot/:id --> Nos permitirá eliminar un spot guardado por el usuario.


USER
- GET /users/all --> Mostrará el listado con todos los usuarios(necesita token de Admin).
- GET /users/:email --> Mostrará un usuario buscado por su email (necesita token de usuario).
- PATCH /users/edit --> Nos permitirá editar la información de un usuario (necesita token de usuario).
      - Se introduce por body: { "email": email, "password": password}.
- DELETE /users/delete --> Eliminará un usuario de la base de datos (necesita token de Admin).
      - Se introduce por body: { "email": "email"}.
      
 AUTH ROUTES
 - POST /auth/register --> Nos permitirá añadir un nuevo usuario en la base de datos.
 - POST /auth/login --> Nos permitirá hacer un login de un usuario ya registrado en base de datos.

 

