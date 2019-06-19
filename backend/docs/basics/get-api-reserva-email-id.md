# Reserva
- [POST api/reserva](./post-api-reserva.md)
- [GET api/reserva/:email](./get-api-reserva-email.md)
- **[GET api/reserva/:email/:id](./get-api-reserva-email-id.md)**

# GET api/reserva/:email/:id
Obtener una reserva específica. Puede ser reenviada por email, y se usará como email destinatario el email asociado a la reserva.

## URL del Recurso
`http://localhost:8080/api/reserva/:email/:id`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre      | Obligatorio | Descripcion                                                 |
|-------------|-------------|-------------------------------------------------------------|
| email       | SI          | Identificador del dueño de la reserva para obtener la misma |
| id          | SI          | Identificador de la reserva para obtener la misma           |
| enviarEmail | NO          | Indica si se debe enviar la reserva por email               |

## Ejemplo de solicitud

`GET http://localhost:8080/api/reserva/jeremias.hsn@gmail.com/4?enviarEmail=true`

## Ejemplo de respuesta
```JSON
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
```