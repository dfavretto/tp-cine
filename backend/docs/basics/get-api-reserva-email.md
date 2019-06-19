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
        "email": "jeremias.hsn@gmail.com",
        "cantAsientos": 4,
        "funcion": {
            "horario": 20,
            "peliculaId": 1,
            "salaId": 5
        }
    },
    {
        "email": "jeremias.hsn@gmail.com",
        "cantAsientos": 2,
        "funcion": {
            "horario": 20,
            "peliculaId": 1,
            "salaId": 5
        }
    },
    {
        "email": "jeremias.hsn@gmail.com",
        "cantAsientos": 2,
        "funcion": {
            "horario": 20,
            "peliculaId": 1,
            "salaId": 5
        }
    }
]
```