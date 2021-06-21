<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import {scale} from 'svelte/transition'

  export let category;
  export let selected;
  export let expanded;
  export let label;
  export let state: "hidden" | "selected" | "visible";

  $: state = category === selected ? "selected" :
      expanded ? "visible":"hidden"

  $: console.log(`${category} is ${state} -- [${selected} | ${expanded}]`)

  export let borderColor;
  export let backgroundColor;

  const dispatch = createEventDispatcher();

  const handleClick = ()=> {
    if(state === "selected") {
      console.log("button - toggleExpand");
      toggleExpand();
    }

    if(state==="visible") {
      filterPosts(category);
      toggleExpand();
    }
  }

  const toggleExpand = ()=> {
    dispatch('expand', {expanded: !expanded})
  }

  const filterPosts = (selection) => {
    console.log(`FILTER - ${selection} - ${selected}`)
    dispatch('filter', { selection });
  }

</script>
<button
  on:click={handleClick}
  class='w-full {state === "selected" ?
      backgroundColor : "bg-none"} border-4 {borderColor} px-4 py-2  rounded-lg shadow-md hover:{backgroundColor} hover:shadow-lg hover:font-medium active:shadow-none active:filter active:contrast-50'>
  {label}
</button>
