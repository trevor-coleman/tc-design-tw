<script lang='ts'>

  export let color:PostItColor|undefined;
  console.log(color);

  let colorClass = `bg-postit${color ?? "yellow"}`;

  console.log(colorClass);
</script>

<div class='p-4'>
  <div
    class='shadow-md w-48 h-48 flex items-center justify-center {colorClass}'>
  <p class='text-2xl'>Design</p>
  </div>
</div>

<style>

</style>
