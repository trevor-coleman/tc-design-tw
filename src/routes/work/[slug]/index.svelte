<script context='module'>
  export async function load({ fetch, page }) {
    const res = await fetch(`/work/${page.params.slug}.json`);
    return {
      props: {
        posts: await res.json(),
      },
    };
  }
</script>

<script>
  export let posts;
</script>

<div class='border-link border-2 p-2 w-[80vw] prose'>
<pre>{JSON.stringify(posts, null, 2)}</pre>
</div>
<div class='prose'>
{@html posts.html}
</div>
