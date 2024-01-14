<template>
  <div class="app-header">
    <title>ToDoApp</title>
  </div>
  <div class="app-container">
    <div class="app-aside">
      <RouterLink to="/checklist">
        <NavButton icon="checklist"></NavButton>
      </RouterLink>
      <RouterLink to="/kanbanboard">
        <NavButton icon="kanbanboard"></NavButton>
      </RouterLink>
      <RouterLink to="/ganttchart">
        <NavButton icon="ganttchart"></NavButton>
      </RouterLink>
    </div>
    <div class="app-main">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import NavButton from './components/NavButton.vue'
</script>
<style>
div.app-header {
  position: relative;
  width: 100vw;
  height: 40px;
  background-color: #333;
  -webkit-app-region: drag;
  display: flex;
  flex-direction: row;
  align-items: center;
}
div.app-header > title {
  display: block;
  margin: 0 auto;
  color: #eee;
  font-size: 10pt;
}
div.app-container {
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
div.app-aside {
  position: relative;
  width: 50px;
  height: calc(100vh - 40px);
  background-color: #444;
  display: flex;
  flex-direction: column;
  align-items: center;
}
div.app-aside > a.router-link-active > svg > path {
  fill: #fff;
}
div.app-main {
  position: relative;
  width: calc(100vw - 50px);
  height: calc(100vh - 40px);
}
</style>
