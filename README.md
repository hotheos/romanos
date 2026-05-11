# Romanos 1:1-17 — Estudio exegético con paralelos bíblicos

Estudio bíblico de **Romanos 1:1-17** con versículos paralelos desplegables del Antiguo y Nuevo Testamento. Diseñado como herramienta de apoyo para predicación y estudio personal.

## 🌐 Ver en línea

Visita el sitio publicado en GitHub Pages:

👉 **[https://hotheos.github.io/romanos/](https://hotheos.github.io/romanos/)**

## 📖 Descripción

Esta página web estática presenta un análisis exegético de Romanos 1:1-17, organizado en bloques que contienen:

- El texto del versículo según la **Reina-Valera 1960**.
- Versículos paralelos del Antiguo y Nuevo Testamento, desplegables al hacer clic.
- Interfaz limpia, responsiva, con modo claro y oscuro.

No requiere servidor: funciona abriendo `index.html` directamente en cualquier navegador.

## 🛠️ Cómo clonar y editar localmente

```bash
# Clonar el repositorio
git clone https://github.com/hotheos/romanos.git

# Entrar al directorio
cd romanos

# Abrir en el navegador
open index.html    # macOS
xdg-open index.html  # Linux
start index.html     # Windows
```

### Estructura de archivos

```
├── index.html    # Página principal con todo el contenido
├── styles.css    # Hoja de estilos (modo claro/oscuro)
├── script.js     # Lógica de interactividad
├── README.md     # Este archivo
└── LICENSE       # Licencia MIT
```

### Cómo agregar bloques

Los bloques de versículos están marcados con comentarios HTML claros:

```html
<!-- INICIO BLOQUE N -->
...
<!-- FIN BLOQUE N -->
```

Para agregar un nuevo bloque con paralelos, copia la estructura de un bloque existente y actualiza:

1. El `id` del bloque (`bloque-N`)
2. El `aria-controls` del botón y el `id` del panel (`paralelos-N`)
3. El texto del versículo y los paralelos

## 📜 Texto bíblico

Las citas bíblicas utilizan la traducción **Reina-Valera 1960** (RV60), que se encuentra en **dominio público** en la mayoría de jurisdicciones. Esta traducción fue publicada por las Sociedades Bíblicas Unidas.

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

Eres libre de usar, modificar y distribuir este material, con la única condición de mantener la atribución original.

## 🤝 Cómo contribuir

¡Las contribuciones son bienvenidas! Si encuentras errores en las citas, quieres sugerir paralelos adicionales, o mejorar el diseño:

1. Haz un **fork** del repositorio.
2. Crea una rama para tu cambio: `git checkout -b mejora/descripcion-breve`.
3. Realiza tus cambios y haz **commit**: `git commit -m "Agrega paralelo a Romanos 1:5"`.
4. Envía un **pull request** describiendo tu propuesta.

### Tipos de contribución que buscamos

- 🔍 Correcciones de citas bíblicas
- ➕ Nuevos versículos paralelos con su referencia
- 🎨 Mejoras de diseño y accesibilidad
- 🌍 Traducciones a otros idiomas

---

Hecho con ❤️ para el estudio de la Palabra.
