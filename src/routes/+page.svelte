
<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { scrollToBottom } from '$lib/utils';
  import { FirebaseDB as db } from '$lib/firebase/firebase';

  let applicationRoute = '/application';
  let sellMyCarRoute = '/sell-my-car';

  const database = db;

  onMount(() => {
    console.log(database);
  });

  function handleClick(selected) {
      goto(selected);
  }
</script>

<body>
  <div class=content>
    <h2>No Dealerships. No Hassle.</h2>
    <p>Get pre-approved to buy a car or sell your car directly to us.</p>
    <div class=input-container>
      <button class=btn on:click={()=>handleClick(applicationRoute)}>Get Pre-Approved</button>
      <span>Or</span>
      <button class=btn on:click={()=>handleClick(sellMyCarRoute)}>Sell My Car</button>
    </div>
  </div>
</body>


<style>
  .header {
    padding: 20px;
    text-align: center;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
  }

  body {
    min-height: 80vh;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 20px;
  }
</style>
