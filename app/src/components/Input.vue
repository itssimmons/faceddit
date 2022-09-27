<script setup lang="ts">
type Props = {
  type: 'pwd' | 'text' | 'search' | 'giphy-search',
  name?: string,
  label?: string,
  placeholder?: string
  handleKey?: (...args: any[]) => void
}

const props = defineProps<Props>()
</script>

<template>
<div class="pwd__field" v-if="type === 'pwd'">
  <label>Password*</label>
  <input type="password" :name="name" :placeholder="placeholder">
</div>
<div class="text__field" v-if="type === 'text'">
  <label>{{ label }}</label>
  <input type="text" :name="name" :placeholder="placeholder">
</div>
<div class="search__field" v-if="type === 'search'">
  <img src="../assets/search.svg">
  <input type="text" name="search" placeholder="Search">
</div>
<div class="giphy__field" v-if="type === 'giphy-search'">
  <img src="../assets/search.svg">
  <input type="text" name="search" placeholder="Search" @keypress="handleKey">
</div>
</template>

<style scoped>
input[type=text],
input[type=password] {
  background: none;
  border: none;
  width: 100%;
  border-radius: 50px;
  padding: 12px 15px;
  margin-block: 8px;
  border: 1px solid #ccc;
  color: #8c8c8c;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: var(--ff);
}

input[type=text]::-webkit-input-placeholder,
input[type=password]::-webkit-input-placeholder {
  color: #bebebe;
}

.pwd__field label,
.text__field label {
  font-weight: 700;
  font-size: 0.875rem;
}

.giphy__field img {
  width: 15px;
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  left: 14px;
}
.giphy__field > input[type=text] {
  background: none;
  border: none;
  width: 100%;
  border-radius: 5px;
  padding: 7px 36px;
  margin-block: 2px;
  border: 1px solid #656565;
  color: #a6a6a6;
  font-size: 0.75rem;
  font-weight: 500;
  background: #636363;
  font-family: var(--ff);
}
.giphy__field > input[type=text]::-webkit-input-placeholder { color: #a6a6a6; }

.giphy__field,
.search__field {
  position: relative;
}
.search__field img {
  width: 20px;
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  left: 16px;
}
.search__field > input {
  width: 400px;
  padding-left: 44px;
  padding-block: 10px;
  margin-block: 0;
}
</style>