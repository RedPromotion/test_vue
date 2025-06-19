<script setup lang="ts">
</script>

<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item to="/" title="Home" />
        <v-list-item to="/counter" title="Pinia 카운터" />
        <v-list-item to="/vuetify" title="Vuetify 예제" />
        <v-list-item to="/about" title="Vue 기본기" />
        <v-list-item to="/input-table" title="입력/표 예제" />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
