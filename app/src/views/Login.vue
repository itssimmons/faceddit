<script setup lang="ts">
import Checkbox from '../components/Checkbox.vue';
import Input from '../components/Input.vue';
import Separator from '../components/Separator.vue';
import Btn from '../components/Btn.vue';

const handleSubmit = (evt: any) => {
  evt.preventDefault()

  const data = Object.fromEntries(
    new FormData(evt.target) as any
  )
}
</script>

<template>
  <div class="login__hero">
    <div class="first__card">
      <div class="opacity__card">
        <div class="text__wrapper">
          <h2>Share the vibes 🍃</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi neque odit aspernatur necessitatibus. Voluptatum iusto sed odit, doloremque illum facere minus aperiam maiores architecto dolorum.</p>
        </div>
      </div>
      <video autoplay muted loop class="wallpaper">
        <source src="../assets/gifs.mp4" type="video/mp4">
      </video>
    </div>
    <div class="second__card">
      <img class="login__logo" src="/vite.svg" alt="App logo">
      <h1 class="login__title">Login</h1>
      <p class="login__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Btn type="google" />
      <Separator label="or Sign in with Email" />
      <form id="login-form" @submit="handleSubmit">
        <Input type="text" name="email" placeholder="Email or username" />
        <Input type="pwd" name="password" placeholder="Min. 8 characters" />
        <div class="wrapper__down">
          <Checkbox name="remember" label="Remember me" />
          <a href="#">Forget password?</a>
        </div>
        <Btn type="submit" />
      </form>
      <p class="noregistered">Not registered yet? <a href="#">Create an account</a></p>
      <p class="rr">&#xAE; Simón. All rights reserved.</p>
    </div>
  </div>
</template>

<style scoped>
.login__hero {
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
  height: 100%;
}

.opacity__card {
  display: grid;
  place-items: center;
  color: white;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
}
.opacity__card .text__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: white;
  width: 60%;
}
.opacity__card .text__wrapper h2 {
  font-size: 3.5rem;
  margin-bottom: 18px;
}
.opacity__card .text__wrapper p {
  font-size: 1rem;
  line-height: 22px;
}

.login__hero .first__card {
  width: 100%;
  height: 100%;
}
.login__hero .first__card .wallpaper {
  height: 100%;
  position: absolute;
  top: 0;
  left: -300px;
  z-index: -1;
}

.login__hero .second__card {
  display: grid;
  gap: 8px;
  margin: auto 0;
  background: white;
  height: 100%;
  padding: 40px 60px;
  z-index: 1;
}

.login__logo {
  margin-bottom: 30px;
}

.login__subtitle {
  font-size: 0.875rem;
  color: #8c8c8c;
}

.wrapper__down {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 12px;
}

.wrapper__down a {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--primary);
}

.noregistered {
  font-weight: 400;
  font-size: 0.875rem;
}
.noregistered a {
  text-decoration: none;
  font-weight: 600;
  color: var(--primary);
}

.rr {
  margin-top: 50px;
  font-weight: 500;
  font-size: 0.75rem;
  color: #8c8c8c;
}
</style>
