<template>
  <block title="Resumo do pedido">
    <template v-slot:conteudo-block>
      <block-item>
        <template v-slot:subtitle>
          <item-title title="Tamanho"/>
        </template>
        <template v-slot:conteudo>
          <item-list
            :nome="pedido.tamanho.nome"
            :valor="pedido.tamanho.valor"/>
        </template>
      </block-item>
      <block-item>
        <template v-slot:subtitle>
          <item-title title="Sabor"/>
        </template>
        <template v-slot:conteudo>
          <item-list
            :nome="pedido.sabor.nome"
            :valor="pedido.sabor.valor"/>
        </template>
      </block-item>
      <block-item v-if="pedido.personalizacao && pedido.personalizacao.length">
        <template v-slot:subtitle>
          <item-title title="Personalizações"/>
        </template>
        <template v-slot:conteudo>
          <item-list v-for="(personalizacao, index) in pedido.personalizacao"
            :key="index"
            :nome="personalizacao.nome"
            :valor="personalizacao.valor"/>
        </template>
      </block-item>
      <block-item>
        <template v-slot:conteudo>
          <div class="resumo">
            <div>Valor total: <span>R$ {{totalPedido.toFixed(2)}}</span></div>
            <div>Tempo de preparo: <span>{{tempoPedido}}min</span></div>
          </div>
        </template>
      </block-item>
    </template>
    <template v-slot:footer-block>
      <button-item
        name="Refazer pedido"
        @click.prevent.native="refazerPedido()"/>
    </template>
  </block>
</template>

<script>
import Block from '@/components/Block.vue';
import BlockItem from '@/components/BlockItem.vue';
import ButtonItem from '@/components/ButtonItem.vue';
import ItemTitle from '@/components/ItemTitle.vue';
import ItemList from '@/components/ItemList.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MontarPedido',
  components: {
    Block,
    BlockItem,
    ButtonItem,
    ItemTitle,
    ItemList,
  },
  computed: {
    ...mapState(['pedido']),

    totalPedido() {
      const valorPersonalizacao = this.somaValores(this.pedido.personalizacao, 'valor');

      return this.pedido.tamanho.valor + this.pedido.sabor.valor + valorPersonalizacao;
    },
    tempoPedido() {
      const tempoPersonalizacao = this.somaValores(this.pedido.personalizacao, 'tempo');

      return this.pedido.tamanho.tempo + this.pedido.sabor.tempo + tempoPersonalizacao;
    },
  },
  methods: {
    ...mapActions(['setPedido']),

    somaValores(array, chave) {
      return array.map((item) => item[chave])
        .reduce((total, valor) => total + valor, 0);
    },

    refazerPedido() {
      this.$router.push({ name: 'Escolher' });
      this.setPedido({});
    },
  },
  mounted() {
    if (!this.pedido.sabor) {
      this.$router.push({ name: 'Escolher' });
    }
  },
};
</script>
<style scoped>
.resumo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 700;
  color: #4A148C;
}
</style>
