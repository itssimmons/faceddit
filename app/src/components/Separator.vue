<script setup lang="ts">
type Props = {
  label: String
}

const props = defineProps<Props>()
</script>

<template>
<div class="container__separator">
  <p>{{ label }}</p>
  <span class="line__separator"></span>
</div>
</template>

<style scoped>
.container__separator {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-block: 14px;
}
.container__separator p {
  font-weight: 500;
  font-size: 0.75rem;
  color: #c6c6c6;
  background: white;
  width: max-content;
  height: max-content;
  padding: 8px;
  z-index: 9;
}
.line__separator {
  position: absolute;
  border: 1px solid #e0e0e0;
  width: 100%;
}
</style>