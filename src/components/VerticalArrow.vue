<template>
  <div class="Arrow">
    <header>≫</header>
    <main></main>
    <footer>≫</footer>
  </div>
</template>

<style scoped lang="scss">
.Arrow {
  display: flex;
  flex-direction: column;
  width: 40px;


  header {
    color: whitesmoke;
    //text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
    width: 30px;
    height: 40px;
    font-size: 40px;

    transform: rotate(270deg);

  }
  main {
    margin: 0 auto;
    border-left: whitesmoke solid 2px;
    border-right: whitesmoke solid 2px;
    width: 50%;
    box-sizing: border-box;
    height: calc(100% - 80px);
    background-color: transparent;
  }
  footer{
    padding-right: 45px;
    transform: rotate(90deg);
    font-size: 40px;
  }
}
</style>