<template>
  <div class="h-container">
    <div class="h-text">
      <span>Oi, eu sou</span>
      <h2>Emerson Costa</h2>
      <h5>Desenvolvedor Front-End</h5>
    </div>

    <div class="h-technologies">
      <img src="@/assets/technologies-one.png" alt="" />
      <img src="@/assets/technologies-two.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.h-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
}

.h-text {
  color: #ffffff;
}

.h-text > span {
  font-size: 26px;
}

.h-text > h2 {
  font-size: 65px;
}

.h-text > h5 {
  font-size: 26px;
  font-weight: 400;
}

.h-technologies {
  display: flex;
  align-items: center;
}

/* Media query */
@media (max-width: 904px) {
  .h-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  .h-text > span {
    font-size: 18px;
  }

  .h-text > h2 {
    font-size: 35px;
  }

  .h-text > h5 {
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 15px 0;
  }
}
</style>
