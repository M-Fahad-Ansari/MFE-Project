<template>
  <div ref="homeContent"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  async mounted() {
    const [{ default: MainLayout }, { default: mount }] = await Promise.all([
      import("home/MainLayout"),
      import("home/mount"),
    ]);
    mount(MainLayout, this.$refs.homeContent);
  },
});
</script>
