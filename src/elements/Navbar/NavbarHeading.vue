<script>
export default {
  name: 'AzNavbarHeading',
};
</script>

<template lang="pug">
.az.navbar.heading
  slot
</template>

<style lang="scss">
.az.navbar.heading {
  display: inline-block;
  font-size: 15px;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}

.az.navbar.heading:hover {
  color: #fff;
  background-color: #106ebe;
}
</style>
