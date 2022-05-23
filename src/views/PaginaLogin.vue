<script></script>
<template>
  <!-- <main id="corpo"> -->
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Name" />
    <input type="password" placeholder="Password" />
    <a class="link" href="">Are you not already Sign-in?</a>
    <button @click="$router.push({ name: 'Busca' })">Send</button>
  </div>
  <!-- </main> -->
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-image: linear-gradient(#394e4a, #3ca794, white);
  display: flex;
}
div {
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 80px;
  border-radius: 15px;
  color: #fff;
}
input {
  padding: 15px;
  border: none;
  outline: none;
  font-size: 15px;
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
}
button {
  background-color: dodgerblue;
  border: none;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  margin-top: 40px;
}
button:hover {
  background-color: deepskyblue;
  cursor: pointer;
}
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
