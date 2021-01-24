<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand>TestApp</b-navbar-brand>
        <b-nav-item>
          <router-link to="/charts"> Графики
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/list"> Список
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>