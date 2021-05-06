<script>
export default {
  name: 'AzHeading',
  props: {
    h1: {
      type: Boolean,
    },
    h2: {
      type: Boolean,
    },
    h3: {
      type: Boolean,
    },
    h4: {
      type: Boolean,
    },
    h5: {
      type: Boolean,
    },
  },
};
</script>

<template lang="pug">
  header.az.heading(:class="{ h1, h2, h3, h4, h5 }")
    slot
</template>

<style lang="scss">
header.az.heading {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 16px;
  min-width: 300px;

  &.h1 {
    font-size: 2rem;
  }

  &.h2 {
    font-size: 1.71428571rem;
  }

  &.h3 {
    font-size: 1.28571429rem;
  }

  &.h4 {
    font-size: 1.07142857rem;
  }

  &.h5 {
    font-size: 1rem;
  }
}
</style>
