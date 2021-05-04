<template lang="pug">
  #app
    az-navbar
      az-navbar-item
        az-icon(name="hamburger")
      .divider(style="flex: 0 0 auto; display:flex;")
      az-navbar-heading Microsoft Azure
      az-navbar-item(right)
      az-navbar-item(right)
        az-icon(name="terminal")
      az-navbar-item(right)
        az-icon(name="filter")
      az-navbar-item(right)
        az-icon(name="notification")
      az-navbar-item(right)
        az-icon(name="setting")
      az-navbar-item(right)
        az-icon(name="question")
      az-navbar-item(right)
        az-icon(name="smile")
    az-container
      az-heading Azure 서비스
    az-symbol-container
</template>

<script>
export default {
  name: 'App',
  methods: {
    pad(num, size) {
      const s = `000000000${num}`;
      return s.substr(s.length - size);
    },
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
}

body {
  font-family: 'Segoe UI',system-ui,-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
</style>
