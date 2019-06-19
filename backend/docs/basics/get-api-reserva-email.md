# Reserva
- [POST api/reserva](./post-api-reserva.md)
- **[GET api/reserva/:email](./get-api-reserva-email.md)**
- [GET api/reserva/:email/:id](./get-api-reserva-email-id.md)

# GET api/reserva/:email
Obtener una lista de reservas asociadas a un email.

## URL del Recurso
`http://localhost:8080/api/reserva/:email`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre | Obligatorio | Descripcion                                                          |
|--------|-------------|----------------------------------------------------------------------|
| email  | SI          | Email identificador del usuario al cual están asociadas las reservas |

## Ejemplo de solicitud

`GET http://localhost:8080/api/reserva/jeremias.hsn@gmail.com`

## Ejemplo de respuesta
```JSON
[
    {
        "id": 2,
        "email": "jeremias.hsn@gmail.com",
        "cantAsientos": 4,
        "funcion": {
            "id": 20,
            "horario": 1,
            "peliculaId": 5
        }
    },
    {
        "id": 3,
        "email": "jeremias.hsn@gmail.com",
        "cantAsientos": 2,
        "funcion": {
            "id": 20,
            "horario": 1,
            "peliculaId": 5
        }
    },
    {
        "id": 4,
        "email": "jeremias.hsn@gmail.com",
        "cantAsientos": 2,
        "funcion": {
            "id": 20,
            "horario": 1,
            "peliculaId": 5
        }
    }
]
```