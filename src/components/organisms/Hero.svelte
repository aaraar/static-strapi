<script>
  export let title, body, call_to_actions, image, endpoint;
</script>

<section
  class="page-component"
  style="{ endpoint && image ?
   `background-image: url(${endpoint}${image.url});` :
    image ?
     `background-image: url(${image.url});` :
      'background: var(--primary-color);'}"
>
  <div class="page-column">
    <h1>{title}</h1>
    {#if body}
      <p>{body}</p>
    {/if}
    {#if call_to_actions}
      <ul>
        {#each call_to_actions as cta}
          <a class="button button--ghost" href={cta.link.href}>{cta.link.body}</a>
        {/each}
      </ul>
    {/if}
  </div>
</section>

<style lang="scss">
  section {
    height: 500px;
    display: grid;
    place-items: center;
    background-position: center center;
    background-size: cover;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  h1, p, a {
    color: white;
    width: 80%;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
