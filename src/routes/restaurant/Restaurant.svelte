<script>
  export let data;
</script>

<h1>{data.title}</h1>
<p>{data.description}</p>
<ul>
  {#each data.categories as category}
    <li><a href={`/category/${category.id}`}>{category.title}</a></li>
  {/each}
</ul>
