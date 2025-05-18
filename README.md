# Custom React + Express Boilerplate

A minimal and modern full-stack boilerplate featuring:

- **React 18** with **React Router v7**
- **Express 5** backend server
- **Vite** as frontend build tool and dev server
- File-based frontend routing (optional, extendable)
- Simple production build and server static file serving
- Proxy support for API requests during development
- Concurrent dev mode for frontend + backend

---

## Features

- **React Router DOM v7** for SPA routing
- Express backend API server with JSON support
- Static file serving from `/client/dist` in production
- Dev proxy setup to forward `/api` requests to Express server
- Nodemon for backend auto-restart on file changes
- Concurrently to run frontend and backend dev servers simultaneously
- Vite configured with React plugin and path aliasing

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

Clone the repo:

```bash
git clone https://github.com/nahidprawez/mernboilerplate.git
cd mernboilerplate
npm install
