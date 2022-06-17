<template>
  <div
    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 absolute z-50 left-10 md:left-auto right-10 top-10"
  >
    <section class="grid gap-10 bg-white p-4 lg:grid-cols-4">
      <div class="flex items-center">
        <v-icon x-large color="#c0c0c0">mdi-filter</v-icon>
      </div>

      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-highway"
            variant="outlined"
            color="#B62134"
            @click="removeMarkers('acessos')"
          >
          </v-btn>
        </template>
        <span>Acessos</span>
      </v-tooltip>

      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-cart"
            variant="outlined"
            color="#28BA24"
          ></v-btn>
        </template>
        <span>Conveniências</span>
      </v-tooltip>

      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-silverware-fork-knife"
            variant="outlined"
            color="#DEC325"
          ></v-btn>
        </template>
        <span>Restaurantes</span>
      </v-tooltip>
    </section>
  </div>
</template>

<script>
export default {
  name: "FloatingMenu",

  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    removeMarkers(categoria) {
      this.$emit("removeMarker", categoria);
    },
  },
};
</script>

<style lang="scss" scoped>
/* CSS aqui */
</style>
