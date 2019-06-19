# Funcion
- [GET api/funcion](./get-api-funcion.md)
- **[GET api/funcion/:id_pelicula](./get-api-funcion-pelicula-id.md)**

# GET api/funcion/:id_pelicula
Obtener la lista de funciones disponibles para una determinada pelicula.

## URL del Recurso
`http://localhost:8080/api/funcion/:id_pelicula`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre      | Obligatorio | Descripcion                                                   |
|-------------|-------------|---------------------------------------------------------------|
| id_pelicula | SI          | Identificador de la pelicula cuyos horarios se deseen obtener |

## Ejemplo de solicitud

`GET http://localhost:8080/api/funcion/1`

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