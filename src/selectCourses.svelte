<script lang="ts">
  import { courses, getCourse } from "./lib/courses";
  import type { Course } from "./lib/types";
  import { selected_courses } from "./lib/store";
  import { writable } from "svelte/store";
  
  export const selected = writable<boolean>(false);

  function handleClick(course: Course) {
    course.taken = !course.taken;
    if (!$selected_courses.includes(course)){
        $selected_courses.push(course);
    }
    console.log(course.name, course.taken);
    $courses = $courses;
    console.log($selected_courses);
  }

  function clearSelections(){
    for (let i = 0; i < $courses.length ; i++){
        if ($courses[i].taken){
            $courses[i].taken = !$courses[i].taken;
        }
    }
    $selected_courses = [];
    $courses = $courses;
  }

  function handleSubmit(){
    $selected_courses = [...$selected_courses.filter((course) => course.taken)];
    console.log($selected_courses);
    $selected = !$selected;
    console.log($selected)
  }

</script>

<style>

</style>


<main class="main mt-4 rounded-lg p-8 text-2xl mx-auto grid grid-cols-4 gap-8">
    {#each $courses as course}
            <button on:click={() => handleClick(course)} class="hover:bg-secondary text-black font-semibold hover:text-white py-2 px-4 border border-[#7FC7D9] hover:border-transparent rounded my-2 col-span-1 {course.taken ? 'bg-secondary': 'bg-transparent'}">
              {course.name}
            </button>
    {/each}
    <div class="grid grid-cols-4 col-span-4 gap-8">
        <button on:click={() => handleSubmit()} class=" hover:bg-secondary text-black font-bold hover:text-white py-2 px-4 border border-[#7FC7D9] hover:border-transparent rounded col-span-1 col-start-2 mt-4">
            Get Classes            
        </button>
        <button on:click={() => clearSelections()} class=" hover:bg-secondary text-black font-bold hover:text-white py-2 px-4 border border-[#7FC7D9] hover:border-transparent rounded col-span-1 col-start-3 mt-4">
            Clear Selections           
        </button>
    </div>
  </main>
  

