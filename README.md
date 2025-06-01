# 🛍️ Product Catalog App

Simple two page product catalog application made from the Vite Tanstack-query starter template. Root page show the product listing wth hero section and navigation bar. The application was made according to the assignment for React Engineer.

---

## 🚀 Features

- 📄 Product listing page with responsive layout and custom hero section
- 🔍 Product detail view with dynamic routing with **Tanstack Router**
- 🔄 Data fetching via **TanStack Query**
- ⚠️ Error and loading state handling
- 🎨 Styling with **Chakra UI**, mobile-first responsive
- 💡 Modular, reusable, and type-safe codebase

---

## 📦 Tech Stack

- **React** + **TypeScript**
- **TanStack Query (v5)** – Data fetching and caching
- **Chakra UI** – UI components and styling
- **TanStack Router / React Router** – Client-side routing
- **Mock API** – [https://fakeapi.platzi.com](https://fakeapi.platzi.com) for products
- **MSW** - For mocking the api for local development to avoid the mock API issues/unnecessary load on the free API

---

## 🧱 Project Structure

```bash
src/
├── assets/          # Images
├── components/      # Shared UI, layout and products components
├── pages/           # Route-level components (Product page in this case)
├── queryOptions/    # Tanstack Query options for handling the fetching of the data
├── types/           # Shared TypeScript types
├── mocks/           # MSW handlers for the mocking of APIs in the browser
├── App.tsx          # App layout and router integration
└── main.tsx         # React root setup, providers
```

---

## ▶️ Getting Started

```bash
# 1. Install dependencies
npm install / yarn install

# 2. Start the dev server
npm run dev / yarn dev

# 3. Visit
http://localhost:3000/

# 4. Enable or disable the MSW mocking of the API
Locate the enableMocking() in the main.tsx to enable or disable. Please beware, when enabled, that the same product will be showed on the Product Page!
```

---

## 📸 Screenshots

Will be send separately

---

## ❗ Error Handling

- API errors are caught and displayed with a fallback UI (`Alert` from Chakra).
- Network/loading states use mainly skeletons.

---

## 🧠 Design Decisions

- **TanStack Query** is used for declarative fetching and caching.
- **Tanstack Router** used for dynamic routing with searchParams to render product page.
- Data types are derived from the API response shape and kept in `/types`.
- Components are colocated or grouped by domain, not by atomic design.
- Minimalistic UI with the help of **Chakra UI**

---

## ✨ Nice to do (if more time)

- 🔁 Pagination or infinite scroll on the product list
- 🔍 Search and filtering capabilities with the side panel or drawer
- ❤️ Wishlist/favorites functionality
- 📦 State management with Zustand or Jotai for global cart/wishlist
- 🚥 Add route transitions (e.g., framer-motion)
- 🧪 Integration tests for bigger components (React Testing Library) or unit for helper functions
- 📤 Finish gallery with the similar product from the category or top products + additional TansackQuery.
- Dockerization and .env files would be added.
- Switch Carousel for the single product photo in the product detail.
- Add 404 design/UI and footer
- Optimize image usage with srcset and sizes attributes. Also use something image optimizer, when building the app.

