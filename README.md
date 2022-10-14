# Desafio para It Globers

Creada por Richard Irala
GitHub: <a href="https://github.com/RichardIrala">Richard Irala</a>

## _Deploy FrontEnd:_ <a href="https://desaf-it-globers-richardirala.web.app/">Click Aqui</a>

## _Tecnologias FrontEnd_

Este desafio utiliza como tecnologías principales en el FrontEnd:

- [React] -
- [TypeScript] -
- [React-redux] -

## _Herramienta de compilado del FrontEnd_

- [Webpack] - La misma tiene una configuración básica creada por mi

## _Ejecución_

Instalar las dependencias de la aplicación

```sh
Estando ubicados en la carpeta frontend
1 - yarn <= Instala las dependencias de la aplicación.
2 - yarn build <= Se encarga de buildear el FrontEnd con webpack creando un archivo bundle.js.
3 - yarn start <= Se encarga de iniciar la WebApp con live-server.
```

## _Detalles del desafio_

El mismo cuenta con una página de inicio "/" la cuál es responsive. Se adapta a distintos tamaños de pantalla. Lo más cercano al diseño posiblemente sea la versión desktop. Ya que el diseño de la versión mobile y algunos estilos fueron diseñados por mi solo son un Extra.

Redux se aplica solamente para guardar y persistir la cuenta del usuario al momento de loguearse (Loguearse es requerido para acceder a la página de "mi cuenta". La misma solo muestra al usuario con qué correo esta logueado. Para generar la funcionalidad de logueo me encargue de crear 3 vistas de Autenticación distintas. Y la API que utilice es una que cree hace unos meses con PostgreSQL así que aproveche a utilizarla en este caso para caer en un entorno más real de lo que es una página web con usuarios y cuentas. 

Respecto a React no tuve problemas, utilice una estructura de encarpetado (ui: userInterface, components: componentes, pages: páginas de la app presentes en el Router, etc). Respecto a Redux no lo suelo utilizar, lo que hice con el mismo fue algo que aprendi leyendo en estas horas mientras desarrollaba el desafío. Un manejador de estados que suelo Utilizar suele ser Recoil y/o un State generado por mano propia. Aunque podría aprender redux de manera ágil y adaptarme rápido al mismo.

### _¿Con qué compila la Single Page ApPlication?_

La misma compila con Webpack. La ya mencionada fue configurada por mi mismo con los respectivos Loaders y cosas que senti necesarios para poder trabajar. Como extra también trabaje con CSS Modules los cuales al compilar sufren cambios para reducir la probabilidad de que se repitan selectores.

Un extra que configure fue una ruta especial para que webpack y typescript me las reconozca en caso de que quisiese importar modulos de manera más simple. La misma me evita tener que hacer imports como: "../../components/algo.tsx" en cambio me permite importarlas de la siguiente manera: "components/algo.tsx" teniendo en cuenta como ruta raíz ("./src").

### _Detalles sobre el deploy con... ¿GitHub Actions y Firebase?_

Sí, me encargue de deployar la SPA con Firebase, para ello utilice firebase CLI y cree y modifique una GitHub action para que pase por pasos sistematizados y si todo funciona bien haga Deploy automaticamente del FrontEnd, y si algo sale mal simplemente el Deploy se cancela y se mantiene la versión funcional del momento.
