<script setup lang="ts">
type Props = {
  type: 'google' | 'submit'
  label?: string
}

const props = defineProps<Props>()
</script>

<template>
<button class="google__signin" v-if="type === 'google'">
  <img class="google__logo" src="../assets/google.svg">
  <label>Continue with google</label>
</button>
<input type="submit" :value="label" v-if="type === 'submit'">
</template>

<style scoped>
input[type=submit],
input[type=button] {
  background: none;
  border: none;
  cursor: pointer;
  background-color: var(--primary);
  width: 100%;
  border-radius: 50px;
  padding: 10px 15px;
  margin-block: 8px;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: var(--ff);
}

.google__logo {
  width: 25px;
  margin-right: 15px;
}

.google__signin {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 100%;
  border-radius: 50px;
  padding: 10px 15px;
  margin-block: 8px;
  border: 1px solid #ccc;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: var(--ff);
  margin-top: 40px;
}

.google__signin label {
  color: #5b5b5b;
  cursor: pointer;
}
</style>