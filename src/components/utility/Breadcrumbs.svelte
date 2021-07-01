<script lang='ts'>
  // noinspection TypeScriptCheckImport
  import { page } from '$app/stores'
  export let bg: string;

  let pieces: string[]
  $: pieces =
    $page.path.split('/')
         .filter(piece => piece)
  $: pieces.pop()

  let labels
  $: labels =
    pieces.map(piece => piece.replace(/-/g, ' ')
                             .replace(/\w\S*/g, function(txt) {
                               return txt.charAt(0)
                                         .toUpperCase() + txt.substr(1)
                                                             .toLowerCase()
                             }))


</script>

<div class='block text-sm text-[rgba(0,0,0,0.5)] z-5 {bg}'>
  {" // "}<a
    href='/'
    class='underline'>Home</a>
  {#if labels.length > 0}{" > "}{/if}
  {#each labels as label, index}
    <a
      href={`/${pieces[index]}`}
      class='underline'>{label}</a>
    {#if index < labels.length - 1}
      {" / "}
    {/if}
  {/each}
</div>

<style>

</style>
