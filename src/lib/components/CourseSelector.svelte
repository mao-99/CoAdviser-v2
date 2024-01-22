<script lang="ts">
  import { courses, getCourse } from "../courses";
  import type { Course } from "../types";
  import { selected_courses } from "../store";

  export let state: number;
  
  function handleClick(course: Course) {
    course.taken = !course.taken;

    if (!$selected_courses.includes(course)){
        $selected_courses.push(course);
    }

    $courses = $courses;
  }

  function clearSelections(){
    for (let i = 0; i < $courses.length ; i++){
      $courses[i].taken = false;
    }
    $selected_courses = [];
    $courses = $courses;
  }

  function handleSubmit(){
    $selected_courses = [...$selected_courses.filter((course: Course) => course.taken)];
    $selected_courses = $selected_courses;

    state = 1;
  }
</script>

<h2 class="font-bold ps-20 text-xl mb-4">Select Classes Taken</h2>
<div class="text-2xl px-20">
  <div class="flex flex-wrap gap-x-4 gap-y-2">
    {#each $courses as course}
      <button on:click={() => handleClick(course)} class="text-lg font-semibold py-2 px-4 rounded-lg {course.taken ? 'bg-tertiary text-white': 'bg-secondary hover:bg-tertiary hover:text-white text-black'}">
        {course.name}
      </button>
    {/each}
  </div>
  <div class="mt-16">
    <button on:click={() => handleSubmit()} class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
      Get Classes
    </button>
    <button on:click={clearSelections} class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
      Clear
    </button>
  </div>
</div>
