# Funcion
- [GET api/funcion/:pelicula_id](./basics/get-api-funcion-pelicula-id.md)

# GET api/funcion/:pelicula_id
Obtener la lista de funciones disponibles para una determinada pelicula.

## URL del Recurso
`http://localhost:8080/api/funcion/:pelicula_id`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre      | Obligatorio | Descripcion                                                   |
|-------------|-------------|---------------------------------------------------------------|
| pelicula_id | SI          | Identificador de la pelicula cuyos horarios se deseen obtener |

## Ejemplo de solicitud

`GET http://localhost:8080/api/funcion/Pelicula1`

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