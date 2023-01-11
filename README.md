# BACKEND-FP-GEEKSHUBS
Backend Repository final project Bootcamp Full Stack Developer

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
