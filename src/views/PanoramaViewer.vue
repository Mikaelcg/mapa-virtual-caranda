<template>
  <div id="viewer"></div>
</template>

<script>
import PanoramaImg from "@/assets/img/panorama.jpg";
import markers from "@/data/markers.js";
import { Viewer } from "photo-sphere-viewer";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";

export default {
  name: "PanoramaViewer",

  data() {
    return {
      markers: markers,
      viewer: null,
    };
  },

  async mounted() {
    await this.mountPanoramaViewer();
    await this.handleEventBus();
  },

  methods: {
    mountPanoramaViewer() {
      this.viewer = new Viewer({
        container: document.querySelector("#viewer"),
        panorama: PanoramaImg,
        plugins: [
          [
            MarkersPlugin,
            {
              markers: markers,
            },
          ],
        ],
        caption: "Mapa Virtual",
        description: "Mapa Virtual - Caranda.",
      });

      if (!this.viewer) {
        console.log("Viewer is null");
      }

      console.log("Viewer loaded");
    },

    handleEventBus() {
      this.eventBus.on("handleMarkers", (buttons) =>
        this.handleMarkers(buttons)
      );
    },

    handleMarkers(buttons) {
      const markersPlugin = this.viewer.getPlugin(MarkersPlugin);

      const categories = buttons
        .filter((marker) => marker.active)
        .map((marker) => marker.category);

      this.markers.forEach((marker) => {
        const isActive = categories.includes(marker.data.category);

        if (!isActive) {
          markersPlugin.hideMarker(marker.id);
          return;
        }

        markersPlugin.showMarker(marker.id);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#viewer {
  width: 100vw;
  height: 100vh;
}
</style>
