# Api de gestión academica

## Proceso de Configuración:

### ¿Qué pasos realizaste desde la creación de la carpeta hasta la ejecución del servidor?

* Verificamos que este instalado node `node -v` 
* `npm -v`
* `npm init -y`
* Abrimos vscode `code .`
* Instalamos express `npm install express` 
* Creamos el `index.html`
* Se le asigna un puerto ya sea el `3000` o `3001`, el que le queramos colocar
* Realizamos las peticiones `get` para el saludo, aprendices y programas
* Cambiamos la información de script para que al colocar npm run dev nos funcione colocamos `"dev":"node install.js"`
* `node index.js`
* `npm run dev`

### ¿Qué función cumple el archivo package.json?

* Gestiona las dependencias

### ¿Qué ocurre al ejecutar npm install?

* Se descangan e instalan bibliotecas y herraminetas que los proyectos en js o node.js necesitan para poder funcionar

## Comprensión del Servidor:

### ¿Qué significa que el servidor esté “escuchando” en un puerto?

* Significa que el servidor esta encendido y esperando información

### ¿Qué sucede internamente cuando accedes a http://localhost:3000/?

* Es una peticion para que el computador nos muestre lo que estamos desarrollando en el puerto indicado

## Análisis de Rutas

### ¿Qué diferencia existe entre cada ruta creada?

* En un unicio olvide agregarle despues de / el nombre aprendices por lo cula no me funciono en el primer intento

### ¿Qué papel cumplen los parámetros request y response?

* request es la petición al servidor y el response es la solucion o datos del request que envio el cliente 

## Reflexión Técnica

### ¿Qué dificultades encontraste?

* No le habia cambiado la información de sripts por lo cual en un inicio no me funciono ya uqe debia cambiar lo que decis test por `"dev":"npm run dev"`

### ¿Qué aprendiste que no habías comprendido completamente en la parte teórica?

* Que type debe dejarse en commonjs, no se debe cambiar ya que antes lo cambiabamos para module

#### ¿Por qué es importante estructurar bien un proyecto desde el inicio?

* Para evitar tener que reestructurar mayor cantidad de cosas y tener que revisar carpeta a carpeta donde se encuentra lo corregido o donde debe agregarse lo nuevo ya que esto ocasiona relentizar el trabajo
