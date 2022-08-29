<script setup lang="ts">
import Post from "../components/Post.vue";
import Header from "../components/Header.vue";
import CreatePost from "../components/CreatePost.vue";
import posts from "../assets/posts.json"
</script>

<template>
<Header />
<main>
  <CreatePost />
  <section class="posts">
    <Post
      v-for="post in posts" 
      :key="post.id"
      :user="post.user"
      :images="post.images"
      :video="post.video"
      :gif="post.gif"
      :description="post.description"
      :comments="post.comments"
      :upvotes="post.upvotes"
      :downvotes="post.downvotes"
      :created_at="post.created_at"
    />
  </section>
</main>
</template>

<style scoped>
.posts {
  display: grid;
  gap: 12px;
}

main {
  width: 100%;
  height: 100%;
  padding-top: 80px;
  display: grid;
  justify-content: center;
}
</style>
