<script lang='ts'>
  export let icon:string;
  export let alt:string;
  export let href:string;
</script>

<a href={href}
   target='_blank'><img
  class='w-full object-fit bg-white rounded-md border-2 border-black block w-12 h-12 p-2 m-2 shadow-md hover:shadow-lg hover:border-link hover:bg-linklighter active:shadow-none active:border-linkdarker'
  src={icon}
  alt={alt} /></a>

<style>

</style>
