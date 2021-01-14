<script>
  export let image, endpoint;
</script>

  <figure>
    <picture class="responsive-image__picture">
<!--      <source srcset={image.responsiveImage.webpSrcSet} type="image/webp" />-->
<!--      <source srcset={image.responsiveImage.srcSet} />-->
      <img
        class="responsive-image__image"
        src={endpoint ? endpoint + image.url : image.url}
        alt={image.alternativeText}
        loading="lazy" />
    </picture>
  </figure>

<style>
  figure {
    padding-top: calc(9 / 16 * 100%);
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: var(--border-radius);
    margin: 0;
  }

  picture {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }

  img {
    width: 100%;
  }
</style>
