# Reserva
- [POST api/reserva](./post-api-reserva.md)
- [GET api/reserva/:email_id](./get-api-reserva-email-id.md)
- [GET api/reserva/:id](./get-api-reserva-id.md)

# GET api/reserva/:id
Obtener una reserva específica. Puede ser reenviada por email, y se usará como email destinatario el email asociado a la reserva.

## URL del Recurso
`http://localhost:8080/api/reserva/:id`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Parametros
| Nombre | Obligatorio | Descripcion                                       |
|--------|-------------|---------------------------------------------------|
| id     | SI          | Identificador de la reserva para obtener la misma |

## Ejemplo de solicitud

`GET http://localhost:8080/api/reserva/2`

## Ejemplo de respuesta
```JSON

```