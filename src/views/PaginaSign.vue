<script></script>
<template>
  <main>
    <div class="login-style">
      <h1>Sign in</h1>
      <input class="input-style" type="text" placeholder="Name" />
      <input class="input-style" type="email" placeholder="Email" />
      <input class="input-style" type="password" placeholder="Password" />
      <button class="button-style" @click="$router.push({ name: 'Login' })">
        Send
      </button>
    </div>
  </main>
</template>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
