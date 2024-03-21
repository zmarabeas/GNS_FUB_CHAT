
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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function handleClick(selected) {
    goto(selected);
  }

  let isCentered = false;

  function handleScroll() {
    const scrollPosition = window.scrollY;
    isCentered = scrollPosition > 100; // Adjust this value based on when you want the transition to happen
  }


</script>

<body>
  <div class=content>
      <h2 id=title>No Dealerships. No Hassle.</h2>
      <p>Get pre-approved to buy a car or sell your car directly to us.</p>
      <div class=input-container>
        <button class=btn on:click={()=>handleClick(applicationRoute)}>Get Pre-Approved</button>
        <span>Or</span>
        <button class=btn on:click={()=>handleClick(sellMyCarRoute)}>Sell My Car</button>
      </div>
  </div>
</body>

<div class=content id=about>
  <div class=wrapper id=company>
    <div class=blur>
      <h2>Welcome to Great North Auto Sales and Finance!</h2>
      <div class=desc>
        <p class=info>Sharing our expertise and planning for the future within the automotive sales, financing, powersport, recreation, commercial and rental industries.</p>
      </div>
    </div>
  </div>
  <div class=mobile>
    <div class=wrapper id=blimage>
      <img src="group-pic.webp" alt="">
    </div>
    <div class=wrapper id=company-info>
      <h3>We Help Our Clients Achieve Their Automotive And Financing Goals</h3>
      <p class=info id=company-desc>
        Welcome to Great North Sales and Finance, where we specialize in acquisition, sales and financing of automotive vehicles as well as a diverse range of assets including: vehicles (personal, recreational, commercial), powersports, construction equipment and rentals.
      </p>
    </div>
  </div>
</div>


<style>
  .header {
    padding: 20px;
    text-align: center;
  }

  #title {
    margin-top: 20px;
  }

  #company-desc{
    max-width: 80%;
  }

  .mobile {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  #company-info {
    background-color: azure;
    background-image: none;
    padding: 20px;
    max-width: 55%;
    text-align: center;
    color: black;
  }

  img{
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
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
    background-color: azure;
  }

  .info {
    /* padding: 5px;
    border-radius: 15px; */
    max-width: 45%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 100%;
    padding: 20px;
  }

  @media only screen and (max-width: 768px) {
    .desc {
      line-height: 1.4;
    }
    h2 {
      line-height: 1.3;
    }

    #blimage {
      min-width: 100%;
    }

    #company-info {
      max-width: 100%;
    }

    #title {
      font-size: 2.5em;
    }

    .content{
      padding: 10px;
      gap: 10px;
    }
    
    .mobile {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .wrapper {
    }
  }


  #about {
    /* justify-content: center; */
    align-items: center;
    background-color: azure;
    /* background-image: url('finance-background-image.webp'); */
    /* max-width: 80%; */
  }

  #blimage{
    background-image: none;
    max-width: 42%;
  }

  .wrapper {
    border: 1px solid azure;
    border-radius: 15px;
    /* padding: 20px; */
    height: 100%;
    /* max-width: 95%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* background-image: url('jeep-background-image.jpeg'); */
    /* color: #80AE9F; */
    background-image: url('/static/driving-winter-image.jpeg');
    background-size: cover;
    background-position: center;
    background-position-y: 60%;
    /* box-shadow: 0 8px 16px rgba(44, 67, 59, 0.8); Shadow properties */
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .wrapper:hover {
    transform: translateY(-1px); /* Move the div 5px upwards on hover */
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  }

  .blur {
    min-width: 100%;
    min-height: 100%;
    padding: 20px;
    border-radius: 15px;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }

  #company {
    min-width: 100%;
    min-height: 150px;
  }



  .bullet-points {
    font-family: Arial, sans-serif;
    font-size: 16px;
    text-align: left;
  }

ul {
  list-style-type: none;
  padding: 0;
}
.list-wrapper {
  text-align: right;

}

.bullet-icon,
.sub-bullet-icon,
.sub-sub-bullet-icon {
  margin-right: 8px;
}

.bullet-text,
.sub-bullet-text {
  /* All text to the right of the bullet */
}
.sub-bullet-text {
  margin-right: 80px;
  font-weight: bold;
}

</style>

