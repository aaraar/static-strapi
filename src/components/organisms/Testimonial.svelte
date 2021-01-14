<script>
  export let title, body, image, cms;
</script>

<div class="page-component testimonial">
  <div class="testimonial__image-container">
    <div class="testimonial__image">
      <img src={image.url} alt={image.alternativeText}>
    </div>
  </div>
  <section>
    <h2>{title}</h2>
    <p>{body}</p>
  </section>
</div>

<style>
  .testimonial {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .testimonial__image {
    height: 0;
    padding-top: calc(1 / 1 * 100%);
    overflow: hidden;
    position: relative;
    border-radius: 100%;
    border: solid white 5px;
    box-shadow: 0 0 0 1px black;
  }
  .testimonial__image-container {
    width: 150px;
    margin-right: 20px;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  p {
    display: block;
    padding-left: 5px;
    border-left: 2px solid #06395a7F;
  }
</style>
