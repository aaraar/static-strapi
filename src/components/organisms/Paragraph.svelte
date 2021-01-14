<script>
  import ResponsiveImage from '../molecules/ResponsiveImage.svelte';
  export let title, body, media, endpoint
</script>

<div class="paragraph page-component">
  <section class="page-column" class:hasMedia={media}>
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
    {#if media}
      {#if /image\/.*/.test(media.mime)}
        <ResponsiveImage image={media} endpoint={endpoint}/>
      {/if}
    {/if}
  </section>
</div>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    max-width: 800px;
    &.hasMedia {
      max-width: 1200px;
      @media (min-width: 1200px) {
        grid-template-columns: 2fr 1fr;
      }
    }
  }
  img {
    object-fit: cover;
  }
</style>
