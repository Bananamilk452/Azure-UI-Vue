<script>
export default {
  name: 'AzNavbarItem',
  props: {
    left: {
      type: Boolean,
    },
    center: {
      type: Boolean,
    },
    right: {
      type: Boolean,
    },
  },
};
</script>

<template lang="pug">
.az.navbar.item(:class="{ left, center, right }")
  slot
</template>

<style lang="scss">
$position: left, center, right;

.az.navbar.item {
  display: inline-block;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  flex-basis: 0%;

  @each $pos in $position {
    .az.navbar &.#{$pos} {
      margin-left: auto;
    }

    .az.navbar &.#{$pos} ~ &.#{$pos} {
      margin-left: 0;
    }
  }

  & .az.icon {
    padding: 0;
  }

  &:hover {
    color: #fff;
    background-color: #106ebe;
  }
}

</style>
