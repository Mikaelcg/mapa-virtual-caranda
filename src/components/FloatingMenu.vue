<template>
  <div
    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 absolute z-50 left-10 left-auto right-5 md:right-20 top-10"
  >
    <section class="grid gap-10 bg-slate-700 p-3 lg:grid-cols-9">
      <div class="flex items-center">
        <v-icon x-large color="#c0c0c0">mdi-filter</v-icon>
      </div>

      <v-tooltip
        location="bottom"
        v-for="marker in markers"
        :key="marker.category"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            size="small"
            v-bind="props"
            :icon="marker.icon"
            :color="marker.color"
            :variant="getButtonVariant(marker.active)"
            @click="handleMarker(marker)"
          />
        </template>
        <span>{{ marker.tooltip }}</span>
      </v-tooltip>
    </section>
  </div>
</template>

<script>
export default {
  name: "FloatingMenu",

  data() {
    return {
      markers: [
        {
          category: "saude",
          color: "#FF7373",
          icon: "mdi-medical-bag",
          active: false,
          tooltip: "Saúde",
        },
        {
          category: "supermercados",
          color: "#FFF600",
          icon: "mdi-cart",
          active: false,
          tooltip: "Supermercados",
        },
        {
          category: "restaurantes-padarias",
          color: "#FFCD6C",
          icon: "mdi-silverware-fork-knife",
          active: false,
          tooltip: "Restaurantes e Padarias",
        },
        {
          category: "escolas",
          color: "#00ABCB",
          icon: "mdi-school",
          active: false,
          tooltip: "Escolas",
        },
        {
          category: "acessos",
          color: "#ADADAD",
          icon: "mdi-highway",
          active: false,
          tooltip: "Vias de Acesso",
        },
        {
          category: "parques",
          color: "#67E387",
          icon: "mdi-pine-tree",
          active: false,
          tooltip: "Parques",
        },
        {
          category: "museus",
          color: "#9B7000",
          icon: "mdi-bank",
          active: false,
          tooltip: "Museus",
        },
        {
          category: "metro",
          color: "#375BFF",
          icon: "mdi-subway",
          active: false,
          tooltip: "Estações de Metrô",
        },
      ],
    };
  },

  methods: {
    getButtonVariant(active) {
      return active ? "flat" : "outlined";
    },

    handleMarker(marker) {
      marker.active = !marker.active;
      this.eventBus.emit("handleMarkers", this.markers);
    },
  },
};
</script>
