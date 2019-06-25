<template>
  <div>


<br>
<table style="width:100%" border="0">
  <tr>
    <th><b-alert show variant="primary">Películas más Reservadas</b-alert></th>
    <th><b-alert show variant="primary">Horario más Popular</b-alert></th>    
  </tr>
  <tr>    
    <td><apexchart width="800" type="bar" :options="options" :series="series"></apexchart></td>
    <td><apexchart width="800" type="bar" :options="options1" :series="series1"></apexchart></td>
  </tr>
</table>


    
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      url: "http://127.0.0.1:8090/api/estadistica/",
      estadisticas: {},
      options: {
        chart: {
          id: "PeliculaMasReservada"
        },
        xaxis: {
          categories: [
            "El rey leon",
            "Toy Story 2",
            "Matrix",
            "El señor de los anillos",
            "Gran Torino"
          ]
        }
      },
      series: [
        {
          name: "Reservas",
          data: [8, 5, 4, 15, 1]
        }
      ],
      options1: {
        chart: {
          id: "HorarioMasPopular"
        },
        xaxis: {
          categories: [
            "15:00",
            "20:00",
            "12:00"
          ]
        }
      },
      series1: [
        {
          name: "Reservas",
          data: [6,18,3]
        }
      ]
    };
  },
  methods: {
    // obtenerEstadisticas() {
    //   axios
    //     .get(this.url)
    //     .then(response => {
    //       this.estadisticas = response.data;
    //       this.estadisticas.PeliculaMasReservada.forEach(element => {
    //       this.optionsPeliculaMasReservada.xaxis.categories.push(element.Pelicula);
    //       this.seriesPeliculaMasReservada[0].data.push(element.CantidadReservas);
    //     });
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
  }
};
</script>
