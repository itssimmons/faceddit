<script lang="ts">
import { defineComponent, ref } from 'vue';
import Checkbox from '@/components/Checkbox.vue';
import Input from '@/components/Input.vue';
import Separator from '@/components/Separator.vue';
import Btn from '@/components/Btn.vue';
import { register } from '@/services/auth.service'
import router from '@/router';
import type { SelectedMedia } from '@/types'

const selectedAvatar = ref<SelectedMedia | null>(null)
const profileInput = document.createElement('input');
profileInput.type = 'file';
profileInput.accept = ".jpg,.jpeg,.png,.webp";

const handleProfileInput = (evt: any) => {
  const target = evt.target as HTMLInputElement;

  if (target.files) {
    selectedAvatar.value = {
      preview: URL.createObjectURL(target.files[0]),
      file: target.files[0]
    }
  }
}

export default defineComponent({
  name: 'Login',
  components: {
    Checkbox,
    Input,
    Separator,
    Btn 
  },
  data() {
    return {
      avatar: selectedAvatar
    }
  },
  mounted() {
    profileInput.addEventListener('change', handleProfileInput)
  },
  unmounted() {
    profileInput.removeEventListener('change', handleProfileInput)
  },
  methods: {
    async handleRegister(evt: any) {
      const data = new FormData(evt.target)

      if (this.avatar?.file) data.set('avatar', this.avatar.file)

    },
    handleProfilePhoto() { profileInput.click() }
  }
})
</script>

<template>
  <div class="register__hero">
    <div class="second__card">
      <img class="register__logo" src="/vite.svg" alt="App logo">
      <h1 class="register__title">Sign Up</h1>
      <p class="register__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form id="register-form" enctype="multipart/form-data" @submit="handleRegister">
        <div>
          <img :src="avatar?.preview || '/nopic.png'" @click.prevent="handleProfilePhoto">
        </div>
        <Separator />
        <Input type="text" name="name" label="Name*" placeholder="Your name" />
        <Input type="text" name="email" label="Email*" placeholder="Email address" />
        <Input type="pwd" name="password" placeholder="Min. 8 characters" />
        <Btn label="Sign Up" type="submit" />
      </form>
      <p class="noregistered">Already an account? <router-link to="/login">Go to login</router-link></p>
      <p class="rr">&#xAE; Simón. All rights reserved.</p>
    </div>
    <div class="first__card">
      <div class="opacity__card">
        <div class="text__wrapper">
          <h2>Join to the community! 🌎</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi neque odit aspernatur necessitatibus. Voluptatum iusto sed odit, doloremque illum facere minus aperiam maiores architecto dolorum.</p>
        </div>
      </div>
      <video autoplay muted loop class="wallpaper">
        <source src="../assets/gifs.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<style scoped>
.register__hero {
  display: grid;
  grid-template-columns: 40% 60%;
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
  font-size: 3.15rem;
  margin-bottom: 18px;
}
.opacity__card .text__wrapper p {
  font-size: 1rem;
  line-height: 22px;
}

.register__hero .first__card {
  width: 100%;
  height: 100%;
}
.register__hero .first__card .wallpaper {
  height: 100%;
  position: absolute;
  top: 0;
  right: -300px;
  z-index: -1;
}

.register__hero .second__card {
  display: grid;
  gap: 8px;
  margin: auto 0;
  background: white;
  height: 100%;
  padding: 40px 60px;
  z-index: 1;
}

.register__logo {
  margin-bottom: 30px;
}

.register__subtitle {
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

#register-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#register-form > div:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
#register-form > div:first-child img {
  height: 90px;
  width: 90px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
}
</style>
