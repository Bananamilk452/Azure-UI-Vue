<script>
export default {
  name: 'AzIcon',
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<template lang="pug">
.az.icon
  svg(height="100%" width="100%")
    use(:href="`#${name}`")
</template>

<style lang="scss">
.az.icon {
  fill: #fff;
  display: flex;
  height: 40px;
  width: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
}

.az.icon svg {
  height: 16px;
  width: 16px;
}
</style>
