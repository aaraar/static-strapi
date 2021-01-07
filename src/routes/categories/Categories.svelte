<script>
  export let data;
</script>

<h1>{data.title}</h1>
<ul>
  {#each data.restaurants as restaurant}
    <li><a href={`/restaurant/${restaurant.id}`}>{restaurant.title}</a></li>
  {/each}
</ul>
