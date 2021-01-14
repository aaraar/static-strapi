<script>
  import List from '../molecules/List.svelte';
  export let title, body, list, tags, isSimple = false
</script>

<article class="page-component page-column info-card" class:category-info={isSimple}>
  <section>
    <h2>{title}</h2>
    {#if body}
      <p>{body}</p>
    {/if}
  </section>
  {#if list}
    <section>
      <List items={list.items}/>
    </section>
  {/if}
  {#if tags}
    <section class="tags">
      <ul>
        {#each tags as tag}
          <li><a class="button button--ghost button--small" href="/{tag.endpoint}/{tag.slug}">{tag.title}</a></li>
        {/each}
      </ul>
    </section>
  {/if}
</article>

<style lang="scss">
  article {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;
    border-radius: var(--border-radius);
    background-color: lighten(#222222, 10%);
    max-width: 800px;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.5);
    &.category-info {
      display: flex;
      flex-wrap: wrap;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin-right: 10px;
  }
  .tags {
    column-span: all;
  }
</style>
