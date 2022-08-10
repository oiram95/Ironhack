<template>
  <div id="excercise1">
          <h1>{{ 2 + 2 + 2 }}</h1>
        </div>
        <div id="excercise2">
          <h1 v-if="propertyShow === true">Show if prop is set to true</h1>
          <h1 v-if="propertyShow">Show if prop is set to true</h1>
        </div>
        <div id="excercise3">
          <div v-for="(post, index) in posts" :key="index">
            <ul>
              <li>
                <h1>Post Title: {{ post.title }}</h1>
                <h4>Post Description: {{ post.description }}</h4>
                <p>Post Content: {{ post.content }}</p>
              </li>
            </ul>
          </div>
        </div>

        <div id="noemis-example" v-bind:style="backStyle">
          <h1>Iteración 5</h1>
          <button :style="buttonStyle" @click="changeColor2">
            Change color to {{ butCol }}
          </button>
        </div>

        <div id="background-color-change-excercise">
          <div :class="isLoading ? 'is-orange' : 'is-red'">hello</div>
          <button @click="changeColor">toggle</button>
        </div>
      </div>
</template>

<script>
export default {
    data() {
        return {
        //LAB CHANGE COLOR OF BACKGROUND
      isLoading: true,
      propertyShow: false,
      // Iterating an array of objects
      posts: [
        {
          title: "Is hip hop dead?",
          description: "A conversation with the member of the wu tang clan RZA",
          content: "Lorem Ipsum Dolo Metus",
        },
        {
          title: "Why is Malaga so damn hot in the summer?",
          description: "My man AJarko cannot concentrate with all of this heat",
          content: "Lorem Ipsum Dolo Metus",
        },
        {
          title: "Is Barcelona affordable for up and coming students? ",
          description: "C.R.E.A.M [Cash Rules Everything Around Me]",
          content: "Lorem Ipsum Dolo Metus",
        },
      ],

      //NOEMIS PROP
      buttonStyle: {
        backgroundColor: "yellow",
        border: "1px solid darkgreen",
        marginTop: "0",
        padding: "20px",
        borderRadius: "30px",
      },
      butCol: "pink",

      backStyle: {
        backgroundColor: "yellow",
        border: "1px solid darkgreen",
        marginTop: "0",
        paddingBottom: "50px",
        width: "100%",
      },
    }
    },
methods: {
      // Function to change Color of background
    changeColor() {
      this.isLoading = !this.isLoading;
    },

    changeColor2() {
      if (this.backStyle.backgroundColor == "yellow") {
        this.backStyle.backgroundColor = "pink";
        this.buttonStyle.backgroundColor = "pink";
        this.butCol = " orange ";
      } else if (this.backStyle.backgroundColor == "pink") {
        this.backStyle.backgroundColor = "orange";
        this.buttonStyle.backgroundColor = "orange";
        this.butCol = " yellow ";
      } else {
        this.backStyle.backgroundColor = "yellow";
        this.buttonStyle.backgroundColor = "yellow";
        this.butCol = " pink ";
      }
    },
}
}
</script>

<style>

.is-orange {
  background-color: orange;
  min-width: 100vw;
  min-height: 4rem;
}
.is-red {
  background: red;
  min-width: 100vw;
  min-height: 4rem;
}
</style>