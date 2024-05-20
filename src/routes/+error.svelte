<script>
	import { page } from '$app/stores';
</script>

<body>
  <div class="wrapper">
    <h1>{$page.status}: {$page.error.message}</h1>
  </div>
</body>

<style>
  body {
    min-height: 55vh;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
