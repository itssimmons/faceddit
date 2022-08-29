<script setup lang="ts">
type Props = {
  handleClick: (...args: any[]) => void
}

const props = defineProps<Props>();
</script>

<template>
  <button class="video__btn" @click="handleClick">
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 576 512"
      class="video__svg"
    >
      <path
        fill="currentColor"
        d="M384 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h288c26.5 0 48 21.49 48 48zm192 15.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56c21.3-14.61 50.4.36 50.4 25.76z"
      />
    </svg>
  </button>
</template>

<style scoped>
.video__btn {
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
.video__btn:hover {
  background: var(--hover-clr);
}

.video__svg {
  width: 30px;
  color: #fe5876;
}
</style>