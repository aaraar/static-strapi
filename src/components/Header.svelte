<script>
  export let title;
</script>

<header>
  <a href="/">🏠</a>
  <h1>{title}</h1>
  <div></div>
</header>


<style lang="scss">
  header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 54px;
    padding: 0 32px;
    align-items: center;
    z-index: 1;
    background-color: var(--background-color-alpha);
    h1 {
      font-size: 2rem;
    }
  }
</style>
