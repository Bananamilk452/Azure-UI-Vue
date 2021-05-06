<script>
export default {
  name: 'AzInput',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: [String, Number],
    },
  },
};
</script>

<template lang="pug">
.az.input
  input(:value="value" v-bind="$attrs" type="text" @change="$emit('change', $event.target.value)")
</template>

<style lang="scss">
.az.input > input {
  color: #323130;
  border-color: #8a8886;
  height: 24px;
  padding: 2px 8px 4px;
  border-radius: 2px;
  background-color: #fff;
  font-size: 13px;
  line-height: 18px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  // font-family: Segoe UI;

  &:focus {
    border: 1px solid #0078d4 !important;
    box-shadow: inset 0 0 0 1px #0078d4 !important;
    outline: none !important;
    outline-offset: -1px;
  }
}
</style>
