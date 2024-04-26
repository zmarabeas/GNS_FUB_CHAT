<script>
    import { carData } from '$lib/data/cars.js';
    import CarView from '$lib/components/CarView.svelte';

    import { onMount } from 'svelte';

    import { FirebaseDB as database } from '$lib/firebase/firebase';
    import { ref, onValue, update } from 'firebase/database';

    const db = database;

    let inventoryData = {};
    let inventoryList = [];
    function getInventory() {
      const inventoryRef = ref(db, 'inventory');
      onValue(inventoryRef, (snapshot) => {
        const data = snapshot.val();
        inventoryData = data;
        inventoryList = Object.values(data['vehicles']);
        inventoryList.forEach(car => {
          cars.push(car);
        });
        console.log('inventory', inventoryList);
        console.log('cars', cars);
        carsKey = {};
      });
    }

/*
    let test = {};
    $: {
      if (inventoryList.length > 0) {
        test = inventoryList[0];
        cars.push(test);
      } 
      console.log('wat', cars);
    }
*/

    //get scroll from document



    let carsKey = {};
    let cars = [];
    let contentDiv = null;
    let numCars = 10;
    carData.forEach(car => {
        //cars.push(car);
    });


    // handle scroll
    let yScroll=0;
    let docWidth=0;
    let docBottom=0;

    let userInput = {
      name: '',
      phone: '',
      email: ''
    };

    $: outerWidth = 0;
    $: innerWidth = 0;

    let minWidth = 0;
    let multiplier = 1;
    $: {
      minWidth = innerWidth < outerWidth ? innerWidth : outerWidth;
      if(minWidth < 900) {
        multiplier = 2; 
      }else {
        multiplier = .8;
      }
      if(yScroll > numCars * 500 * multiplier) {
        numCars += 10;
      }
    }

    onMount(() => {
      getInventory();
    });

</script>
    

<svelte:window bind:scrollY={yScroll} bind:outerWidth bind:innerWidth />

<body>
    <div class=content bind:this={contentDiv}>
      {#key carsKey}
        {#each cars.slice(0, numCars) as car, index}
            <div class=wrapper>
                <CarView index={index} car={car} bind:input={userInput} />
            </div>
        {/each}
      {/key}
    </div>
</body>

<style>
    body {
        min-height: 75vh;
    }


    .content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        height: 100%;
        padding: 20px;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        width: 45%;
        padding: 20px;
        border-radius: 15px;
        background-color: azure;
        color: black;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .wrapper:hover {
        transform: scale(1.01);
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
    }

  @media only screen and (max-width: 900px) {
    .wrapper {
        width: 100%;
    }

    .content {
        flex-direction: column;
    }
  }

</style>
