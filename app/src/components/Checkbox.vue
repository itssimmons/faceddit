<script setup lang="ts">
type Props = {
  label: string,
  name: string
}

const props = defineProps<Props>();
</script>

<template>
  <div class="checkbox__field">
    <input :name="name" id="chbox" type="checkbox">
    <label for="chbox">{{ label }}</label>
  </div>
</template>

<style scoped>
.checkbox__field {
  display: flex;
  align-items: center;
}

.checkbox__field input {
  margin-right: 6px;
}

.checkbox__field label {
  font-weight: 600;
  font-size: 0.875rem;
}

input[type=checkbox] {
  width: 17px;
  height: 17px;
}

input[type=checkbox]:checked::before {
  background-color: var(--primary);
}
</style>
