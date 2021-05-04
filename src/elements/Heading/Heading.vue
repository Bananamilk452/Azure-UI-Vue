<script>
export default {
  name: 'AzHeading',
};
</script>

<template lang="pug">
  header.az.heading
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
}
</style>
