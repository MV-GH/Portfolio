<template>
  <header>
    <h1>Portfolio</h1>
  </header>
  <main>
    <aside><nav><p>nav</p></nav></aside>
    <article><p>Main</p></article>
    <div><p>t</p></div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  body {
    background-image: $base-gradient2;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Montserrat", sans-serif;
    color: whitesmoke;
  }
</style>

<style scoped lang="scss">
  header {
    text-align: center;
    h1{
      font-size: 3rem;
    }
  }
  main{
    display: flex;
    flex-direction: row;
    aside{
      flex-basis: 15%;
    }
    article {
      flex-basis: 70%;
    }
    div{
      flex-basis: 15%;
    }
  }
</style>