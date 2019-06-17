# Reserva
- [POST api/reserva](./post-api-reserva.md)
- [GET api/reserva/:email_id](./get-api-reserva-email-id.md)
- [GET api/reserva/:id](./get-api-reserva-id.md)

# GET api/reserva/:email_id
Obtener una lista de reservas asociadas a un email.

## URL del Recurso
`http://localhost:8080/api/reserva/:email_id`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre       | Obligatorio | Descripcion                                                          |
|--------------|-------------|----------------------------------------------------------------------|
| email_id     | SI          | Email identificador del usuario al cual están asociadas las reservas |

## Ejemplo de solicitud

`GET http://localhost:8080/api/reserva/jeremias.hsn@gmail.com`

## Ejemplo de respuesta
```JSON

```