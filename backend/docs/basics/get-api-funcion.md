# Funcion
- **[GET api/funcion](./get-api-funcion.md)**
- [GET api/funcion/:pelicula_id](./get-api-funcion-pelicula-id.md)

# GET api/funcion
Obtener toda la lista de funciones.

## URL del Recurso
`http://localhost:8080/api/funcion`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Ejemplo de solicitud

`GET http://localhost:8080/api/funcion`

## Ejemplo de respuesta
```JSON
[
    {
        "id": 0,
        "horario": "12:00",
        "peliculaId": "Hulk",
        "salaId": "2"
    },
    {
        "id": 1,
        "horario": "14:00",
        "peliculaId": "Batman",
        "salaId": "2"
    },
    {
        "id": 2,
        "horario": "16:00",
        "peliculaId": "Pokemon",
        "salaId": "3"
    },
    {
        "id": 3,
        "horario": "18:00",
        "peliculaId": "Batman",
        "salaId": "2"
    },
    {
        "id": 4,
        "horario": "20:00",
        "peliculaId": "Pokemon",
        "salaId": "1"
    }
]
```