<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
::-webkit-scrollbar {
  width: 5px;
  background: transparent;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-track {
  display: none;
}

::-webkit-scrollbar-thumb {
  width: 4px;
  background: #ddd;
  border-radius: 2px;
}

::-webkit-scrollbar-corner {
  background: #82afff;
}
@media only screen and (min-width: 1200px) {
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }
}
/* 页面大于1200时的样式 */
</style>
