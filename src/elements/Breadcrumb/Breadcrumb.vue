<script>
export default {
  name: 'AzBreadcrumb',
};
</script>

<template lang="pug">
.az.breadcrumb
  slot
</template>

<style lang="scss">
.az.breadcrumb {
  display: flex;
  align-items: center;
  height: 20px;
}
</style>
