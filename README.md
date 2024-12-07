# Prueba técnica VECI

Esta aplicación pretende cumplir con los requisitos de la prueba técnica de VECI. Es una aplicación que permite gestionar cadenas de texto. Se entrega en dos versiones:

- La principal, desarrollada en React 18
- Una en JavaScript Vanilla que se encuentra en la carpeta "vanillaJSVersion", ubicada en la raíz de este repositorio.

## Observaciones

- La estructura de archivos puede parecer redundante, sin embargo, está orientada a facilitar la escalabilidad del proyecto. Los componentes están diseñados utilizando el principio de Atomic Design (atomos, moléculas, organismos, templates y páginas). La intención es que cada componente acabe conteniendo su propia lógica.
- Se ha utilizado Vite como compilador del proyecto.
- Se incluyen tests iniciales para algunos componentes, como base para ser ampliados.
- Se han utilizado custom hooks para encapsular la lógica y mantenerla separada y reutilizable, así como para facilitar su mantenimiento.
- Se ha utilizado el hook useReducer para gestión de estados complejos.
- Como punto extra, se ha añadido persistencia a los datos mediante el uso de localStorage, para asegurar que los datos se mantienen al recargar la página o cerrar el navegador.

## Contenido

### Instalación y despliegue (React)

#### Instalación

1. Clonar el repositorio

   ```bash
   git clone https://github.com/PCollG/veci-technical-test
   ```

2. Navegar al directorio del proyecto:

   ```bash
   cd veci-technical-test
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

#### Ejecutar el proyecto

```bash
npm run dev
```

#### Construir para Producción

Para crear una versión lista para producción:

```bash
npm run build
```

#### Ejecutar Pruebas

Para ejecutar las pruebas:

```bash
npm run test
```

Para generar reportes de cobertura de pruebas:

```bash
npm run coverage
```

### Ejecución del proyecto Vanilla JavaScript

Abrir el archivo `vanillaJSVersion/index.html` con un navegador.
