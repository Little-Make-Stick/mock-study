<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="less">
:root{
  --my-theme-color-: rgba(0, 85, 158, 1);
}
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-size: 14px;
  box-sizing: border-box;
}
#app{
  height: 100vh;
  width: 100%;
  position: relative;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
}
::-webkit-scrollbar-track {
    width: 0.5rem;
}
::-webkit-scrollbar-track-piece {
    width: 0.5rem;
}
::-webkit-scrollbar-thumb {
    background: var(--my-theme-color-);
}
</style>
