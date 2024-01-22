<script lang="ts">
  import type { Course } from "../types"
  import { onMount } from 'svelte'
  import { selected_courses, can_take } from '../store'
  import loading from '../../assets/loading.gif'
  import { courses, getCourse } from "../courses";

  export let state: number;

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

    // can_take = output;
  }

  onMount(() => {
    (() => {
      for(let i = 0; i < $courses.length; i++) {
        const course = $courses[i];
      }
      setTimeout(() => {
        /*$selected_courses.forEach((course: Course) => {
          if(course.coreqs.length === 0){
            $can_take.push({
              isCoreq: false,
              recommended: false,
              name1: course.name,
              credits1: course.credits
            })
          }else {
            const coreq = getCourse(course.coreqs[0]);
          }
        })*/
      }, 3E3)
      state = 2;
    })();
  });
</script>

<div class="flex justify-center items-center h-page">
  <img src={loading} alt="loading" class="w-10 h-10"/>
</div>
