<template>
  <div class="item-title">{{title}}:</div>
</template>

<script>
export default {
  name: 'ItemTitle',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.item-title {
  text-align: left;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  color: #4A148C;
}
</style>
