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

## Decisiones Técnicas

- **React + Vite**: Elegido por su rapidez de desarrollo y configuración out-of-the-box para TypeScript.
- **Sin dependencias externas de UI**: Se utilizó Vanilla CSS (`index.css`) con variables para mantener el control sobre el diseño sin sobrecargar el bundle, logrando una interfaz limpia y moderna.
- **Custom Hooks (`useUsers`, `usePosts`)**: Separación de la lógica de consumo de API de la capa de presentación (UI).
- **Manejo de Estados**: Componentes dedicados para `Loading`, `ErrorState` y `EmptyState`, mejorando la experiencia de usuario y proveyendo opciones de reintento (`retry`).
- **Accesibilidad**: Inclusión de HTML semántico, roles (`role="list"`, `role="alert"`), soporte para teclado en la selección de usuarios (`tabIndex`, `onKeyDown`) y `aria-live` para notificar a lectores de pantalla.
- **Búsqueda en Cliente**: Dado que la cantidad de usuarios (10) es muy pequeña, la búsqueda por nombre y correo se realiza localmente mediante un filtro en `useMemo`.

## Pendientes / Mejoras a Futuro

- Implementar un "Debounce" en la búsqueda si el número de usuarios crece significativamente o si se realiza búsqueda en el servidor.
- Agregar Skeleton Loaders en lugar del spinner para evitar "saltos" en la UI.
- Test unitarios con Vitest/Testing Library, fuera del alcance del ejercicio actual.
