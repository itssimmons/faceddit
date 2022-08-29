<script setup lang="ts">
type Props = {
  type: 'pwd' | 'text' | 'search',
  name?: string,
  placeholder?: string
}

const props = defineProps<Props>()
</script>

<template>
<div class="pwd__field" v-if="type === 'pwd'">
  <label>Password*</label>
  <input type="password" :name="name" :placeholder="placeholder">
</div>
<div class="text__field" v-if="type === 'text'">
  <label>Email or username*</label>
  <input type="text" :name="name" :placeholder="placeholder">
</div>
<div class="search__field" v-if="type === 'search'">
  <img src="../assets/search.svg">
  <input type="text" name="search" placeholder="Search">
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

.search__field {
  position: relative;
}
.search__field img {
  width: 20px;
  position: absolute;
  top: 50%;
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