<script lang="ts">
  import { CourseTag } from './';
  import { can_take } from '../store'

  export let state: number;
</script>


<div>
  <button on:click={() => {
    state = 0;
  }} 
  class="bg-quaternary text-white p-2 rounded-md hover:bg-tertiary">
    Go Back
  </button>
  <div class="flex items-center gap-x-2 gap-y-4 flex-wrap">
    {#each $can_take as { recommended, isCoreq, name1, credits1, name2, credits2 }}
      <div class={`relative ${recommended ? 'border-4 border-yellow-400 px-1 pb-1 pt-4 rounded-xl' : ''}`}>
        {#if recommended}
          <div class="absolute bg-yellow-400 w-fit p-1 rounded-md -top-4 left-1/2 transform -translate-x-1/2">
            <p class="text-xs text-white">Recommended</p>
          </div>
        {/if}
        {#if isCoreq}
          <div class="flex flex-col items-center gap-2 bg-tertiary p-2 rounded-lg">
            <p class="text-white">Corequisites</p>
            <CourseTag course={name1} credits={credits1} />
            <CourseTag course={name2} credits={credits2} />
          </div>
        {:else}
            <CourseTag course={name1} credits={credits1} />
        {/if}
      </div>
    {/each}
  </div>
</div>
