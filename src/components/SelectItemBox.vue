<template>
  <div class="item-box">
    <div v-for="(option, index) in options"
      :key="index"
      class="box"
      :class="{ 'selected': option.selecionado }"
      @click="$emit('selecionado', option.id)">{{option.nome}}</div>
  </div>
</template>

<script>
export default {
  name: 'SelectItemBox',
  props: {
    options: Array,
  },
};
</script>

<style scoped>
.item-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box {
  border: 2px solid;
  padding: .75rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  min-width: 150px;
}
.selected {
  border: 2px solid #4A148C;
  color: #4A148C;
}

@media only screen and (max-width: 768px) {
  .item-box {
    flex-direction: column;
  }
  .box {
    margin-bottom: 8px;
  }
}
</style>
