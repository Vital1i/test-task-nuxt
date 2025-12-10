# Sage Trader — Money Transfers

A modern, responsive money transfers dashboard built with Nuxt 3, Vue 3, and Tailwind CSS.

## How to Run the Project

### Prerequisites

- Node.js 18+ (or Bun, pnpm, yarn)
- npm, pnpm, yarn, or bun package manager

### Installation

Install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Preview the production build locally:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Architecture

### Technology Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Styling**: Tailwind CSS with custom theme
- **Charts**: Chart.js
- **Language**: TypeScript
- **Routing**: Vue Router (auto-generated from pages)

### Project Structure

```
app/
├── components/          # Vue components organized by domain
│   ├── layout/         # Layout components (sidebar, header)
│   ├── transfers/      # Transfer-related components
│   └── index.ts        # Barrel export for all components
├── mocks/              # Mock data and configuration
│   ├── layout.ts       # Navigation items
│   ├── transfers.ts    # Transfer data (accounts, transfers, etc.)
│   ├── transfers-table.ts  # Table configuration
│   └── index.ts        # Barrel export for all mocks
├── pages/              # File-based routing
│   ├── index.vue       # Root redirect
│   └── transfers/      # Transfers page
├── types/              # TypeScript type definitions
│   ├── transfers.ts    # Transfer-related types
│   ├── layout.ts       # Layout-related types
│   └── index.ts        # Barrel export for all types
├── plugins/            # Nuxt plugins
│   └── theme.client.ts # Theme initialization
└── app.vue             # Root component

assets/
└── css/
    └── tailwind.css    # Tailwind CSS entry point
```

### Key Architectural Patterns

#### 1. **Component Organization**
- Components are organized by domain (layout, transfers)
- Each component folder has an `index.ts` barrel export for clean imports
- Components use TypeScript with proper type definitions

#### 2. **Type Safety**
- All types are centralized in `app/types/`
- Shared types for transfers, accounts, and layout
- Types exported via barrel exports for easy imports

#### 3. **Mock Data Management**
- Mock data separated from components
- Domain-specific mock files (transfers, layout)
- Easy to replace with API calls later

#### 4. **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Breakpoints: 600px, 905px, 1024px, 1240px, 1440px
- Sidebar toggles on mobile devices
- Table transforms to card layout on mobile

#### 5. **State Management**
- Uses Nuxt's `useState` composable for client-side state
- Theme state persisted in localStorage
- Sidebar state managed via shared state

### Component Structure

**Layout Components:**
- `SidebarNav` - Responsive sidebar navigation with mobile overlay
- `TopHeader` - Fixed header with logo and mobile menu toggle

**Transfer Components:**
- `TransfersTable` - Responsive table with card view on mobile
- `BalanceChart` - Interactive Chart.js line chart
- `ConnectedAccounts` - Wire and ACH account listings
- `AccountRow` - Individual account display component
- `StatusBadge` - Transfer status indicator
- `TransfersEmptyState` - Empty state component

### Styling

- Custom Tailwind theme with brand colors
- Dark mode support via CSS classes
- Custom utility classes in `assets/css/tailwind.css`
- Responsive breakpoints configured in `tailwind.config.js`

### Responsive Breakpoints

- **< 600px**: Mobile (cards, stacked layout)
- **600px - 904.98px**: Small tablet
- **905px - 1023.98px**: Tablet
- **1024px - 1239.98px**: Small desktop
- **1240px - 1439.98px**: Desktop
- **≥ 1440px**: Full desktop layout

### Features

- ✅ Fully responsive layout across all breakpoints
- ✅ Dark mode with system preference detection
- ✅ Mobile-friendly sidebar with overlay
- ✅ Responsive data tables with card view on mobile
- ✅ Interactive balance charts
- ✅ Type-safe TypeScript implementation
- ✅ Clean, maintainable code structure

---

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) for more information.
