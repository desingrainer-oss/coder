# Coders Solution — Sitio web

Sitio corporativo de **Coders Solution** (Partner Salesforce): home, servicios, ecosistema Salesforce, casos de éxito, blog y panel CMS.

Stack: **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, **Framer Motion**.

## Requisitos

- Node.js **20.9+** (ver `.nvmrc`)
- npm 10+

## Desarrollo local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno

| Variable | Descripción | Obligatoria |
|----------|-------------|-------------|
| `ADMIN_PASSWORD` | Contraseña del panel `/admin` | Recomendada en producción |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (sitemap, SEO, robots) | Recomendada |

Copia `.env.example` a `.env.local` y ajusta los valores.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir build local |
| `npm run lint` | ESLint |

## Subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit: Coders Solution website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/coders-solution.git
git push -u origin main
```

> No subas `.env.local` ni secretos. Solo `.env.example` va al repositorio.

## Despliegue en Netlify

### Opción A — Desde GitHub (recomendada)

1. Sube el repo a GitHub.
2. En [Netlify](https://app.netlify.com): **Add new site → Import an existing project**.
3. Conecta el repositorio.
4. Netlify detecta `netlify.toml` automáticamente:
   - **Build command:** `npm run build`
   - **Plugin:** `@netlify/plugin-nextjs`
   - **Node:** 20
5. En **Site settings → Environment variables**, añade:
   - `ADMIN_PASSWORD` — contraseña segura para `/admin`
   - `NEXT_PUBLIC_SITE_URL` — p. ej. `https://tudominio.com`
6. Deploy.

### Opción B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Panel CMS en Netlify

El blog usa `content/blog/posts.json` en el filesystem. En Netlify las **API routes son serverless** y los cambios del CMS **no persisten** entre despliegues (el disco es efímero).

- **Lectura del blog:** funciona con normalidad.
- **Crear/editar posts en `/admin`:** los cambios se pierden al redeploy. Para CMS en producción, migra a Supabase, Contentful, o commitea `posts.json` desde local.

## Estructura principal

```
app/           Páginas y rutas (App Router)
components/    UI reutilizable
content/blog/  Posts del blog (JSON)
data/          Datos estáticos (servicios, productos, casos)
lib/           Utilidades (blog, auth)
public/        Assets estáticos
netlify.toml   Configuración de despliegue Netlify
```

## Rutas destacadas

- `/` — Home
- `/consulting`, `/implementation`, `/managed` — Servicios
- `/solutions/[slug]` — Productos Salesforce
- `/casos-de-exito` — Casos de éxito
- `/blog` — Blog
- `/admin` — Panel CMS

## Licencia

Proyecto privado — Coders Solution.
