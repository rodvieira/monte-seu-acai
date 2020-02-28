<template>
  <div class="list-item">
    <span>- {{nome}}</span>
    <span class="valor">R$ {{valor.toFixed(2)}}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: ['nome', 'valor'],
};
</script>

<style scoped>
.list-item {
  display: flex;
  margin: 0 18px;
}
span {
  color: #4A148C;
}
.valor {
  margin-left: auto;
}

</style>
