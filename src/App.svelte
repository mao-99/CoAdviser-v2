<script lang="ts">
  import "./app.css";
  import { courses } from "./lib/courses";
</script>

<main>
  <!-- Render checkboxes for each course -->
{#each courses as course (course.id)}
<div>
  <label>
    <input type="checkbox" bind:checked={course.taken} on:click={() => course.taken = !course.taken} />
    {course.name}
  </label>
</div>
{/each}
<button on:click={() => console.log(courses)}>
  Log Courses
</button>
</main>
