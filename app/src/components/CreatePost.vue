<script lang="ts">
import { ref } from 'vue';
import Photo from './Icons/Photo.vue';
import Video from './Icons/Video.vue';
import Gif from './Icons/Gif.vue';
import { getGifs } from '../services/GiphyService';

const selectedImages = ref<string[] | never[]>([])
const imageInput = document.createElement('input');
imageInput.type = 'file';
imageInput.accept = ".jpg,.jpeg,.png";

const selectedVideo = ref<string | null>(null)
const videoInput = document.createElement('input');
videoInput.type = 'file';
videoInput.accept = ".mp4,.ogg,.mov";

const showGiphyDD = ref(false)

const handlePhotoInput = () => imageInput.click();
const handleVideoInput = () => videoInput.click();
const handleGifInput = () => showGiphyDD.value = !showGiphyDD.value

videoInput.addEventListener('change', evt => {
  const target = evt.target as HTMLInputElement;

  if (target.files) {
    selectedVideo.value = URL.createObjectURL(target.files[0])
  }
})

imageInput.addEventListener('change', evt => {
  const target = evt.target as HTMLInputElement;

  if (target.files) {
    selectedImages.value = [
      ...selectedImages.value,
      URL.createObjectURL(target.files[0])
    ]
  }
})

const mediaUploadClassResolver = (video: any, images: any[], gif: any) => {
  if (video || gif) return 'has-media'
  else if (images.length > 0) return 'has-img'

  return ''
}


export default {
  name: 'CreatePost',
  components: {
    Photo,
    Video,
    Gif
  },
  data() {
    return {
      showGiphyDD,
      selectedImages,
      selectedVideo,
      mediaUploadClassResolver,
      handlePhotoInput,
      handleVideoInput,
      handleGifInput,
    }
  },
  mounted() {
    this.gifs()
  },
  methods: {
    gifs() {
      getGifs().then(gifs => {
        console.log(gifs)
      })
    }
  }
}
</script>

<template>
  <section class="create__post" :class="mediaUploadClassResolver(selectedVideo, selectedImages, '')">
    <h2>Hi, John Doe! 👋</h2>
    <section class="textarea__section">
      <textarea col="2" rows="5" maxlength="255" placeholder="Have something to share with the community today?"></textarea>
      <i>0 / 255</i>
    </section>
    <section class="selected__media">
      <video v-if="selectedVideo" controls class="selected__video">
        <source :src="selectedVideo" type="video/mp4">
      </video>
      <div v-if="selectedImages.length > 0" class="selected__images">
        <div class="imgs">
          <div v-for="imgs in selectedImages.slice(0,6)">
            <img :src="imgs">
          </div>  
        </div>
        <div class="default__imgs">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
    <div class="media__upload">
      <div class="photos">
        <Photo :handle-click="handlePhotoInput" />
        <p>Photo</p>
      </div>
      <div class="video">
        <Video :handle-click="handleVideoInput" />
        <p>Video</p>
      </div>
      <div class="gif">
        <Gif :handle-click="handleGifInput" />
        <p>Gif</p>
        <div v-if="showGiphyDD" id="giphy-dd">  
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.create__post {
  background-color: white;
  width: 650px;
  height: 193px;
  border-radius: 14px;
  margin-bottom: 12px;
}
.create__post h2 {
  font-size: 1rem;
  padding: 15px 20px 0 20px;
}

.create__post.has-media {
  height: 425px;
}
.create__post.has-img {
  height: 295px;
}

.textarea__section {
  width: 100%;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.textarea__section i {
  position: absolute;
  right: 6px;
  bottom: 6px;
  font-size: 0.72rem;
  font-style: normal;
  color: #ccc;
  font-weight: 600;
}
.textarea__section textarea {
  border: none;
  background: none;
  resize: none;
  width: 100%;
  height: 100%;
  font-family: var(--ff);
  color: #828282;
  font-weight: 600;
  padding: 10px 20px;
}
.textarea__section textarea::placeholder {
  color: #828282;
}

.media__upload {
  width: 100%;
  height: 47px;
  display: flex;
  align-content: center;
  justify-content: space-around;
}
.media__upload div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.media__upload div p {
  font-weight: 600;
  font-size: 0.75rem;
  color: #999;
  margin-left: 5px;
}

.create__post.has-media .selected__media {
  padding: 20px 0 6px 14px;
}
.create__post.has-img .selected__media {
  padding: 20px 0 6px 14px;
}
.selected__media {
  display: grid;
  place-items: center;
}
.selected__video {
  width: 90%;
  height: 200px;
  border-radius: 14px;
  object-fit: cover;
}

.imgs { position: absolute; }
.imgs,
.default__imgs {
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 22px;
  grid-auto-flow: column;
}
.default__imgs div {
  width: 75px;
  height: 75px;
  border-radius: 14px;
  border: 1px dashed #ccc;
}
.imgs div {
  width: 75px;
  height: 75px;
  border-radius: 14px;
}
.imgs div img {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
}

.media__upload .gif {
  position: relative;
}
#giphy-dd {
  width: 350px;
  height: 420px;
  border-radius: 14px;
  position: absolute;
  top: 44px;
  background: black;
  left: 8px;
  z-index: 9999;
}
</style>