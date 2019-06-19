# Estadistica
- **[GET api/estadistica](./basics/get-api-estadistica.md)**

# GET api/estadistica
Obtener todas las estadisticas generadas a partir de las reservas registradas.

## URL del Recurso
`http://localhost:8080/api/estadistica`

## Informacion del Recurso
|                         |       |
|-------------------------|-------|
| Formato de respuesta    | JSON  |
| Requiere autenticacion? | No    |

## Ejemplo de solicitud

`GET http://localhost:8080/api/estadistica`

## Ejemplo de respuesta
```JSON
{
    "PeliculaMasReservada": [
        {
            "Pelicula": "El rey leon",
            "CantidadReservas": 8
        },
        {
            "Pelicula": "Toy Story 2",
            "CantidadReservas": 5
        },
        {
            "Pelicula": "Matrix",
            "CantidadReservas": 4
        },
        {
            "Pelicula": "El señor de los anillos",
            "CantidadReservas": 15
        },
        {
            "Pelicula": "Gran Torino",
            "CantidadReservas": 1
        }
    ],
    "HorarioMasPopular": [
        {
            "Horario": "15:00",
            "CantidadReservas": 6
        },
        {
            "Horario": "20:00",
            "CantidadReservas": 18
        },
        {
            "Horario": "12:00",
            "CantidadReservas": 3
        }
    ]
}
```