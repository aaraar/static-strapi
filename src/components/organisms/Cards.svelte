<script>
  import Card from '../molecules/Card.svelte';
  export let cards, endpoint;
</script>

<section class="page-component page-column">
  {#each cards as card}
      <Card link={card.link || null} title={card.title} body={card.excerpt || card.body} image={card.image} endpoint={endpoint} />
  {/each}
</section>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
  }
</style>
