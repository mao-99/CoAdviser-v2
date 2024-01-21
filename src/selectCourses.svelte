<script>
  import { courses, getCourse } from "./lib/courses";
  import { handleClick } from "./lib/selectCourses";

  function distributeClasses(){
    const rows = [];
    let currentIndex = 0;
    let rowAlternator = 0;
    let rowIndex;

    while(currentIndex < $courses.length){
        const rowLength = rowAlternator % 2 === 0 ? 4 : 3;
        const rowClasses = $courses.slice(currentIndex, currentIndex + rowLength);
        rows.push(rowClasses);
        currentIndex += rowLength;
        rowAlternator += 1;
    }

    return rows;
  }
</script>

<style>
 .coursesSection{
    justify-content: center;
    margin: 0  auto;
 }
 button{
    margin-bottom: 1rem;
 }
 .main{
    margin: 0 auto;
 }
 svg{
    margin: 0 auto;
 }
</style>


<main class="main mt-4 w-2/3 bg-dark rounded-lg p-4 text-2xl">
    {#each distributeClasses() as row}
      <div class="flex coursesSection grid grid-cols-12 gap-4">
        {#each row as course}
          {#if row.length === 3}
            <button on:click={() => handleClick(course)} class="{course.taken ? 'bg-danger':'bg-transparent'} hover:bg-danger text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full {row.length === 3 ? 'col-span-4' : 'col-span-3'}">
              {course.name}
            </button>
          {:else}
            <button on:click={() => handleClick(course)} class="bg-transparent hover:bg-danger text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full col-span-3">
              {course.name}
            </button>
          {/if}
        {/each}
      </div>
    {/each}
    <div class="grid grid-cols-12">
        <button class="bg-transparent hover:bg-danger text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full col-span-2 col-start-6 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>              
        </button>
    </div>
  </main>
  


<!-- <main class="main">
    {#each distributeClasses() as row}
        <div class="flex coursesSection grid grid-cols-4 gap-4">
            {#each row as course}
            {#if row.length === 3}
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full grid grid-cols-subgrid">
                    {course.name}
                </button>
            {:else}
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">{course.name}</button>
            {/if}
            {/each}
        </div>
    {/each}
    {#each [...distributeClasses(), $courses] as classes}
        <div class="flex">
            {#each classes as course}
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    {course.name}
                </button>
            {/each}
        </div>
    {/each}
    {#each $courses as course}
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">{course.name}</button>
    {/each}
</main> -->
