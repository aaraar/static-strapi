<script>
  import Footer from '../../components/Footer.svelte';
  import DynamicComponents from '../../components/DynamicComponents.svelte';
  import Header from '../../components/Header.svelte';
  import LatestArticles from '../../components/organisms/LatestArticles.svelte';

  export let data;
</script>

<Header title={data.title} />
<main>
  <div class="page-components">
    {#each data.components as component}
      {#if component.__typename === 'ComponentOrganismsLatestArticles'}

        <LatestArticles articles={data.articles.map(author => ({ ...author, endpoint: 'article' }))} />
      {/if}
      <DynamicComponents component={component} endpoint={data.cms} categories={data.categories} cases={data.cases}/>
    {/each}
  </div>
</main>
<Footer lists={data.footer.lists} contact={data.footer.contact} copyright={data.footer.copyright}/>
