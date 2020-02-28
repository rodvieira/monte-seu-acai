<template>
  <block title="Escolha seu açai" class="block-escolher">
    <template v-slot:conteudo-block>
      <loading v-if="loading"/>
      <div v-else>
        <block-item>
          <template v-slot:subtitle>
            <item-title title="Sabor"/>
          </template>
          <template v-slot:conteudo>
            <select-item-box :options="sabores" @selecionado="selecionaSabor"/>
            <small v-if="naoSelecionado && !saborSelecionado">
              É necessário selecionar um sabor
            </small>
          </template>
        </block-item>
        <block-item>
          <template v-slot:subtitle>
            <item-title title="Tamanho"/>
          </template>
          <template v-slot:conteudo>
            <select-item-box :options="tamanhos" @selecionado="selecionaTamanho"/>
            <small v-if="naoSelecionado && !tamanhoSelecionado">
              É necessário selecionar um tamanho
            </small>
          </template>
        </block-item>
      </div>
    </template>
    <template v-slot:footer-block>
      <button-item name="Avançar" @click.prevent.native="nextStep()"/>
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
import { mapActions } from 'vuex';
import saboresApi from '../service/sabores';
import tamanhosApi from '../service/tamanhos';

export default {
  name: 'Escolher',
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
      sabores: [],
      tamanhos: [],
      saborSelecionado: null,
      tamanhoSelecionado: null,
      loading: true,
      naoSelecionado: false,
    };
  },

  methods: {
    ...mapActions(['setPedido']),

    selecionaSabor(saborId) {
      const index = this.findIndexArray(this.sabores, saborId);

      this.falsoSelecionado(this.sabores);

      this.sabores[index].selecionado = true;

      this.saborSelecionado = this.sabores[index];
    },

    selecionaTamanho(tamanhoId) {
      const index = this.findIndexArray(this.tamanhos, tamanhoId);

      this.falsoSelecionado(this.tamanhos);

      this.tamanhos[index].selecionado = true;

      this.tamanhoSelecionado = this.tamanhos[index];
    },

    findIndexArray(array, id) {
      return array.findIndex((item) => item.id === id);
    },

    falsoSelecionado(array) {
      array.forEach((item) => item.selecionado = false);
    },

    nextStep() {
      if (this.saborSelecionado && this.tamanhoSelecionado) {
        this.setPedido({
          sabor: this.saborSelecionado,
          tamanho: this.tamanhoSelecionado,
        });

        this.$router.push({ name: 'Personalizar' });
      } else {
        this.naoSelecionado = true;
      }
    },

    setSelecionado(data) {
      return data.map((item) => {
        const newData = { ...item, selecionado: false };

        return newData;
      });
    },
  },
  mounted() {
    saboresApi.fetchSabores()
      .then(({ data }) => {
        this.sabores = this.setSelecionado(data);
      }) // eslint-disable-next-line
      .finally(() => this.loading = false);

    tamanhosApi.fetchTamanhos()
      .then(({ data }) => {
        this.tamanhos = this.setSelecionado(data);
      }) // eslint-disable-next-line
      .finally(() => this.loading = false);
  },
};
</script>
<style scoped>
small {
  margin-top: 4px;
  color: red;
  float: left;
}

@media only screen and (max-width: 768px) {
  .block-escolher {
    margin: 30px 0;
  }
  small {
    float: none;
  }
}
</style>
