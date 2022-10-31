# Dog Backend

You should implement a JSON based RESTful application that works together with the existing frontend to display a gallery of dogs.
The application will generate it's own required DB schema on startup.

The application should listen on port `5000` once its completed booting.

## Routes

### `GET /api/health`

A health check endpoint that returns `200 OK` when the app is up, healthy and able to connect to the database

### `GET /api/dogs`

Returns an array of dog media items that have been fetched, e.g.

```
[
  {
    "id": "a811e354-a522-4dd5-b781-02466cf6f194",
    "url": "https://random.dog/5f094a88-0123-4247-9e2d-18c4465e7378.webm",
    "created": "2020-08-24T02:53:24.133Z"
  },
  {
    "id": "823b20b4-cc95-4188-a82b-978070d34216",
    "url": "https://random.dog/175c551f-d957-4be4-a15b-79dc3f0323fe.jpg",
    "created": "2020-08-24T02:53:29.105Z"
  }
]
```

### `PUT /api/dogs`

Removes the 8 oldest dog media items and replaces them with new ones. Returns a 204.

## Getting Started

1. `docker-compose up -d postgres` to bring up the database

## Getting Started Backend

1. `cd backend`
2. `npm i`
3. Rename `.env.template` --> `.env`
4. `npm urn start:local`
