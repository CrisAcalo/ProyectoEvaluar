# Explorador de Usuarios

Aplicación web para explorar usuarios y sus publicaciones, desarrollada con React y TypeScript, sin dependencias complejas de estilos, priorizando la accesibilidad, diseño moderno y UX.

## Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn

## Instalación y Ejecución

1. Instalar las dependencias:
   ```bash
   npm install
   ```

2. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir en el navegador: [http://localhost:5173/](http://localhost:5173/) (o la URL que indique la consola).

## Decisiones Técnicas y Arquitectura

### 1. Stack Tecnológico
- **React**: Elegido como la biblioteca central por su paradigma declarativo y su robusto ecosistema. Nos permite dividir la interfaz en componentes altamente reutilizables y manejar el flujo de datos de manera predecible, lo cual es ideal para interfaces interactivas como este explorador.
- **TypeScript**: Se implementó para proveer seguridad estática (tipado estricto). Al conocer de antemano la forma de los objetos (Interfaces `User` y `Post`), prevenimos errores de acceso a propiedades en tiempo de ejecución, mejoramos el autocompletado en el editor y hacemos que el código se "auto-documente".
- **Vite**: Seleccionado como el empaquetador (bundler) y servidor de desarrollo. A diferencia de Create React App (basado en Webpack), Vite aprovecha los módulos ES nativos del navegador, resultando en arranques de servidor instantáneos y Hot Module Replacement (HMR) extremadamente veloz, mejorando drásticamente la experiencia del desarrollador (DX).

### 2. Arquitectura y Estructura de Carpetas
El proyecto sigue una arquitectura orientada a la separación de responsabilidades (*Separation of Concerns*), dividiendo la lógica de negocio de la capa de presentación. Esto garantiza que la base de código sea mantenible, escalable y fácil de testear:
- **`src/components/`**: Contiene componentes presentacionales aislados (ej. `UserList`, `PostList`). Estos componentes se encargan puramente de la UI.
- **`src/hooks/`**: Encapsula la lógica de estado y efectos (`useUsers`, `usePosts`, `useDebounce`). Extraer esta lógica de los componentes evita el "Spaghetti Code" y facilita la reutilización.
- **`src/services/`**: Centraliza el consumo de APIs (`api.ts`). Si el endpoint cambia o se necesita añadir tokens de autenticación, el cambio se realiza en un solo lugar.
- **`src/types/`**: Define los contratos de datos (Interfaces) de TypeScript, asegurando seguridad de tipos en toda la aplicación.

### 3. Accesibilidad (a11y)
Se ha puesto un fuerte énfasis en asegurar que la aplicación sea usable por cualquier persona, incluyendo aquellas que utilizan tecnologías de asistencia:
- **Navegabilidad por Teclado:** Se implementaron controles de foco explícitos (`tabIndex={0}`) y manejadores de eventos (`onKeyDown`) en elementos interactivos personalizados (como las tarjetas de usuario) para permitir la selección usando `Enter` o `Espacio`.
- **Foco Visible:** Se configuró CSS global (`:focus-visible`) para mostrar un contorno claro cuando se navega mediante el teclado, cumpliendo con las pautas WCAG.
- **Atributos ARIA:** Se utilizaron propiedades como `aria-live="polite"` para notificar a los lectores de pantalla sobre cambios dinámicos (carga de posts), y `role="list"` / `role="listitem"` para describir la estructura de los datos.

### 4. Mejores Prácticas de SEO (Search Engine Optimization)
Aunque es una SPA (Single Page Application), se han aplicado las mejores prácticas de SEO *On-Page*:
- **Estructura Semántica:** Uso riguroso de etiquetas HTML5 (`<header>`, `<main>`, `<section>`, `<article>`) en lugar de abusar de los `<div>`. Esto permite a los rastreadores entender la jerarquía del contenido.
- **Jerarquía de Encabezados:** Existe un único `<h1>` por página, seguido secuencialmente por `<h2>` y `<h3>`, estableciendo un árbol de contenido lógico.
- **Textos Alternativos y Etiquetas:** Los inputs y regiones importantes cuentan con su respectivo `aria-label` para proveer contexto claro a los motores de indexación y lectores.

### 5. Rendimiento y UX (Experiencia de Usuario)
- **CSS Nativo Moderno:** Se evitó el uso de frameworks pesados (como Tailwind o Bootstrap). En su lugar, se empleó *Vanilla CSS* con variables CSS y CSS Grid/Flexbox, logrando un bundle final sumamente ligero y un diseño premium.
- **Gestión de Estados Asíncronos:** La experiencia no se bloquea. Se implementaron **Skeleton Loaders** (animación de esqueleto) para reducir el impacto visual del tiempo de carga, además de manejar gracefully los errores de red con opciones de reintento.
- **Debouncing en Búsqueda:** El filtrado en cliente está optimizado mediante un Custom Hook `useDebounce`, lo que previene que la UI se congele si se presiona el teclado rápidamente.

