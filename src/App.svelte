<script lang="ts">
  import "./app.css";
  import { courses, getCourse } from "./lib/courses";
  import type { Course } from './lib/types';
  import SelectCourses from "./selectCourses.svelte";

  let can_take: string[]  = [];

  function handleClick(course: Course) {
    function checkPrereqs(course: Course) { // depth first search
      if(course.prereqs.length === 0) return;

      course.taken = true;
      console.log(course)

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
          uncheckSubseqs($courses[i]);
        }
      }
    }

    if(course.taken) {
      course.taken = false;
      uncheckSubseqs(course);
    }
    else checkPrereqs(course);

    $courses = [...$courses];
  }

  function generate() {
    const output: string[] = [];

    for(let i = 0; i < $courses.length; i++) {
      const course = $courses[i];

      if(!course.taken) {
        let all_checked = true;
        for(let j = 0; j < course.prereqs.length; j++) {
          const prereq = getCourse(course.prereqs[j]);
          if(prereq && !prereq.taken) {
            all_checked = false;
            break;
          }
        }

        if(all_checked) {
          output.push(course.name);
        }
      }
    }

    can_take = output;
  }

  function clear() {
    for(let i = 0; i < $courses.length; i++) {
      $courses[i].taken = false;
    }

    can_take = [];

    $courses = [...$courses];
  }
</script>

<main class=" bg-primary">
  {#each $courses as course (course.id)}
    <div>
      <label>
        <input type="checkbox" checked={course.taken} on:click={() => handleClick(course)} />
        {course.name}
      </label>
    </div>
  {/each}
  <div class="flex gap-5">
    <button class="bg-zinc-300 p-2 mt-4 rounded-lg hover:bg-zinc-400" on:click={generate}>
      Generate
    </button>
    <button class="bg-red-400 p-2 mt-4 rounded-lg hover:bg-red-500 text-white" on:click={clear}>
      Clear
    </button>
  </div>
  {#if can_take.length > 0}
    <div class="flex flex-wrap mt-4">
      {#each can_take as course}
        <p class="w-fit me-5">{course}, </p>
      {/each}
    </div>
  {/if}

    <SelectCourses></SelectCourses>
</main>
