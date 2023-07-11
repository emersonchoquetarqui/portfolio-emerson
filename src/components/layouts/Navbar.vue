<template>
  <div class="navbar-container">
    <img
      class="navbar-container__img"
      src="@/assets/logo.png"
      alt="Logo - Portfólio"
    />

    <router-link
      v-for="link in links"
      :key="link.name"
      :to="link.route"
      exact
      class="navbar-container__link"
      active-class="navbar-container__link--active"
    >
      <span>{{ link.name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: "HOME", route: "/" },
      { name: "SOBRE", route: "/sobre" },
    ],
  }),
};
</script>

<style>
.navbar-container {
  display: flex;
  align-items: center;

  width: 100%;
  height: auto;

  padding: 10px 0;
}

.navbar-container__img {
  width: 55px;
  height: 55px;
}

.navbar-container__link {
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
  text-decoration: none !important;
}

.navbar-container__link > span {
  text-decoration: none !important;
  color: #ffffff4b !important;
  transition: 600ms;
}

.navbar-container__link > span:hover {
  color: #ffffff94 !important;
  border-bottom: 2px rgba(255, 254, 254, 0.219) solid;
  transition: 600ms;
}

.navbar-container__link--active > span,
.navbar-container__link--active > span:hover {
  color: #ffffff !important;
  font-weight: 600;
  border: 0px;
  border-bottom: 2px #020074 solid;
}
</style>
