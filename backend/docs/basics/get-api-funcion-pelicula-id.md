# Funcion
- [GET api/funcion](./get-api-funcion.md)
- **[GET api/funcion/:pelicula_id](./get-api-funcion-pelicula-id.md)**

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

`GET http://localhost:8080/api/funcion/Batman`

## Ejemplo de respuesta
```JSON
[
    {
        "id": 1,
        "horario": "14:00",
        "peliculaId": "Batman",
        "salaId": "2"
    },
    {
        "id": 3,
        "horario": "18:00",
        "peliculaId": "Batman",
        "salaId": "2"
    }
]
```