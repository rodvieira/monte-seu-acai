<template>
  <div class="block">
    <div class="title">{{title}}</div>
    <div class="content-block">
      <slot name="conteudo-block"></slot>
    </div>
    <div class="footer-block">
      <slot name="footer-block"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.block {
  width: 600px;
  background-color: #fff;
  color: rgba(0, 0, 0, .4);
  padding: 1.5rem;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, .4);
  border-radius: 8px;
}
.title {
  font-size: 22px;
  font-weight: 700;
  color: #4A148C;
  margin-bottom: 1.5rem;
}
.content-block {
  margin: 1rem 0;
}
.footer-block {
  text-align: right;
}

@media only screen and (max-width: 768px) {
  .block {
    width: 80%;
  }
  .footer-block {
    text-align: center;
  }
}
</style>
