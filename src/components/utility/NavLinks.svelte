<script>
  import { page } from '$app/stores';

  const links = [
    {url: "/", text: "Home"},
    {url: "/projects/", text: "Projects"},
  ]

</script>

{#each links as { url, text }}
    {#if $page.path.toLowerCase() === url}
      <span class='font-medium'>{text}</span>
      {:else}
    <a href={url}
       class='underline font-light'>{text}</a>
      {/if}
{/each}

