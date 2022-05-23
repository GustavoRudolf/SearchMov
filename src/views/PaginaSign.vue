<script></script>
<template>
  <!-- <body> -->
  <div>
    <h1>Sign in</h1>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <a class="link" href="">Are you already Sign-in?</a>
    <button>Send</button>
  </div>
  <!-- </body> -->
</template>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
div {
  background-color: black;
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
