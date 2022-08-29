<script setup lang="ts">
import Input from "./Input.vue";
import Menu from "./Icons/Menu.vue";
</script>

<template>
<header>
  <div>
    <a href="/"><img class="logo" src="/vite.svg" alt="App logo"></a>
  </div>
  <div class="search">
    <Input type="search" />
  </div>
  <div>
    <img class="user__photo" src="/nopic.png" alt="Profile photo">
    <Menu />
  </div>
</header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  width: 100%;
  height: 66px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.user__photo {
  border-radius: 100%;
  width: 35px;
}

.logo {
  width: 24px;
}

.search {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

header > div:first-child,
header > div:last-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

header > div:first-child a {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  cursor: pointer;
  margin-left: -4px;
}
header > div:first-child a:hover {
  background: var(--hover-clr);
}
</style>