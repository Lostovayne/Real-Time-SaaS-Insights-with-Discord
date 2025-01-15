# PingPanda - SaaS Insights Delivered to Discord

PingPanda is a real-time SaaS monitoring tool that sends instant notifications directly to your Discord server. Track sales, new users, and other critical events with ease.

![PingPanda Preview](/public/imag.png)

## ✨ Features

- 🔔 Real-time Discord alerts for critical events
- 💰 Buy once, use forever pricing model
- 📊 Track sales, new users, and any custom events
- 🎨 Beautiful, modern UI with Discord-like interface
- 🔐 Secure authentication with Clerk
- ⚡ Built with performance in mind

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Authentication:** Clerk
- **Database:** NeonDB (Postgres) with Prisma ORM
- **Caching:** Upstash Redis
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Deployment:** Cloudflare Workers
- **API Layer:** Hono
- **Type Safety:** TypeScript
- **Data Validation:** Zod
- **State Management:** TanStack Query

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm/npm/yarn
- A Discord server where you have admin privileges

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ping-panda.git
cd ping-panda
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Generate Prisma client:

```bash
pnpm postinstall
```

5. Run the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Development with Worker

To develop with Cloudflare Worker:

```bash
pnpm dev:worker
```

## 📦 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm deploy` - Deploy to production
- `pnpm dev:worker` - Start worker development server
- `pnpm preview:worker` - Preview worker
- `pnpm deploy:worker` - Deploy worker

## 🎨 UI Components

PingPanda features a custom-built Discord-like interface with:

- Real-time message updates
- Animated notifications
- Responsive design
- Dark mode support
- Custom Discord message components

## 📁 Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── (landing)/     # Landing page routes
│   └── layout.tsx     # Root layout
├── components/        # React components
├── lib/              # Utility libraries
├── server/           # Server-side code
└── utils.ts          # Utility functions
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database (NeonDB)
DATABASE_URL=

# Redis (Upstash)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Discord
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
DISCORD_WEBHOOK_URL=
```

## 🎨 Tailwind Configuration

### Custom Colors

```typescript
colors: {
  brand: {
    "25": "#F8F9FD",
    "50": "#F0F4FA",
    "100": "#E1E9F6",
    "200": "#C3D3ED",
    "300": "#A5BDE4",
    "400": "#87A7DB",
    "500": "#6991D2",
    "600": "#4B76C9",
    "700": "#3659B1",
    "800": "#284189",
    "900": "#1B2A61",
    "950": "#111A3E",
  },
  discord: {
    background: "#36393f",
    "brand-color": "#5865f2",
    "bar-color": "#202225",
    gray: "#36393f",
    text: "#dcddde",
    timestamp: "#72767d",
  }
}
```

### Font Configuration

```typescript
fontFamily: {
  heading: ["var(--font-heading)", ...fontFamily.sans],
  sans: ["var(--font-sans)", ...fontFamily.sans],
}
```

## 🔄 API Endpoints

### Authentication

- `POST /api/auth/signin` - Sign in user
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signout` - Sign out user

### Webhooks

- `POST /api/webhook/discord` - Send Discord notification
- `GET /api/webhook/config` - Get webhook configuration

### User Management

- `GET /api/user/me` - Get current user
- `PUT /api/user/settings` - Update user settings

### Events

- `POST /api/events` - Create new event
- `GET /api/events` - List all events
- `GET /api/events/:id` - Get specific event
- `DELETE /api/events/:id` - Delete event

## 📄 License

[MIT License](LICENSE)

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
