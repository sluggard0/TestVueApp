<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-sheet rounded="lg" class="grey lighten-3">
          <v-list color="transparent">
            <v-list-item-group v-model="model">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content>
                  <v-list-item-title
                      v-text='item.title.length < 20 ? item.title : item.title.substring(0,20) + "..." '>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet rounded="lg" class="grey lighten-3">
          <v-container>
            <v-row>
              <v-col cols="auto">
                <v-img
                    height="200"
                    width="200"
                    :src="items[model]['url']"
                ></v-img>
              </v-col>
              <v-col cols="auto">
                <p>{{ items[model]['title'] }}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>

import axios from 'axios';
export default {
  data() {
    return {
      model: 0,
    };
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  mounted() {
    this.$store.dispatch("getData");
  }


};
</script>
<style>
.all {
  position: relative;
  height: 1000px;
  width: 100%;
}

.content {
  display: inline-block;
  height: 700px;
  width: 100%;
}

.left {
  display: inline-block;
  float: left;
  width: 30%;
  height: 100%;
}

.right {
  display: inline-block;
  float: left;
  width: 70%;
  height: 100%;
}

</style>
