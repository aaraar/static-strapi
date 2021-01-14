<script>
  import InfoCard from '../../components/organisms/InfoCard.svelte';
  import Hero from '../../components/organisms/Hero.svelte';
  import Footer from '../../components/Footer.svelte';
  import Header from '../../components/Header.svelte';

  export let data;

  const authors = data.authors.map(author => ({
    ...author,
    slug: author.title.toLowerCase().split(' ').join('_'),
    endpoint: 'author',
  }));
</script>

<Header title={'Article: ' + data.title} />
<main>
  <article>
    <Hero title={data.title} endpoint={data.cms} />
    <InfoCard title="Authors:" tags={authors} isSimple={true}/>
    <section class="page-column page-component">
      {@html data.body}
    </section>
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
