<template>
  <v-container class="main-container">
    <Navbar />

    <div class="main-container__view">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <Footer />
  </v-container>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.main-container {
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;

  min-height: 100%;
}

.main-container__view {
  /* background: rgba(255, 224, 224, 0.089) !important; */
  height: 80%;
}

.slide-enter,
.slide-leave-to {
  transform: translate(-50px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
</style>
