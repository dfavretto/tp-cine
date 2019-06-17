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
      options: {
        chart: {
          id: "vuechart-example"
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
          id: "vuechart-example2"
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
  }
};
</script>
