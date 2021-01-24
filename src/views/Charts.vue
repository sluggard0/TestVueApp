<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-app id="inspire">
        <div><Modal v-bind:charts="charts" @chartData="getChartData($event)"/></div>
        <Charts v-for="(n, index) in charts" v-bind:key="index"  v-on:deleteChart="deleteChart(index)"  v-bind:chartData="n" />
      </v-app>
    </v-layout>
  </v-container>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Modal from '@/components/Modal.vue';
import Charts from '@/components/Charts.vue';


@Component({
  components: {
   Modal, Charts
  },
  data() {
    return {
      charts: [],
      chartCount: 0,
    }
  },
  methods: {
    getChartData(value) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      if(this.chartCount < 4) {
        this.charts.push({...value});
        this.chartCount++;
      }
      //console.log(value);
    },
    deleteChart: function(index) {
      this.charts.splice(index, 1);
      this.chartCount--;
    }
  }
})

export default class Home extends Vue {}
</script>

