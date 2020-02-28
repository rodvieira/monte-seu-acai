<template>
  <block title="Personalize seu açai">
    <template v-slot:conteudo-block>
      <loading v-if="loading"/>
      <block-item v-else>
        <template v-slot:subtitle>
          <item-title title="Personalização"/>
        </template>
        <template v-slot:conteudo>
          <select-item-box
            :options="personalizacao"
            @selecionado="selecionaPersonalizacao"/>
        </template>
      </block-item>
    </template>
    <template v-slot:footer-block>
      <button-item
        name="Finalizar pedido"
        @click.prevent.native="finalizarPedido()"/>
    </template>
  </block>
</template>

<script>
import Block from '@/components/Block.vue';
import BlockItem from '@/components/BlockItem.vue';
import ButtonItem from '@/components/ButtonItem.vue';
import ItemTitle from '@/components/ItemTitle.vue';
import Loading from '@/components/Loading.vue';
import SelectItemBox from '@/components/SelectItemBox.vue';
import { mapState, mapActions } from 'vuex';
import personalizacaoApi from '../service/personalizacao';

export default {
  name: 'Personalizar',
  components: {
    Block,
    BlockItem,
    ButtonItem,
    ItemTitle,
    Loading,
    SelectItemBox,
  },
  data() {
    return {
      personalizacao: [],
      loading: true,
    };
  },
  computed: {
    ...mapState(['pedido']),
  },
  methods: {
    ...mapActions(['setPedido']),

    selecionaPersonalizacao(personalizacaoId) {
      const index = this.findIndexArray(this.personalizacao, personalizacaoId);

      this.personalizacao[index].selecionado = true;
    },

    findIndexArray(array, id) {
      return array.findIndex((item) => item.id === id);
    },

    finalizarPedido() {
      const personalizacao = this.personalizacao.filter((item) => item.selecionado === true);

      this.setPedido({
        ...this.pedido,
        personalizacao,
      });

      this.$router.push({ name: 'MontarPedido' });
    },
  },
  mounted() {
    if (!this.pedido.sabor) {
      this.$router.push({ name: 'Escolher' });
    }

    personalizacaoApi.fetchPersonalizacao()
      .then(({ data }) => {
        this.personalizacao = data.map((item) => {
          const personalizacao = { ...item, selecionado: false };

          return personalizacao;
        });
      })
      .finally(() => this.loading = false);
  },
};
</script>
