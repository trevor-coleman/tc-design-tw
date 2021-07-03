<script>
  import Breadcrumbs from './utility/Breadcrumbs.svelte'
  import Section from './sections/Section.svelte'

  export let bg;
  export let color;
  export let title;
  export let description;
  export let large;

</script>
<div class='{bg} -mt-4 pt-8 inline-block w-full'>
  <div class='px-8'>
    <Breadcrumbs />
  </div>
<Section
  topSlope={0}
  bottomSlope={-4}
  title={title}
  bgcolor='{color}'
  description={description}
  header={large}
>
</Section>
</div>

