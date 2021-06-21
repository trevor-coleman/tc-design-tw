<script>
  import { createEventDispatcher } from 'svelte'
  import FilterButton from './FilterButton.svelte'
  import {flip} from 'svelte/animate'
  import {scale, fade, blur} from 'svelte/transition'


  export let selected;

  const dispatch = createEventDispatcher()

  let activeFilter = 'all'
  let expanded = false
  let selectedOption;

  const toggleExpand = () => {
    $: expanded = !expanded;
    console.log("parent - toggleExpanded", expanded);
  }

  let uid = 1;
  const allOptions = [
    {
      uid: uid++,
      category : 'development',
      label : 'Development',
      borderColor : 'border-postityellow',
      backgroundColor : 'bg-postityellow',

    },
    {
      uid: uid++,
      category : 'design',
      label : 'Collaborative Design',
      borderColor : 'border-postitpink',
      backgroundColor : 'bg-postitpink',

    },
    {
      uid: uid++,
      category : 'mentoring',
      label : 'Advising / Mentoring',
      borderColor : 'border-postitgreen',
      backgroundColor : 'bg-postitgreen',

    },
    {
      uid: uid++,
      category : 'all',
      label : 'All',
      borderColor : 'border-gray-200',
      backgroundColor : 'bg-gray-200',
    },
  ]

  let visibleOptions;

  selectedOption = allOptions.find(item=>item.category === selected);
  $: visibleOptions =
    [...allOptions.filter(item => item.category !== selected && expanded)];



</script>


<div class='max-w-sm relative inset-0'>
  <div class='relative inset-0'><FilterButton
    selected={selected}
    expanded={expanded}
    category={selectedOption.category}
    label={selectedOption.label}
    borderColor={selectedOption.borderColor}
    backgroundColor={selectedOption.backgroundColor}
    on:filter
    on:expand={toggleExpand}
  />
  {#if expanded}
    <div transition:fade
         class='absolute top-12 bg-white z-10 w-full shadow-md rounded-md p-4'>
  {#each visibleOptions as option (option.uid)}
    <div
      transition:fade
      class='relative inset-0 py-2'
       id={option.uid}><FilterButton
    selected={selected}
    expanded={expanded}
    category={option.category}
    label={option.label}
    borderColor={option.borderColor}
    backgroundColor={option.backgroundColor}
    on:filter
    on:expand={toggleExpand}
  /></div>

    {/each}
  </div>{/if}
  </div>
</div>
