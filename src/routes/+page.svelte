<script lang="ts">
    import "../app.css";
    import { Results, CourseSelector, Loading } from '../lib/components'
  
    let state = 0;
  </script>
  
  <main class="p-4 bg-primary min-h-lvh">
    {#if state == 0}
      <CourseSelector bind:state />
    {:else if state == 1}
      <Loading bind:state />
    {:else if state == 2}
      <Results bind:state />
    {/if}
  </main>
  