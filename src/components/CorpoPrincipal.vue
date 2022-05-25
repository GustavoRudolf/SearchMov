<script></script>
<template>
  <main id="corpo">
    <div class="logo">
      <img class="image-logo" src="@/assets/imgs/Logo.png" alt="logo" />
    </div>
    <div class="input-group">
      <input
        type="text"
        placeholder="Search"
        class="Input text input-pesquisa"
        value="Homem Aranha 3"
      />
    </div>
    <div class="resultado">
      <img src="@/assets/imgs/Homem-aranha3.jpg" />
      <p class="resultados">Netflix</p>
    </div>
  </main>
</template>
<style>
#corpo {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

.image-logo {
  width: 250px;
  height: 50px;
}
.logo {
  margin-top: 10%;
}
</style>
