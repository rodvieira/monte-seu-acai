<template>
  <button class="button-item">{{name}}</button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    name: String,
  },
};
</script>

<style scoped>
.button-item {
  color: #4A148C;
  background-color: transparent;
  border: 2px solid #4A148C;
  border-radius: 4px;
  min-height: 40px;
  min-width: 130px;
  font-size: 16px;
  cursor: pointer;
  transition: 1s;
  font-weight: 600;
}
.button-item:hover {
  background-color: #4A148C;
  color: #fff;
}

</style>
