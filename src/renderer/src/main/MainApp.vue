<template>
  <div class="app-header">
    <title>ToDoApp</title>
  </div>
  <div class="app-container">
    <div class="app-aside">
      <NavButton icon="checklist"></NavButton>
      <NavButton icon="kanbanboard"></NavButton>
      <NavButton icon="ganttchart"></NavButton>
    </div>
    <div class="app-main">
      This is Main
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
  min-height: calc(100vh - 40px);
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
</style>
