<template>
  <button class="menu__btn">
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
      class="menu__svg"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <circle cx="2.5" cy="8" r=".75" />
        <circle cx="8" cy="8" r=".75" />
        <circle cx="13.5" cy="8" r=".75" />
      </g>
    </svg>
  </button>
</template>

<style scoped>
.menu__btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  cursor: pointer;
  margin-left: -10px;
}
.menu__btn:hover {
  background: var(--hover-clr);
}

.menu__svg {
  width: 20px;
  height: 20px;
  color: #c0c0c0;
}
</style>