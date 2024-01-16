<script lang="ts">
  import "./app.css";
  import { courses } from "./lib/courses";
    import type { Course } from "./lib/types";

    // Function to handle checkbox changes
    function handleCheckboxChange(course:Course) {
      // Update the 'taken' property of the course based on checkbox state
      course.taken = !course.taken;
    }
</script>

<main>
  <!-- Render checkboxes for each course -->
{#each courses as course (course.id)}
<div>
  <label>
    <input type="checkbox" bind:checked={course.taken} on:change={() => handleCheckboxChange(course)} />
    {course.name}
  </label>
</div>
{/each}
</main>
