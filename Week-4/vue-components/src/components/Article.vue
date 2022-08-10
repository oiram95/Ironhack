<template>
  <div>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <h3>Likes - {{ likes }}</h3>
    <h3>Published {{ isPublished }}</h3>
  </div>
</template>

<script>
export default {
  name: "Article",
  //   props: ["title", "likes", "isPublished"],
  props: {
    title: {
      type: String,
      required: false,
      default: "Article default title",
    },
    likes: {
      type: Number,
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
  },
  inheritAttrs: false,
};
</script>

<style></style>
