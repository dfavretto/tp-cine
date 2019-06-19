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
        "titulo": 0,
        "duracion": "Hulk",
        "clasificacion": "35"
    },
    {
        "titulo": 1,
        "duracion": "Batman",
        "clasificacion": "45"
    },
    {
        "titulo": 2,
        "duracion": "El padrino",
        "clasificacion": "50"
    },
    {
        "titulo": 3,
        "duracion": "Unknown",
        "clasificacion": "64"
    },
    {
        "titulo": 4,
        "duracion": "Pokemon",
        "clasificacion": "48"
    }
]
```