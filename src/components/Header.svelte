<script>
  export let title, subtitle, cta, image, cms;
</script>

<div class="page-component hero">
  <div class="hero__image">
    <img src={image.url} alt={image.alternativeText}>
  </div>
  <section>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <a href={cta.url}>{cta.text}</a>
  </section>
</div>

<style>
  .hero {
    position: relative;
  }
  .hero__image {
    filter: blur(2px) saturate(50%);
  }
  img {
    width: 100%;
    border-radius: 50px;

    object-fit: cover;
  }
  h1, p, a {
    color: white;
    width: 80%;
  }
  section {
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
