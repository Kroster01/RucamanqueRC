RucamanqueRC

Comandos importantes:
(Comandos dentro de la carpeta server)
crear package.json
 * npm init --yes

dependencias par el uso de la aplicación
 * npm i express morgan promise-mysql cors

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


-> dev el cual se ejecuta con el siguiente comando reconoce los cambios en el archivo index.js:
       * npm run dev