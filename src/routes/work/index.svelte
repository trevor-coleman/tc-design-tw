<script context='module'>



export async function load({
                               fetch,
                               page
                             }) {
    const res = await fetch(`/work.json`)
    console.log(res)
    return {
      props: {
        posts: await res.json()
      }
    }
  }
</script>

<script>
  import WorkPreview from '../../components/work/WorkPreview.svelte'
  import Card from '../../components/work/Card.svelte'
  import SectionTitle from '../../components/SectionTitle.svelte'
  import FilterButtons from '../../components/work/FilterButtons.svelte'
  import {fade,scale} from 'svelte/transition'
  import {flip} from 'svelte/animate'
  export let posts

  let filteredPosts = posts.map((p, i) => ({
    ...p,
    index: i
  }))
  let selected = 'all'

  const filterPosts = (event) => {
    console.log("index received filter", event.detail)
    const selection = event?.detail?.selection ?? "all"
    console.log(selection)
    filteredPosts = posts.map((p, i) => ({
      ...p,
      index: i
    }))
    const newPosts = filteredPosts.filter(item => item.category === selection
      || selection === 'all')
    selected = selection
    filteredPosts = newPosts
  }
  filterPosts('all')
  selected = selected

</script>

<div class='flex flex-col p-4'>
<!--  <div class='bg-postitblue mx-2 sm:mx-8'>-->
<!--    <h1 class='text-4xl font-medium underline m-4'>-->
<!--      Projects-->
<!--    </h1>-->
<!--  </div>-->
  <SectionTitle>Projects</SectionTitle>
  <FilterButtons on:filter={filterPosts} selected={selected}/>
  <div class=' mx-2 sm:mx-8 py-4'>
  <div
    class=' grid grid-cols-1 auto-rows-auto md:grid-cols-12 xl:grid-cols-12 gap-8'>

    {#each filteredPosts as post (post.slug)}
      <div
        class='{post.feature ?
"sm:col-span-12": "sm:col-span-6"} ' transition:fade="{{duration: 200}}"
        animate:flip="{{duration: 200}}"><Card post={post}/></div>
    {/each}

  </div>
  </div>
</div>
