<script>
export default {
  name: 'AzBreadcrumbDivider',
  props: {
    icon: {
      type: String,
    },
  },
};
</script>

<template lang="pug">
.divider
  az-icon(:name="icon")
</template>

<style lang="scss">
.az.breadcrumb > .divider {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 0 3px;
}

.divider svg {
  transform: rotate(90deg);
  height: 10px !important;
  width: 10px !important;
  margin-top: 1px;
}

.divider > .az.icon {
  fill: #636363 !important;
  height: 10px;
  width: 10px;
  padding: 0 4px;
}
</style>
