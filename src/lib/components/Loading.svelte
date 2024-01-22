<script lang="ts">
  import { onMount } from 'svelte'
  import { selected_courses } from '../store'
  import loading from '../../assets/loading.gif'

  export let state: number;

  onMount(() => {
    (() => {
      state = 2;
    })();
  });
</script>

<div class="flex justify-center items-center h-page">
  <img src={loading} alt="loading" class="w-10 h-10"/>
</div>
