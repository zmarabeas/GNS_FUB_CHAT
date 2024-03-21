
<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { scrollToBottom } from '$lib/utils';
  import { FirebaseDB as db } from '$lib/firebase/firebase';

  let applicationRoute = '/application';
  let sellMyCarRoute = '/sell-my-car';

  const database = db;

  console.log(database);
  onMount(() => {
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

<body>
  <div class=content id=about>
    <div class=wrapper id=company>
      <div class=blur>
        <h2>Welcome to Great North Auto Sales and Finance!</h2>
        <div class=desc>
          <p class=info>Sharing our expertise and planning for the future within the automotive sales, financing, powersport, recreation, commercial and rental industries.</p>
        </div>
      </div>
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

  .info {
    /* padding: 5px;
    border-radius: 15px; */
    max-width: 50%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 20px;
  }

  .desc {
  }

  #about {
    /* justify-content: center; */
    align-items: center;
    /* background-image: url('finance-background-image.webp'); */
    /* max-width: 80%; */
  }

  .wrapper {
    border: 1px solid azure;
    border-radius: 15px;
    /* padding: 20px; */
    height: 100%;
    max-width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* background-image: url('jeep-background-image.jpeg'); */
    /* color: #80AE9F; */
    background-image: url('driving-winter-image.jpeg');
    background-size: cover;
    background-position: center;
    background-position-y: 60%;
  }

  .blur {
    min-width: 100%;
    min-height: 100%;
    padding: 20px;
    border-radius: 15px;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
  }

  #company {
  }
</style>

