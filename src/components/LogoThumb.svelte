<script lang='ts'>
  export let src:string;
  export let caption:string;
</script>

<div
  class='bg-white rounded-full max-h-min shadow-md  mx-2 mb-4'><figure
  class='flex flex-col w-24 h-24 items-center justify-center'>
  <img src={src} alt={caption}
       class='place-self-center w-8 h-8 object-cover'/>
  <figcaption
    class='mt-1 text-xs block h-[1.4rem] max-w-logoThumb leading-none flex flex-col items-center justify-center'>
    <div class='text-center'>{caption}</div></figcaption>
</figure>
</div>

<style>

</style>
