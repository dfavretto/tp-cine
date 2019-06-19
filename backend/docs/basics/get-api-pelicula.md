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
        "titulo": "Pelicula1",
        "duracion": "35",
        "clasificacion": "M"
    },
    {
        "titulo": "Pelicula2",
        "duracion": "45",
        "clasificacion": "T"
    },
    {
        "titulo": "Pelicula3",
        "duracion": "50",
        "clasificacion": "RP"
    },
    {
        "titulo": "Pelicula4",
        "duracion": "64",
        "clasificacion": "T"
    },
    {
        "titulo": "Pelicula5",
        "duracion": "48",
        "clasificacion": "E"
    }
]

```