<script lang="ts">
import Post from "@/components/Post.vue";
import Header from "@/components/Header.vue";
import CreatePost from "@/components/CreatePost.vue";
import { getPosts } from "@/services/post.service"

export default {
  name: 'Home',
  components: {
    Post,
    Header,
    CreatePost,
  },
  data() {
    return {
      posts: null,
      loading: true,
      err: ""
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts() {
      getPosts()
        .then(posts => this.posts = posts.data.data)
        .catch(err => this.error = err.message)
        .finally(() => this.loading = false)
    }
  }
}
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
      :createdAt="post.createdAt"
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
  align-items: start;
  grid-auto-rows: max-content;
}
</style>
