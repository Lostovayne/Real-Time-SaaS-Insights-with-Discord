# Ping-Panda 🐼

Una aplicación web moderna construida con Next.js y un conjunto robusto de tecnologías para ofrecer una experiencia de usuario excepcional.

## 🚀 Características

- Autenticación segura con Clerk
- Base de datos PostgreSQL con Prisma ORM
- Caché con Redis (Upstash)
- UI moderna y responsive con Tailwind CSS
- Tipado seguro con TypeScript
- API endpoints con Hono
- Despliegue en Cloudflare Workers

## 🛠️ Tecnologías

- **Frontend:**
  - Next.js 14
  - React 18
  - Tailwind CSS
  - TypeScript
  - Tanstack React Query
  - Lucide React (iconos)

- **Backend:**
  - Prisma ORM
  - PostgreSQL (NeonDB)
  - Redis (Upstash)
  - Hono (API)
  - Cloudflare Workers

- **Autenticación:**
  - Clerk

- **Herramientas de Desarrollo:**
  - ESLint
  - Prettier
  - TypeScript
  - Wrangler (Cloudflare)

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (gestor de paquetes)
- Una cuenta en Clerk para autenticación
- Una base de datos PostgreSQL (recomendamos NeonDB)
- Una instancia de Redis (recomendamos Upstash)

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/ping-panda.git
cd ping-panda
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Edita el archivo `.env` con tus credenciales:
```env
DATABASE_URL="postgresql://user:password@host:port/database"
CLERK_SECRET_KEY=tu_clerk_secret_key
CLERK_PUBLISHABLE_KEY=tu_clerk_publishable_key
UPSTASH_REDIS_URL=tu_redis_url
UPSTASH_REDIS_TOKEN=tu_redis_token
```

5. Ejecuta las migraciones de la base de datos:
```bash
pnpm prisma migrate dev
```

## 🚀 Uso

### Desarrollo

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

### Producción

```bash
pnpm build
pnpm start
```

### Despliegue

```bash
pnpm deploy
```

## 📚 Documentación de API

### Endpoints

- `GET /api/posts` - Obtiene todos los posts
- `POST /api/posts` - Crea un nuevo post
- `GET /api/posts/:id` - Obtiene un post específico
- `PUT /api/posts/:id` - Actualiza un post
- `DELETE /api/posts/:id` - Elimina un post

## 📁 Estructura del Proyecto

```
ping-panda/
├── src/
│   ├── app/           # Rutas y páginas de Next.js
│   ├── components/    # Componentes React reutilizables
│   ├── lib/          # Utilidades y configuraciones
│   └── styles/       # Estilos globales
├── prisma/
│   └── schema.prisma # Esquema de la base de datos
├── public/           # Archivos estáticos
└── ...
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Autores

- Tu Nombre - [@tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- Next.js Team
- Vercel
- Cloudflare
- Y todos los contribuidores de las dependencias utilizadas

---

¿Encontraste un bug? ¿Tienes alguna sugerencia? Por favor, abre un issue [aquí](https://github.com/tu-usuario/ping-panda/issues).