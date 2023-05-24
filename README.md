# Marvel APP

Este es un proyecto [Next.js](https://nextjs.org/) creado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

Clonar el repositorio y correr el siguiente comando:

```bash
yarn install
```

Debe agregarse un .env.local dentro del raiz del proyecto con los siguientes valores:
```.env
NEXT_PUBLIC_API_KEY_MARVEL: Debe ser la apiKey pública generada en [Marvel API](https://developer.marvel.com/)
NEXT_PUBLIC_API_HASH_KEY_MARVEL: Un resumen md5 del parámetro ts, su clave privada y su clave pública
NEXT_PUBLIC_MARVEL_API_TS: Esta es una marca de tiempo que debe utilizarse al momento de generar el hash
```
Para mas información consultar la [documentación de autorización](https://developer.marvel.com/documentation/authorization)

## Usage

Iniciar el servidor de desarrollo:

```bash
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador para ver los resultados.

## Features

- Búsqueda: Búsqueda de personajes por nombre
- Pagination: Paginado del resultado de los personajes obtenidos

## Technologies Used

- Next.js 13
- Marvel API
- Tailwind CSS
- MerakiUI Components
