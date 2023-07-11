<template>
  <div class="f-container">
    <div class="f-container__socials">
      <v-tooltip v-for="social in socials" :key="social.name" top color="black">
        <template v-slot:activator="{ on, attrs }">
          <a
            :href="social.link"
            target="_blank"
            class="f-container__socials--icons"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="#FFF">
              {{ social.icon }}
            </v-icon>
          </a>
        </template>
        <span>{{ social.name }}</span>
      </v-tooltip>
    </div>

    <span>Feito com ❤️ por Emerson Costa</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        name: "Github",
        link: "https://github.com/emersonchoquetarqui",
        icon: "mdi-github",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/emersonchoquetarqui/",
        icon: "mdi-linkedin",
      },
    ],
  }),
};
</script>

<style>
.f-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.f-container__socials {
  display: flex;
}

.f-container__socials--icons {
  cursor: pointer;
  margin: 0 15px 0 0;
  text-decoration: none;
}

.f-container > span {
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
}
</style>
