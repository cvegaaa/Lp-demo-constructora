# Constructora & Remodelaciones — Plantilla Demo

Plantilla de landing page genérica para el sector **contratistas / remodelación**. Lista para clonar, personalizar y desplegar para un cliente real de este mismo rubro.

## Qué es

Una landing page de una sola vista, responsive y autocontenida, pensada para un negocio de remodelaciones residenciales y comerciales. Incluye:

- Hero con carrusel de imágenes y efecto zoom
- Sección de problema/oportunidad y propuesta de valor
- Grid de servicios (cocinas, baños, obra civil, pintura, comercial, consultoría)
- Sección de proceso de trabajo en 4 pasos
- Testimonios de ejemplo (marcados como placeholder)
- CTA final con datos de contacto y enlace a WhatsApp
- Footer con crédito a Vegora

## Cómo personalizarla para un cliente real

Toda la información del negocio está centralizada en **un solo archivo**:

```
src/data/siteConfig.ts
```

Edita ese archivo para reemplazar:

- `nombreGenerico` → nombre real del negocio
- `eslogan` y `propuestaValor` → mensajes del cliente
- `servicios` → servicios reales, con descripciones e imágenes
- `testimonios` → reseñas reales (borra el campo `esEjemplo` o déjalo en `false`)
- `datosContacto` → teléfono, WhatsApp, dirección y horario reales
- `imagenesHero` → imágenes de proyectos reales del cliente

Las imágenes se cargan por URL. Puedes usar Pexels (gratuitas) o subir las del cliente a un servicio de hosting de imágenes y pegar los enlaces.

## Cómo desplegarla

1. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. **Previsualizar en local:**

   ```bash
   npm run dev
   ```

3. **Generar la versión de producción:**

   ```bash
   npm run build
   ```

   Esto crea la carpeta `dist/` con los archivos estáticos listos para servir.

4. **Desplegar:**

   - Sube el contenido de `dist/` a cualquier hosting estático: Vercel, Netlify, Cloudflare Pages, GitHub Pages, o el panel de hosting del cliente.
   - En Vercel/Netlify: conecta el repositorio, framework "Vite", comando de build `npm run build`, carpeta de salida `dist`.

## Stack técnico

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide React (iconografía)

## Crédito

Demo diseñada por [Vegora](https://www.vegora.com.co).
