<template>
  <FloatingMenu @removeMarker="removeMarker" />
  <PanoramaViewer />
</template>

<script>
import PanoramaViewer from "@/views/PanoramaViewer.vue";
import FloatingMenu from "@/components/FloatingMenu.vue";

export default {
  name: "App",
  components: {
    PanoramaViewer,
    FloatingMenu,
  },
};
</script>
