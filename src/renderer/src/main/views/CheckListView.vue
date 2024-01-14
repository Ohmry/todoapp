<template>
  <main>
    <aside>
      <ul class="checklist-filter">
        <RouterLink to="/checklist/star">
          <CheckListFilterItem label="중요" icon="star"></CheckListFilterItem>
        </RouterLink>
        <CheckListFilterItem label="전체보기" icon="all"></CheckListFilterItem>
        <CheckListFilterItem label="오늘 할 일" icon="today"></CheckListFilterItem>
        <CheckListFilterItem label="완료됨" icon="done"></CheckListFilterItem>
      </ul>
      <Divider></Divider>
      <article class="checklist-group">
        <div>그룹</div>
      </article>
    </aside>
    <article>
      <RouterView></RouterView>
    </article>
  </main>
</template>
<script setup lang="ts">
import Divider from '@src/renderer/src/main/components/Divider.vue'
import CheckListFilterItem from '../components/CheckListFilterItem.vue'
</script>
<style scoped>
main {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
aside {
  position: relative;
  width: 229px;
  height: 100%;
  border-right: 1px solid #ccc;
}
ul.checklist-filter {
  position: relative;
  width: calc(100% - 20px);
  margin: 10px;
  box-sizing: border-box;
}
ul.checklist-filter > a {
  color: inherit;
  text-decoration: none;
}
ul.checklist-filter > a > li:not(:first-child) {
  margin: 5px 0 0 0;
}
</style>
