<script>
  import ListItem from '../atoms/ListItem.svelte';
  export let items, color
</script>

<ul>
  {#each items as item}
    <ListItem title={item.title} text={item.text} color={color} />
  {/each}
</ul>
<style>
  ul {
    padding-left: 0;
  }
</style>
