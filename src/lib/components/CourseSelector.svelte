<script lang="ts">
  import { courses, getCourse } from "../courses";
  import type { Course } from "../types";
  import { selected_courses } from "../store";

  export let state: number;
  
  function handleClick(course: Course) {
    function checkPrereqs(course: Course) {
      $selected_courses.add(course);
      course.taken = true;

      if(course.prereqs.length === 0) return;

      for(let i = 0; i < course.prereqs.length; i++) {
        const prereq_course = getCourse(course.prereqs[i]);

        if(prereq_course && !prereq_course.taken) {
          handleClick(prereq_course);
        }
      }
    }

    function uncheckSubseqs(course: Course) {
      for(let i = 0; i < $courses.length; i++) {
        if($courses[i].prereqs.includes(course.id)) {
          $courses[i].taken = false;
          $selected_courses.delete($courses[i]);

          uncheckSubseqs($courses[i]);
        }
      }
    }

    if(course.taken) {
      course.taken = false;
      $selected_courses.delete(course);
      uncheckSubseqs(course)
    } else checkPrereqs(course);

    $courses = [...$courses]
  }

  function clearSelections(){
    for (let i = 0; i < $courses.length ; i++){
      $courses[i].taken = false;
    }
    $selected_courses = new Set();
    $courses = $courses;
  }

  function handleSubmit(){
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
