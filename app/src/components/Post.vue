<script setup lang="ts">
import Vote from '../components/Icons/Vote.vue';
import Share from '../components/Icons/Share.vue';
import Comment from '../components/Icons/Comment.vue';
import Save from '../components/Icons/Save.vue';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const imgClassResolver = (images: string[] | null): string => {
  if (!images || images.length === 0 || images.length === 3) return ''
  if (images.length === 1) return 'one'
  else if (images.length === 2) return 'two'

  return 'multi'
}

type Props = {
  user: {
    name: string,
    photo: string
  },
  comments: any[] | null,
  images: string[] | null,
  video: string | null,
  gif: string | null,
  description: string
  upvotes: number,
  downvotes: number,
  createdAt: number | string
}

const props = defineProps<Props>();
</script>

<template>
  <div class="post__card">
    <div class="vote__section">
      <Vote dir="up" />
      <b>{{ upvotes - downvotes }}</b>
      <Vote dir="down" />
    </div>
    <div class="profile__wrapper">
      <img class="post__pic" :src="user.photo ?? '/nopic.png'" alt="Profile photo">
      <div>
        <p class="user">{{ user.name }}</p>
        <p class="time">{{ dayjs(createdAt).fromNow() }}</p>
      </div>
    </div>
    <p>{{ description }}</p>
    <div class="media__wrapper" :class="imgClassResolver(images)" :data-quantity="(images && images.length > 3) ? (images?.length as number) - 3 : null">
      <img v-if="images" v-for="image in images.splice(0,3)" :src="image" class="media image">
      <video v-if="video" class="media video" controls>
        <source :src="video" type="video/mp4">
      </video>
      <img v-if="gif" :src="gif" type="image/gif" class="media gif">
    </div>
    <div class="actions">
      <div class="comments">
        <Comment />
        <b>{{ comments?.length }}</b>
      </div>
      <Share />
      <Save />
    </div>
  </div>
</template>

<style scoped>
.vote__section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  position: absolute;
  top: 18px;
  left: 14px;
}
.vote__section b {
  font-size: 0.75rem;
}
.post__card {
  width: 650px;
  background: white;
  border-radius: 14px;
  position: relative;
  padding: 18px 60px;
}
.post__card > p {
  font-weight: 500;
  margin-block: 14px;
}

.post__pic {
  border-radius: 100%;
  width: 45px;
}

.profile__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
}
.profile__wrapper > div {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 6px;
}
.profile__wrapper .user {
  font-weight: 600;
  font-size: 1rem;
}
.profile__wrapper .time {
  font-weight: 700;
  font-size: 0.75rem;
  color: #bebebe;
}

.media__wrapper {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  place-items: center;
  margin: 0 auto;
  width: max-content;
  gap: 12px;
}
.media__wrapper.one .image {
  width: 530px !important;
  height: 530px !important;  
}
.media__wrapper.two .image {
  width: 258px !important;
  height: 100% !important;
}
.media__wrapper.two .image:first-child {
  grid-row-start: unset !important;
  grid-row-end: unset !important;
}
.media__wrapper.multi {
  position: relative;
}
.media__wrapper.multi::before {
  content: attr(data-quantity) "+";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 260px;
  height: 260px;
  background: rgba(0, 0, 0, .32);
  right: 0px;
  bottom: 0;
  color: white;
  border-radius: 14px;
  font-size: 2rem;
}
.media__wrapper .image:first-child {
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
}
.media__wrapper .video {
  width: 530px !important;
  height: 530px !important;
}
.media__wrapper .gif {
  width: 530px !important;
}
.media__wrapper .media {
  width: 260px;
  height: 260px;
  border-radius: 14px;
  object-fit: cover;
}

.actions {
  margin-top: 4px;
  display: flex;
  align-items: center;
}
.actions > button:last-child {
  margin-left: auto;
}

.actions .comments {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.actions .comments b {
  font-weight: 500;
  font-size: 0.875rem;
  margin-left: 2px;
  margin-right: 6px;
}
</style>