<script>
  export let title, text, color = 'white'
</script>

<li>
  <h3>{title}</h3>
  <p style="color: {color};">{text}</p>
</li>

<style>
  li {
    list-style: none;
  }

  li h3 {
    font-size: 1.3rem;
    color: var(--primary-color);
    font-weight: normal;
    margin-bottom: 0;
  }

  li p {
    font-size: 1rem;
    margin-top: 0;
  }
</style>
