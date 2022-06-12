<template>
  <div
    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 absolute z-50 left-10 md:left-auto right-10 top-10"
  >
    <section class="grid gap-8 bg-white p-2 lg:grid-cols-6">
      <button
        type="button"
        class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
/* CSS aqui */
</style>
