<script>
  import List from './molecules/List.svelte';

  export let lists, contact, copyright;
</script>

<footer>
  <section>
    {#each lists as list}
      <List items={list.items} />
    {/each}
  </section>
  <section>
    {@html contact}
  </section>
  <footer>
    <p>&copy; {copyright}</p>
  </footer>
</footer>

<style>
  footer {
    padding: 10px;
  }
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
    margin: 0 auto;
    max-width: 1000px;
  }
  footer footer {
    position: fixed;
    bottom: 0;
    background-color: var(--background-color-alpha);
  }
</style>
