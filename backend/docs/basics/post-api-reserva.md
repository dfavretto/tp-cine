# Reserva
- [POST api/reserva](./post-api-reserva.md)
- [GET api/reserva/:email_id](./get-api-reserva-id.md)
- [GET api/reserva/:id](./get-api-reserva-email-id.md)

# POST api/reserva
Crear una nueva reserva. Los parametros se envían como un objeto JSON en el request.

## URL del Recurso
`http://localhost:8080/api/reserva`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre       | Obligatorio | Descripcion                                                   |
|--------------|-------------|---------------------------------------------------------------|
| email        | SI          | Email identificador del usuario que está generando la reserva |
| cantAsientos | SI          | Cantidad de asientos que se están reservando                  |
| funcion      | SI          | Identificador de la funcion seleccionada                      |

## Ejemplo de solicitud

`POST http://localhost:8080/api/reserva`

## Ejemplo de respuesta
```JSON

[
    {
        "id": 1,
        "email": "ddaviddf@gmail.com",
        "cantAsientos": 3,
        "funcion": {
            "horario": 20,
            "peliculaId": 1,
            "salaId": 5
        }
    },
    {
        "id": 2,
        "email": "ddaviddf@gmail.com",
        "cantAsientos": 3,
        "funcion": {
            "horario": 20,
            "peliculaId": 1,
            "salaId": 5
        }
    },
    {
        "id": 3,
        "email": "jeremias.hsn@gmail.com",
        "cantAsientos": 4,
        "funcion": {
            "horario": 20,
            "peliculaId": 1,
            "salaId": 5
        }
    },
    {
        "id": 4,
        "email": "jeremias.hsn@gmail.com",
        "cantAsientos": 2,
        "funcion": {
            "horario": 20,
            "peliculaId": 1,
            "salaId": 5
        }
    },
    {
        "id": 5,
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