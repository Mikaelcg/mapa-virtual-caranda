<template>
  <div id="viewer"></div>
</template>

<script>
import { Viewer } from "photo-sphere-viewer";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import "photo-sphere-viewer/dist/plugins/markers.css";
import PanoramaImg from "@/assets/img/panorama.jpg";
import PinRed from "@/assets/img/pin-red.png";
import PinYellow from "@/assets/img/pin-yellow.png";
import PinGreen from "@/assets/img/pin-green.png";

export default {
  name: "PanoramaViewer",

  data() {
    return {
      PinRed: PinRed,
      PinYellow: PinYellow,
      PinGreen: PinGreen,
    };
  },

  mounted() {
    const viewer = new Viewer({
      container: document.querySelector("#viewer"),
      plugins: [
        [
          MarkersPlugin,
          {
            markers: [
              {
                id: "metroBrooklyn",
                longitude: 1.03,
                latitude: -0.25,
                anchor: "center center",
                html: this.getMarkerHtml("Metrô Brooklyn"),
                tooltip: "6min caminhando | 450m",
              },
              {
                id: "avenidaRoquePetroniJunior",
                longitude: -0.06,
                latitude: -0.48,
                anchor: "center center",
                html: this.getMarkerHtml("Avenida Roque Petroni Júnior"),
                tooltip: "1min de carro | 300m",
              },
              {
                id: "avenidaSantoAmaro",
                longitude: 1.71,
                latitude: -0.36,
                anchor: "center center",
                html: this.getMarkerHtml("Avenida Santo Amaro"),
                tooltip: "1min de carro | 300m",
              },
              {
                id: "avenidaChucri",
                longitude: -1.35,
                latitude: -0.18,
                anchor: "center center",
                html: this.getMarkerHtml("Avenida Chucri Zaidan"),
                tooltip: "4 minutos | 1,2km",
              },
              {
                id: "avenidaBerrini",
                longitude: -0.78,
                latitude: -0.18,
                anchor: "center center",
                html: this.getMarkerHtml("Avenida Berrini"),
                tooltip: "6min de carro | 2,2km",
              },
              {
                id: "nucleoFariaLima",
                longitude: -0.26,
                latitude: 0.01,
                anchor: "center center",
                html: this.getMarkerHtml("Núcleo Faria Lima"),
                tooltip: "13min | 6,7km",
              },
              {
                id: "Portucho",
                longitude: 0.49,
                latitude: -0.14,
                anchor: "center center",
                html: this.getMarkerHtml("Portucho", "yellow"),
                tooltip: "3min | 750m",
              },
              {
                id: "vicoloNostro",
                longitude: 0.37,
                latitude: -0.17,
                anchor: "center center",
                html: this.getMarkerHtml("Vicolo Nostro", "yellow"),
                tooltip: "3min | 750m",
              },
              {
                id: "shoppingMorumbi",
                longitude: -1.21,
                latitude: -0.18,
                anchor: "center center",
                html: this.getMarkerHtml("Shopping Morumbi", "green"),
                tooltip: "4min | 1,0km",
              },
              {
                id: "shoppingMarketPlace",
                longitude: -1.1,
                latitude: -0.11,
                anchor: "center center",
                html: this.getMarkerHtml("Shopping Market Place", "green"),
                tooltip: "8min | 2,4km",
              },
            ],
          },
        ],
      ],
      panorama: PanoramaImg,
      caption: "Panorama Viewer",
      description: "This is a panorama viewer.",
    });

    if (!viewer) {
      console.log("Viewer is null");
    }

    console.log("Viewer loaded");
  },

  methods: {
    getMarkerHtml(description, color = "red") {
      let pin = PinRed;

      switch (color) {
        case "yellow":
          pin = PinYellow;
          break;
        case "green":
          pin = PinGreen;
          break;

        default:
          break;
      }

      return `
        <div class="flex flex-col items-center">
          <span class='description text-[#fff]'>${description}</span>
          <img src='${pin}' width='38' />
        </div>
      `;
    },
  },
};
</script>

<style lang="scss">
#viewer {
  width: 100vw;
  height: 100vh;
}
</style>
