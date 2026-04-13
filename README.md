# 🍽️ Vue Food Product Showcase

![Vue](https://img.shields.io/badge/Vue-3-42b883)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple)
![Vuetify](https://img.shields.io/badge/Vuetify-UI-blue)
![Vue Router](https://img.shields.io/badge/Vue_Router-4-35495e)
![Vuex](https://img.shields.io/badge/Vuex-4-42b883)
![Vue I18n](https://img.shields.io/badge/Vue_I18n-Internationalization-blue)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

Aplicación SPA desarrollada con **Vue 3** que funciona como un catálogo interactivo de productos gastronómicos. La aplicación consume datos desde una API REST pública, permite filtrar por categorías, visualizar detalles individuales, gestionar favoritos y cambiar entre idiomas.

---

## 🌐 Demo en vivo

👉 https://cristianhernandez-dev.github.io/vue-food-product-showcase/#/

---

## 📸 Vista previa

### Vista principal

![Vista principal](./public/images/home.png)

### Vista detalle

![Vista detalle](./public/images/detalle.png)

### Cambio de idioma

![Idioma ES](./public/images/idioma_es.png)
![Idioma EN](./public/images/idioma_en.png)

### Favoritos

![Favoritos](./public/images/favoritos.png)

---

## 🚀 Características principales

* 📋 Catálogo dinámico de productos
* 🔍 Filtrado por categorías
* 📄 Vista de detalle por producto
* ❤️ Sistema de favoritos persistido en `localStorage`
* 🌐 Internacionalización (ES / EN)
* 📱 Diseño responsive (mobile-first)
* 🍔 Menú hamburguesa en dispositivos móviles
* ⚡ Navegación SPA con Vue Router
* ⚙️ Manejo de estados (carga, error, vacío)

---

## 🛠️ Tecnologías utilizadas

* Vue 3
* Vite
* Vuetify
* Vue Router
* Vuex 4
* Vue I18n
* Axios

---

## 🔌 API utilizada

La aplicación consume datos desde la API pública **TheMealDB**:

* `/search.php?s=` → listado de productos
* `/list.php?c=list` → categorías
* `/lookup.php?i={id}` → detalle

---

## 🧱 Arquitectura del proyecto

```bash
src/
├── components/       # Componentes reutilizables
├── views/            # Vistas principales
├── router/           # Configuración de rutas
├── store/            # Estado global (Vuex)
├── services/         # Consumo de API
├── i18n.js           # Configuración de idiomas
└── main.js           # Punto de entrada
```

### 🧠 Enfoque aplicado

* Separación de responsabilidades (UI / lógica / datos)
* Componentes reutilizables
* Estado centralizado con Vuex
* Navegación controlada con Vue Router

---

## ⚙️ Instalación y ejecución

```bash
git clone https://github.com/cristianhernandez-dev/vue-food-product-showcase.git
cd vue-food-product-showcase
npm install
npm run dev
```

---

## 🏗️ Build para producción

```bash
npm run build
```

---

## 🚀 Deploy en GitHub Pages

```bash
npm run build
git add -f dist
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

---

## 🧠 Decisiones técnicas relevantes

* Uso de `createWebHashHistory()` para evitar problemas de rutas en GitHub Pages.
* Implementación de Vuex para manejo de estado global.
* Uso de Vuetify para consistencia visual y rapidez de desarrollo.
* Arquitectura basada en componentes reutilizables.
* Diseño mobile-first.

---

## 📚 Aprendizajes clave

* Arquitectura SPA con Vue
* Gestión de estado global
* Internacionalización
* Resolución de problemas en producción (deploy y rutas)
* Diseño responsive moderno

---

## 📌 Estado del proyecto

* ✅ Proyecto finalizado
* 🚀 Desplegado en producción
* 📱 Optimizado para dispositivos móviles

---

## 👨‍💻 Autor

- Cristián Hernández
- Frontend Developer en formación 🚀
- GitHub: https://github.com/cristianhernandez-dev
