<!--
<template>
  <div id="app">
    <div id="nav">
      <topnavbar/>
    </div>

    <router-view/>
  </div>
</template>

<script lang="ts">
import topnavbar from '@/components/NavBar.vue'

export default {
  components: {
    topnavbar
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>-->
<!--
<template>
  <div id="app">
  <v-app>
    <v-toolbar app>
<span class="hidden-sm-and-up">
    <v-toolbar-side-icon @click="sidebar = !sidebar">
    </v-toolbar-side-icon>
    </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems"
               :key="item.title"
               :to="item.path">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
  </div>
</template>-->

<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
<span class="hidden-sm-and-up">
    </span>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            {{ appTitle }}
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text v-for="item in menuItems"
                 :key="item.title"
                 :to="item.path">
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      appTitle: 'TestApp',
      sidebar: false,
      menuItems: [
        {title: 'Графики', path: '/charts'},
        {title: 'Список', path: '/list'},
      ],
      dialog: false,
      chartCount: 0,
    }
  },
};
</script>

