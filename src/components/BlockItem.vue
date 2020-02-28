<template>
  <div class="block-item">
    <div class="subtitle">
      <slot name="subtitle"></slot>
    </div>
    <div class="content">
      <slot name="conteudo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockItem',
};
</script>

<style scoped>
.block-item {
  padding: 1rem 0;
}
.subtitle {
  margin-bottom: 1rem;
}
</style>
