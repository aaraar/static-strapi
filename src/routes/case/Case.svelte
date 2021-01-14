<script>
  import InfoCard from '../../components/organisms/InfoCard.svelte';
  import Hero from '../../components/organisms/Hero.svelte';
  import Footer from '../../components/Footer.svelte';
  import DynamicComponents from '../../components/DynamicComponents.svelte';

  export let data;

  const categories = data.categories.map(category => ({...category, slug: category.id, endpoint: 'category'}))
</script>

<Header title={'Case: ' + data.title} />
<main>
  <Hero title={data.title} image={data.preview} endpoint={data.cms} />
  <InfoCard title={data.info.title} body={data.info.body} list={data.info.list} tags={categories}/>
  <article>
    {#each data.body as component}
      <DynamicComponents component={component} endpoint={data.cms} />
    {/each}
  </article>
</main>
<Footer lists={data.footer.lists} contact={data.footer.contact} copyright={data.footer.copyright}/>

<style lang="scss" global>
  header {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 54px;
    padding: 0 32px;
    align-items: center;
    z-index: 1;
    background-color: var(--background-color-alpha);
    h1 {
      font-size: 3rem;
    }
  }
  .info-card {
    margin-top: -200px;
  }
</style>
