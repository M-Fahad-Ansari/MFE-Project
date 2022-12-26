<template>
  <div class="text-3xl mx-auto max-w-6xl">
    <app-header></app-header>
    <div className="my-10">
      <router-view />
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import HomeContent from "./components/HomeContent.vue";

export default defineComponent({
  components: { AppHeader, AppFooter, HomeContent },
});
</script>
