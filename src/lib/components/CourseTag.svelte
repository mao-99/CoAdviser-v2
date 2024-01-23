<script lang="ts">
  export let course: string = "undefined";
  export let credits: number = 0;
</script>

<div class="flex flex-col justify-center items-center bg-secondary p-2 rounded-lg min-w-[200px] w-fit h-fit">
  <p>{course}</p>
  <p>credits: {credits}</p>
</div>
