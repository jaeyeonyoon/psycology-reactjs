# Docker
## 1. Build Docker Image

Building Docker Image (Production)

`docker build -t psycology-reactjs -f Dockerfile .`

Building Docker Image (Dev)

`docker build -t psycology-reactjs-dev -f Dockerfile.dev .`

## 2. Run Docker

Running Docker Image (Production)

`docker run -p 3000:3000 psycology-reactjs`

Open `http://localhost:3000`

Running Docker Image (Dev)

`docker run -p 5173:5173 psycology-reactjs-dev`

Open `http://localhost:5173`

## 2. Run Docker via compose

Start all services (foreground mode)
`docker compose up`

Start all services in detached mode (background)
`docker compose up -d`

Start only the dev service
`docker compose up dev --watch`

Start only the prod service
`docker compose up prod`

Stop services
`docker compose down`
