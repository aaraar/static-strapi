<script>
  export let templateHtml, settings;
</script>

<style global>
  :root {
    --background-color: rgb(34,34,34);
    --background-color-alpha: rgba(34,34,34,0.75);
    --primary-color: #0071e3;
    --text-color: #ffffff;
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
    --border-radius: 30px;
  }

  .page-component {
    padding: 40px;
    margin-bottom: 100px;
  }

  .page-column {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
</svelte:head>
  {@html templateHtml}

