<script>
export default {
  name: 'AzBreadcrumbSection',
  props: {
    link: {
      type: Boolean,
    },
  },
};
</script>

<template lang="pug">
a.section(v-if="link" :class="{ link }")
  slot
.section(v-else)
  slot
</template>

<style lang="scss">
.az.breadcrumb > .section.link {
  color: #0078d4;
}

.az.breadcrumb > .section {
  font-size: 14px;
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
</style>
