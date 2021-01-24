<template>
  <v-container>
    <v-card>
      <div class="highChart">
        <!--        <highcharts :constructorType="'chart'" class="hc" :options="chartOptions" ref="chart"></highcharts>-->
        <highcharts :constructorType="'stockChart'" class="stock hc" :options="chartOptions" ref="chart"></highcharts>
      </div>

      <div>
    <span class="chartType">
      <span>Тип графика:</span>
      <select v-model="chartType" class="select">
        <option v-for="type in chartTypes" v-bind:key="type">{{ type }}</option>
      </select>
    </span>
        <span class="remove"><v-btn @click="$emit('deleteChart')">x</v-btn></span>
      </div>
    </v-card>

  </v-container>
</template>

<script>

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function daysBetween(date1, date2) {
  const timeDiff = (date2 - date1);
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}

function addDay(date) {
  const result = new Date(date);
  result.setDate(result.getDate() + 1);
  return result;
}

function genData(date1, date2) {
  let days;
  let date;
  if (date2 > date1) {
    days = Math.ceil(daysBetween(date1, date2));
    date = date1;
  } else {
    days = Math.ceil(daysBetween(date2, date1));
    date = date2;
  }
  const data = [];
  for (let i = 0; i <= days ; i++) {
    data.push([Date.parse(date), random(1, 20)]);
    date = addDay(date)
  }
  return data;
}

/*function getCategories(date1, date2) {
  const data = [];
  let date;
  let days;
  if (date2 > date1) {
    days = Math.ceil(daysBetween(date1, date2));
    date = date1;
  } else {
    days = Math.ceil(daysBetween(date2, date1));
    date = date2;
  }

  //data.push(date);
  for (let i = 1; i <= days + 1; i++) {
    date = addDay(date)
    data.push(Date.parse(date)/1000);
  }
  console.log(data)
  return data;
}*/
import Highcharts from "highcharts";

export default {
  data() {
    return {
      chartTypes: ['line', 'bar'],
      chartType: 'line',
    };
  },
  props: ["chartData"],
  computed: {
    chartOptions() {
      return {
        chart: {
          zoomType: 'xy',
          type: this.chartType,
          width: 800,
          /*events: {
            render(events) {
              // eslint-disable-next-line @typescript-eslint/no-this-alias
              const chart = this;
              if (chart.customButton) {
                chart.customButton.destroy();
              }
              chart.customButton = chart.renderer
                  .button("X", 760, 10, function() { this.$emit(chart); })
                  .add();
            }
          }*/
        },
        plotOptions: {
          series: {
            showInNavigator: true
          }
        },

        navigator: {
          enabled: true
        },
        rangeSelector: {
          enabled: false,
          buttons: [],
          inputEnabled: false,
        },
        title: {
          text: this.chartData.name,
        },
        yAxis:{
          scrollbar: {
            enabled: true,
            showFull: false
          }
        },
        xAxis: {
          /*categories: getCategories(this.chartData.startDate, this.chartData.endDate),*/
          labels: {
            formatter: function () {
              return Highcharts.dateFormat('%d %b %Y %H:%M:%S', this.value)
            }
          },
          /*scrollbar: {
            enabled: true
          },*/
        },
        series: [
          {
            /* showInNavigator: true,*/
            data: genData(this.chartData.startDate, this.chartData.endDate),
          }
        ],
      }
    }
  },
};


</script>

<style scoped>
.chartType {
  width: 100%;
  min-width: 300px;
  margin-left: 10px;
}

.remove {
  margin-left: 600px;
}

</style>

