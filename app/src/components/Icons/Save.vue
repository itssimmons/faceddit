<template>
  <button class="save__btn">
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      class="save__svg"
    >
      <path
        fill="currentColor"
        d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87a1 1 0 0 1-1 0l-5.7-3.16l-5.29 3.23a1.2 1.2 0 0 1-.51.15Zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61l-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9l4.28-2.63a1.06 1.06 0 0 1 .51-.14Z"
      />
    </svg>    
  </button>
</template>

<style scoped>
.save__btn {
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
.save__btn:hover {
  background: var(--hover-clr);
}

.save__svg {
  width: 28px;
  height: 28px;
  color: #353535;
}
</style>