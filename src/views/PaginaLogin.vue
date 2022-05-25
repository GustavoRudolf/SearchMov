<script></script>
<template>
  <main id="corpo">
    <div class="login-style">
      <h1>Login</h1>
      <input class="input-style" type="text" placeholder="Name" />
      <input class="input-style" type="password" placeholder="Password" />
      <router-link class="link" to="/SignIn"
        >Are you not already Sign-in?</router-link
      >
      <button class="button-style" @click="$router.push({ name: 'Busca' })">
        Send
      </button>
    </div>
  </main>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-image: linear-gradient(#394e4a, #3ca794, white);
}
</style>
