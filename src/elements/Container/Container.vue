<script>
export default {
  name: 'AzContainer',
};
</script>

<template lang="pug">
.az.container
  slot
</template>

<style lang="scss">
.az.container {
  padding: 24px 24.66666667px;
  font-size: 13px;
  max-width: 1063px;
  margin: 0 auto;
  color: #323130;
}

@media(min-width: 480px) {
  .az.container {
    padding-left: 37px;
    padding-right: 37px;
  }
}

@media(min-width: 920px) {
  .az.container {
    padding-left: 74px;
    padding-right: 74px;
  }
}

</style>
