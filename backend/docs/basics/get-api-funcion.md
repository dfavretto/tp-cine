# Funcion
- **[GET api/funcion](./get-api-funcion.md)**
- [GET api/funcion/:id_pelicula](./get-api-funcion-pelicula-id.md)

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
        "horario": "12:00",
        "peliculaId": "Pelicula1",
        "salaId": "2"
    },
    {
        "horario": "14:00",
        "peliculaId": "Pelicula1",
        "salaId": "2"
    },
    {
        "horario": "16:00",
        "peliculaId": "Pelicula1",
        "salaId": "2"
    },
    {
        "horario": "18:00",
        "peliculaId": "Pelicula1",
        "salaId": "2"
    },
    {
        "horario": "20:00",
        "peliculaId": "Pelicula1",
        "salaId": "2"
    }
]

```