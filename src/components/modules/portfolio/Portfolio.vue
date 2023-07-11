<template>
  <div class="p-container">
    <h2>Projetos</h2>

    <div class="p-container__card"></div>

    <div class="p-container__divider"></div>

    <h2>Protótipos</h2>

    <div class="p-container__card"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.p-container > h2 {
  color: #ffffff;
  font-weight: 500;
}

.p-container__card {
  height: 250px;
  width: 390px;

  margin: 15px 0;

  border-radius: 25px;
  background: #fffaf83a;
}

.p-container__divider {
  height: 2px;
  width: 100%;
  margin: 15px 0;
  background: transparent;
}
</style>
