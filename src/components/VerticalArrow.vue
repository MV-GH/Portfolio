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

  header {
    background-image: url("/src/assets/images/arrowhead.jpg");
    transform: rotate(180deg);
    background-size: 40px;
    background-repeat: no-repeat;
    width: inherit;
    height: 40px;
    background-color: transparent;
  }
  main {
    border-left: black solid 2px;
    border-right: black solid 2px;
    width: inherit;
    box-sizing: border-box;
    height: calc(100% - 80px);
    background-color: whitesmoke;
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