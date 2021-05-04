<script>
export default {
  name: 'AzNavbar',
};
</script>

<template lang="pug">
  nav.az.navbar
    slot
</template>

<style lang="scss">
nav.az.navbar {
  background-color: #0078d4;
  height: 40px;
  position: relative;
  z-index: 5;
  font-size: 13px;
  width: 100%;
  -webkit-app-region: drag;
  display: flex;
  align-content: center;
  align-items: center;
}
</style>
