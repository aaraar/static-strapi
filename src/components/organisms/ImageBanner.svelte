<script>
  export let title, image, endpoint;
</script>

<section class="page-component banner" style="background-image: url({endpoint ? endpoint + image.url : image.url})">
    <h3>{title}</h3>
</section>

<style lang="scss">
  section {
    display: grid;
    place-items: center;
    text-align: center;
    height: 300px;
    background-position: center center;
    background-size: cover;
  }
  h3 {
    font-size: 3rem;
    color: white;
    width: 80%;
  }
</style>
