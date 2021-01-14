<script>
  import Cards from './Cards.svelte';

  export let articles;
</script>

<section class="page-component page-column">
<h3>Latest Articles:</h3>
<Cards cards={articles.map(article => ({...article, link: {href: '/article/' + article.slug}}))} />
</section>

<style>
  h3 {
    font-size: 3rem;
  }
</style>
