<template>
  <div class="Arrow">
    <header></header>
    <main></main>
    <footer></footer>
  </div>
</template>

<style scoped lang="scss">
.Arrow {
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 100%;

  header {
    background-image: url("/src/assets/images/arrowhead.jpg");
    image-orientation: flip;
    background-size: 40px;
    background-repeat: no-repeat;
    width: inherit;
    height: 40px;
  }
  main {
    border-left: black solid 1px;
    border-right: black solid 1px;
    width: inherit;
    height: calc(100% - 80px);
  }
  footer{
    background-image: url("/src/assets/images/arrowhead.jpg");
    background-size: 40px;
    background-repeat: no-repeat;
    width: inherit;
    height: 40px;
  }
}
</style>