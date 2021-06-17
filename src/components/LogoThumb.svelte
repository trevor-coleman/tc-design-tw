<script lang='ts'>
  export let src:string;
  export let caption:string;
</script>

<div
  class='max-h-min mx-2 mb-4'><figure
  class='flex flex-col w-24 h-24 items-center justify-center'>
  <div
    class='bg-white rounded-full h-18 w-18 p-2 place-self-center'>
    <img src={src} alt={caption}
       class='place-self-center w-12 h-12 bg-white p-2 object-cover '/>
  </div>
  <figcaption
    class='mt-1 text-sm block max-w-logoThumb leading-none flex flex-col items-center justify-center'>
    <div class='text-center'>{caption}</div></figcaption>
</figure>
</div>

<style>

</style>
