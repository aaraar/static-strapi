<script>
  import Header from '../../components/Header.svelte';
  import Testimonial from '../../components/Testimonial.svelte';

  export let data;
</script>

<div class="page-components">
  <h1>{data.Title}</h1>
  {#each data.components as component}
    {#if component.__typename === 'ComponentPageComponentHeader'}
      <Header class="page-component" title={component.title} subtitle={component.subtitle} cta={component.link} image={component.image} cms={data.cms}/>
    {/if}
    {#if component.__typename === 'ComponentPageComponentTestimonial'}
      <Testimonial class="page-component" title={component.title} body={component.body} image={component.avatar} cms={data.cms}/>
    {/if}
  {/each}
</div>

<style global>
  .page-component {
    margin-bottom: 30px;
  }
</style>
