<script lang="ts">
  import { onMount } from 'svelte'
  import { can_take } from '../store'
  import loading from '../../assets/loading.gif'
  import { courses, getCourse } from "../courses";

  export let state: number;

  onMount(() => {
    (() => {
      const course_processed = new Set();

      setTimeout(() => {
        for(let i = 0; i < $courses.length; i++) {
          const course = $courses[i];

          if(course_processed.has(course)) continue;

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
              if(course.coreqs.length === 0) {
                $can_take.push({
                  isCoreq: false,
                  recommended: false,
                  name1: course.name,
                  credits1: course.credits,
                })
              }else {
                const coreq = getCourse(course.coreqs[0]);
                if(coreq) {
                  course_processed.add(coreq);

                  $can_take.push({
                    isCoreq: true,
                    recommended: false,
                    name1: course.name,
                    credits1: course.credits,
                    name2: coreq.name,
                    credits2: coreq.credits
                  })
                }
              }
            }
          }
        }

        state = 2;
      }, 2E3)
    })();
  });
</script>

<div class="flex justify-center items-center h-page">
  <img src={loading} alt="loading" class="w-10 h-10"/>
</div>
