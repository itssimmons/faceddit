<template>
  <button class="comment__btn">
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      class="comment__svg"
    >
      <path
        fill="currentColor"
        d="M8 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm4 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm-4-9A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 .3-.71a1 1 0 0 0-.3-.7A8 8 0 1 1 12 20Z"
      />
    </svg>  
  </button>
</template>

<style scoped>
.comment__btn {
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
.comment__btn:hover {
  background: var(--hover-clr);
}

.comment__svg {
  width: 28px;
  height: 28px;
  color: #353535;
}
</style>