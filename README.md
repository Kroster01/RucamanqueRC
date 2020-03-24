RucamanqueRC


#### Para hacer correr la aplicación ejecutar los siguientes comandos:
```
       * np run build   (En la carpeta server)
       * np run dev     (En la carpeta server)
       * ng serve       (En la careta del proyecto)
```

https://www.youtube.com/watch?v=lxYB79ANJM8

#### versiones.
```
       * node: 10.15.3
       * Angular CLI: 9.0.2
```

# Comandos importantes:
(Comandos dentro de la carpeta server)

#### Crear package.json
```
       * npm init --yes
```

#### Dependencias par el uso de la aplicación
```
       * npm i express
       * npm i morgan
       * npm i promise-mysql@3.3.1
       * npm i cors
```

#### Instaar Type Script
```
       * npm install -g typescript
```

#### Crear tsconfig.ts
```
       * tsc -- init
```

#### Para realziar la compilación: (lo crea dentro de la carpeta ./server/build/index.js)
```
       * tsc
```

 ----------------------------------------------------------

#### Cear un comando en el package.json
 -> build el cual se ejecuta con el siguiente comando reconoce los cambios en el archivo index.ts:
```
       * npm run build
```

#### Crear dependencia solo para ambiente de desarrollo no para prod
```
       * npm i nodemon -D
       * npm i @types/express -D
       * npm i @types/morgan -D
       * npm i @types/cors -D
```

#### Comando dev: el cual se ejecuta con el siguiente comando reconoce los cambios en el archivo index.js:
```
       * npm run dev
```

Fin Creación del server y concceción a BD

/********************************************************************/

Creación de aplicación angular:

#### Instalar angular CLI
```
       * npm install -g @angular/cli
```

#### Crear el proyecto
```
       * ng new clientRuca --routing
```

#### Creación de componentes
```
       * ng g c components/navigationng
       * ng g c components/jugador-form
       * ng g c components/jugador-list
       * ng g c components/footer
       * ng g c components/page404

       * ng g c auth/login
       * ng g c auth/register
```

#### Creación de servicios
```
       * ng g s services/jugadores
       * ng g s services/auth
       * ng g s services/register
```

#### Creación de modulos
```
       * ng g m auth
       * ng g m jugador
       * ng g m entrenador (Pendiente Creación)
       * ng g m apoderado (Pendiente Creación)
```

#### Creación de Interfacies
```
       * ng g i models/jwt-response
       * ng g i models/user
```

/*******/

Para cambiar los temas de bootstrap ( Layout )
https://bootswatch.com/

/*******/

Login:

https://www.youtube.com/watch?v=BCygvtZwkh4


#### Datos opcionales
```
       Grupos Sanguineos:
       O-	O+	A−	A+	B−	B+	AB−	AB+
```

*****************
Imagenes User test
https://assets.entrepreneur.com/content/3x2/2000/20160816143948-miedo.jpeg?width=700&crop=2:1
https://psicologiaymente.com/media/Az/2a/vD/Az2avDXLkL/personas-emocionales/personas-emocionales-social.jpg
https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS77DWbO9imEF9XYqV7QPyWP8W6k_XFpHM6XWG87yj86Eoze4AS
