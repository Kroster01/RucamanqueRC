RucamanqueRC

https://www.youtube.com/watch?v=lxYB79ANJM8

versiones.
* node: 10.15.3
* Angular CLI: 9.0.2

Comandos importantes:
(Comandos dentro de la carpeta server)
crear package.json
 * npm init --yes

dependencias par el uso de la aplicación
 * npm i express
 * npm i morgan
 * npm i promise-mysql@3.3.1
 * npm i cors


instaar Type Script
 * npm install -g typescript

crear tsconfig.ts
  * tsc -- init

Para realziar la compilación: (lo crea dentro de la carpeta ./server/build/index.js)
 * tsc 

 ----------------------------------------------------------

 * rear un comando en el package.json
 -> build el cual se ejecuta con el siguiente comando reconoce los cambios en el archivo index.ts:
       * npm run build

* crear dependencia solo para ambiente de desarrollo no para prod
-> npm i nodemon -D
-> npm i @types/express -D
-> npm i @types/morgan -D
-> npm i @types/cors -D


-> dev el cual se ejecuta con el siguiente comando reconoce los cambios en el archivo index.js:
       * npm run dev

Fin Creación del server y concceción a BD

/********************************************************************/

Creación de aplicación angular:

* Instalar angular CLI
       -> npm install -g @angular/cli

* Crear el proyecto 
       -> ng new clientRuca --routing


* ng g c components/navigationng
* ng g c components/jugador-form
* ng g c components/jugador-list

* ng g s services/jugadores

/*******/

Para cambiar los temas de bootstrap ( Layout )
https://bootswatch.com/

/*******/

Login:

https://www.youtube.com/watch?v=BCygvtZwkh4


* ng g s services/auth

* ng g i models/jwt-response
* ng g i models/user

* ng g m auth

* ng g c auth/login
* ng g c auth/register


* ng g s services/register


*****************
Imagenes User test
https://assets.entrepreneur.com/content/3x2/2000/20160816143948-miedo.jpeg?width=700&crop=2:1
https://psicologiaymente.com/media/Az/2a/vD/Az2avDXLkL/personas-emocionales/personas-emocionales-social.jpg
https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS77DWbO9imEF9XYqV7QPyWP8W6k_XFpHM6XWG87yj86Eoze4AS
