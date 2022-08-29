<script setup lang="ts">
type Props = {
  dir: 'up' | 'down',
}

const props = defineProps<Props>();
</script>

<template>
<button
  v-if="dir === 'up'"
  class="vote__btn"
>
  <svg
    viewBox="0 0 21 22.15"
    class="vote__svg"
  >
    <path
      d="M20.44,12.11,15.67,6.39,10.91.67a.57.57,0,0,0-.82,0L5.33,6.39.56,12.11c-.18.22,0,.49.42.49H5.41v8.82a.23.23,0,0,0,.24.23h9.7a.23.23,0,0,0,.24-.23V12.6H20C20.39,12.6,20.62,12.33,20.44,12.11Z"
      style="fill: none; stroke: #353535; stroke-width: 1.85px;"
    />
  </svg>
</button>
<button
  v-if="dir === 'down'"
  class="vote__btn"
>
  <svg 
    viewBox="0 0 21 22.15"
    class="vote__svg"
  >
    <path
      d="M.56,10l4.77,5.73,4.76,5.72a.59.59,0,0,0,.82,0l4.76-5.72L20.44,10c.18-.22-.05-.49-.42-.49H15.59V.73A.24.24,0,0,0,15.35.5H5.65a.24.24,0,0,0-.24.23V9.55H1C.61,9.55.38,9.82.56,10Z"
      style="fill: none; stroke: #353535; stroke-width: 1.85px;"
    />
  </svg>
</button>
</template>

<style scoped>
.vote__svg {
  width: 22px;
}
.vote__btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  cursor: pointer;
}
.vote__btn:hover {
  background: var(--hover-clr);
}
</style>