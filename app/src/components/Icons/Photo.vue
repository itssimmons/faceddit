<script setup lang="ts">
type Props = {
  handleClick: (...args: any[]) => void
}

const props = defineProps<Props>();
</script>

<template>
  <button class="photo__btn" @click="handleClick">
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      class="photo__svg"
    >
      <path
        fill="currentColor"
        d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
      />
    </svg>
  </button>
</template>

<style scoped>
.photo__btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  cursor: pointer;
}
.photo__btn:hover {
  background: var(--hover-clr);
}

.photo__svg {
  width: 30px;
  height: 30px;
  color: #58a6fe;
}
</style>