# Pelicula
- **[GET api/pelicula](./basics/get-api-pelicula.md)**

# GET api/pelicula
Obtener la lista de peliculas disponibles para reservar.

## URL del Recurso
`http://localhost:8080/api/pelicula`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Ejemplo de solicitud

`GET http://localhost:8080/api/pelicula`

## Ejemplo de respuesta
```JSON
[
    {
        "id": 0,
        "titulo": "Hulk",
        "duracion": "35",
        "clasificacion": "M"
    },
    {
        "id": 1,
        "titulo": "Batman",
        "duracion": "45",
        "clasificacion": "T"
    },
    {
        "id": 2,
        "titulo": "El padrino",
        "duracion": "50",
        "clasificacion": "RP"
    },
    {
        "id": 3,
        "titulo": "Unknown",
        "duracion": "64",
        "clasificacion": "T"
    },
    {
        "id": 4,
        "titulo": "Pokemon",
        "duracion": "48",
        "clasificacion": "E"
    }
]
```