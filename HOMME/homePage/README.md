# Plantilla base ![GitHub package.json version](https://img.shields.io/github/package-json/v/rr69sport/plantilla-base) ![GitHub repo size](https://img.shields.io/github/repo-size/rr69sport/plantilla-base) ![GitHub](https://img.shields.io/github/license/rr69sport/plantilla-base)

Una plantilla de HTML, CSS y JavaScript básica para proyectos de páginas estáticas.

Usa Gulp en su versión 4 para ejecutar las tareas.

Transpila el HTML, el CSS y el JavaScript para que sea posible trabajar en una carpeta de desarrollo y otra carpeta con todos los archivos minificados y concatenados para subir a producción.

También optimiza imágenes JPG, JPEG, GIF, PNG y SVG

Utiliza [Browser Sync](https://browsersync.io/docs/gulp) para levantar un servidor de desarrollo en tiempo real.

---

## Cómo usarlo

Descargue o clone este repositorio. También puede escribir en consola `npx degit rr69sport/plantilla-base nombre-de-su-projecto` para clonarlo desde este repositorio. Si lo clona puede hacer lo mismo pero cambiando el nombre del perfil por el suyo `npx degit <su perfil de github>/plantilla-base nombre-de-su-projecto` **IMPORTANTE:** _Debe declarar como `template` su repositorio._

Ejecute en terminal `npm install`

| comando           | descripción                              |
| ----------------- | ---------------------------------------- |
| `gulp dev`        | para trabajar en desarrollo              |
| `gulp production` | optimiza los archivos para producción    |
| `gulp docs`       | genera la carpeta docs para github pages |

Disfrute!

## Detalles

Si al agregar una nueva imágen con el servidor levantado y no la compila a la carpeta final. Pare el servidor de desarrollo con `Crtl C` y ejecute en consola el comando `images-production` y vuelva a levantar el servidor de desarrollo.

### Assets

En esta carpeta van los recursos de la página

La carpeta favicons es para SEO, en ella va todo lo relacionado a la etiqueta `<head>`

Paras las imágenes puede crear una carpeta `img o images` y ahí colocar las imágenes que necesite

### Pug

`views` es donde tendrá todo lo relacionado a Pug que se compilará a HTML.

`config` va todo lo relacionado a variables configuraciones que necesite.

`components` es la carpeta para componentes que se repetirán a lo largo de la web como botones, menus, slider ...etc

`layout` || `includes` van los bloques de código que no se repetirán a lo largo de la web

`pages` contendrá las páginas de la web, ej: index, about, contact etc etc.

`templates` es una carpeta que contendrá los templates que reutilizará a lo largo del proyecto

### SCSS

`scss` contendrá todo lo relacionado a css

`config` contendrá sus archivos de variables (scss, css) funciones, mixins, placeholders de sass

`layout` debería de existir los mismos archivos que la carpeta `layout` de Pug

`components` es la carpeta para componentes que se repetirán a lo largo de la web como botones, menus, slider ...etc

`styles` solo importará lo necesario para sus estilos de css

### Javascript

`scripts` se importan los archivos de la carpeta `modules`

`modules` está pensada para que cada archivo que cree sea un módulo que se exportará y será utilizado en otro archivo de `modules` o en el archivo `scripts`
