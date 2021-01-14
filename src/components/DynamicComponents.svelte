<script>
  import Hero from './organisms/Hero.svelte';
  import Paragraph from './organisms/Paragraph.svelte';
  import ImageBanner from './organisms/ImageBanner.svelte';
  import LatestArticles from './organisms/LatestArticles.svelte';
  import Cards from './organisms/Cards.svelte';

  export let component, endpoint, categories, cases;
</script>

{#if component.__typename === 'ComponentOrganismsHero'}
  <Hero class="page-component" title={component.title} body={component.body} call_to_actions={component.call_to_action} image={component.background_image} endpoint={endpoint}/>
{/if}
{#if component.__typename === 'ComponentOrganismsParagraph'}
  <Paragraph class="page-component" title={component.title} body={component.body} media={component.media} endpoint={endpoint}/>
{/if}
{#if component.__typename === 'ComponentOrganismsImageBanner'}
  <ImageBanner title={component.title} image={component.image} endpoint={endpoint} />
{/if}
{#if component.__typename === 'ComponentOrganismsCards'}
  <Cards cards={component.items} endpoint={endpoint} />
{/if}

