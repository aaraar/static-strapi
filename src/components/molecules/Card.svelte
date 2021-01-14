<script>
  export let title, body, image, link, endpoint
</script>

<article class:hasLink={link}>
  {#if image}
    <img height="300" src={endpoint ? endpoint + image.url : image.url} alt="">
  {:else}
    <div height="300" style="background-color: var(--primary-color);"></div>
  {/if}
  <section>
    <h3>
      {#if link}
        <a href={link.href}>{title}</a>
      {:else}
        {title}
      {/if}
    </h3>
    <p>{body}</p>
  </section>
</article>

<style lang="scss">
  article {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius);
    background-color: #3c3c3c;
    overflow: hidden;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    &.hasLink:hover {
      transform: translateY(-2px);
      box-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    }
  }
  section {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  a {
    text-decoration: none;
    color: var(--text-color);
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
