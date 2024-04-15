
<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { scrollToBottom } from '$lib/utils';
  import { FirebaseDB as db } from '$lib/firebase/firebase';
  import { fade } from 'svelte/transition';

  let applicationRoute = '/application';
  let sellMyCarRoute = '/sell-my-car';
  let inventoryRoute = '/inventory';
  let licenseRoute = 'https://www.mvsabc.com/vsa-search/vsa-search-results/?search_type=dealer&licence=50220';

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

  let services = [
    'Auto Sales And Financing',
    'Powersports And Recreation',
    'Commercial And Construction',
    'Fleet, Rental, and Many More Options!'
  ];

  let images = [
    'car-image.png',
    'boat-image.png',
    'construction-image.png',
    'rental-image.png'
  ];

  let teamMembers = {
    'Blake Tibbo': {
      title: 'Dealer Principal',
      email: 'blake@greatnorthfinance.com',
      phone: '403-836-0075',
      image: 'Blake-Tibbo.webp'
    },
    'Ryan Coleman': {
      title: 'Director of Finance',
      email: 'ryan@greatnorthfinance.com',
      phone: '289-339-4068',
      image: 'Ryan-Coleman.webp'
    },
    'Sabrina Tibbo': {
      title: 'Operations Manager',
      email: 'sabrina@greatnorthfinance.com',
      phone: '604-346-8192',
      image: 'Sabrina-Tibbo.webp'
    },
    'Adarsh Nadeem': {
      title: 'Business Development Manager',
      email: 'adarsh@greatnorthfinance.com',
      phone: '647-537-9501',
      image: 'Adarsh-Nadeem.webp'
    },
    'Ray Gaffney': {
      title: 'Sales and Finance Manager',
      email: 'ray@greatnorthfinance.com',
      phone: '236-889-7284',
      image: 'Ray-Gaffney.webp'
    }
  };

    let distance = 50;
    let duration = 200;
    let transitionInParamsLeft = { x: distance, duration: duration};


    // let constrain = 20;
    // let ex1Layer;
    
    // function transforms(x, y, el) {
    //   let box = el.getBoundingClientRect();
    //   let calcX = -(y - box.y - (box.height / 2)) / constrain;
    //   let calcY = (x - box.x - (box.width / 2)) / constrain;
      
    //   return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    // }

    // function mouseMoveHandler(event) {
    //   const { clientX, clientY } = event;
    //   const position = [clientX, clientY, ex1Layer];
    //   window.requestAnimationFrame(() => {
    //     ex1Layer.style.transform = transforms(...position);
    //   });
    // }

    let constrain = 2000;
    let ex1Layer;

    // Function to handle mouse movement
    function mouseMoveHandler(event) {
      const { clientX, clientY } = event;
      if (ex1Layer) {
        const box = ex1Layer.getBoundingClientRect();
        const calcX = -(clientY - box.y - (box.height / 2)) / constrain;
        const calcY = (clientX - box.x - (box.width / 2)) / constrain;
        ex1Layer.style.transform = `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
      }
    }

</script>

<body>
  <div class=content>
      <h2 id=title>No Dealerships. No Hassle.</h2>
      <p>Get pre-approved to buy a car or sell your car directly to us.</p>
      <div class=input-container>
        <button class=btn on:click={()=>handleClick(applicationRoute)}>Get Pre-Approved</button>
        <!-- <div id="ex1" on:mousemove="{mouseMoveHandler}">
          <img class="fox" src="fox.svg" alt="Fox Image" bind:this={ex1Layer}>
        </div> -->
        <span>or</span>
        <button class=btn on:click={()=>handleClick(sellMyCarRoute)}>Sell My Car</button>
      </div>
  </div>
</body>

<div class=content id=about>

  <div class=wrapper id=company>
    <div class=blur>
      <h2>Welcome to Great North Inventory</h2>
      <div class=desc>
        <p class=info>Unlocking a world of opportunities across diverse inventory and asset classes.
Harnessing our expertise in inventory management, financing, and beyond to empower your future. </p>
      </div>
    </div>
  </div>

  <div class=mobile>
    <div class=wrapper id=blimage>
      <img src="group-pic.webp" alt="">
    </div>
    <div id=company-info>
      <h3>Your Ultimate Source for High-Quality Assets</h3>
      <p class=info id=company-desc>
        Great North Inventory is your premier destination for purchasing high-quality assets. We offer a diverse range of products to meet your personal needs. With our user-friendly interface and reliable service, finding and acquiring the assets you require has never been easier. Experience seamless transactions and top-notch customer support with Great North Inventory today.
      </p>
    </div>
  </div>
<!--
  <div class=wrapper id=services>
    <div class=blur>
      <h2>Our Services</h2>
      <div class=service-container>
        {#each services as service, index}
          <div class=service>
            <img src={images[index]} style="max-width: 50%;" alt="">
            <h2>{service}</h2>
          </div>
        {/each}
      </div>
    </div>
  </div>
-->

<!--  <div class=wrapper id=team>
    <div class=blur>
      <h2>Our Innovative Team</h2>
      <div class=service-container>
        {#each Object.keys(teamMembers) as member, index}
          <div class=service id=member>
            <img src={teamMembers[member].image} style="min-width: 100%;" alt="">
            <h2 id=member-title>{member}</h2>
            <span id=team-info><h4 class=member-info>{teamMembers[member].title}</h4></span>
            <span id=team-info>{teamMembers[member].email}</span>
            <span id=team-info>{teamMembers[member].phone}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
  -->

  <div class=wrapper id=inventory>
    <div class=blur>
      <h2>Our Inventory</h2>
      <p>Check out our inventory of vehicles, powersports, construction equipment and rentals.</p>
      <button class=btn on:click={()=>handleClick(inventoryRoute)}>View Inventory</button>
    </div>
  </div>

  <!-- <div class=wrapper id=vsa>
    <div class=blur>
      <h2>Integrity at the Core: Our Promise of Trust</h2>
      <p>Known for our team's kindness and punctuality, we prioritize providing exceptional service at every turn. Whether it's a friendly greeting or delivering on time, our commitment to excellence shines through in every interaction.</p>
      <h3>VSA Licensed #D50220</h3>
      <a href={licenseRoute} target="_blank">
        <button class=btn>View License</button>
      </a>
    </div>
  </div> -->

  <div class=wrapper id=apply>
    <div class=content>
        <h2 id=title>No Dealerships. No Hassle.</h2>
        <div class=input-container>
          <button class=btn on:click={()=>handleClick(applicationRoute)}>Get Pre-Approved</button>
          <span>Or</span>
          <button class=btn on:click={()=>handleClick(sellMyCarRoute)}>Sell My Car</button>
        </div>
    </div>

  </div>

</div>


<style>
  .header {
    padding: 20px;
    text-align: center;
  }

  #ex1 {
    position: relative;
    width: 50px;
    height: 50px;
  }

  #ex1 img {
    display: block;
    width: 100%;
    height: auto;
  }


  #apply {
    background-color: azure;
    padding: 20px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
    min-width: 100%;
    background: none;
  }

  #vsa {
    background-color: azure;
    padding: 20px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background: none;
    justify-content: center;
    align-items: center;
    text-align: flex-start;
    color: black;
  }

  #inventory.wrapper {
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
    background-color: azure;
    background: none;
  }

  .service {
    padding: 20px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .member-info{
    font-size: 1.1em;
  }

  #team-info {
    font-size: 1em;
  }

  #member.service {
    max-width: 30%;
    gap: 5px;
  }

  #member.service h2 {
    font-size: 1.5em;
  }

  .service:hover {
    transform: translateY(-1px); /* Move the div 5px upwards on hover */
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  }

  .service-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  #title {
    margin-top: 20px;
  }

  #company-desc{
    max-width: 80%;
    text-align: left;
  }

  .mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .mobile{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;

    border: 1px solid azure;
    border-radius: 15px;
    height: 100%;

    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .wrapper:hover {
    transform: translateY(-1px); /* Move the div 5px upwards on hover */
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  }

  #company-info {
    background-color: azure;
    padding: 20px;
    max-width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    text-align: left;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 100%;
    padding: 20px;
  }

  #member-title {
    font-size: 5em;
  }

  @media only screen and (max-width: 868px) {
    .desc {
      line-height: 1.4;
    }
    h2 {
      line-height: 1.3;
    }

    #member-title{
      margin-top: 10px;
    }

    #member.service h2 {
      font-size: 3em;
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

    .service {
      min-width: 100%;
    }

    #team-info {
      font-size: 1em;
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
    width: 100%;
    gap: 20px;
    /* background-image: url('jeep-background-image.jpeg'); */
    /* color: #80AE9F; */
    /* background-image: url('/static/driving-winter-image.jpeg');*/
    background-image: url('driving-winter-image.jpeg');
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
    font-weight: bold;
    /*
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    */
  }

  #company {
    min-width: 100%;
    min-height: 150px;
  }

  #services {
    min-width: 100%;
    text-align: center;
    justify-content: center;
    /* background-image: url('GTR-image.jpeg');
    background-position-y: 50%; */
    background-image: none;
    color: #153D31;
  }

  #team {
    min-width: 100%;
    text-align: center;
    justify-content: center;
    /* background-image: url('GTR-image.jpeg');
    background-position-y: 50%; */
    background-image: none;
    color: #153D31;
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

