<script>
    import { Car } from '$lib/models/Car.js';
    import { carData } from '$lib/data/cars.js';
    import CarView from '$lib/components/CarView.svelte';

    let cars = [];
    console.log(carData);
    carData.forEach(car => {
        let carInstance = new Car(car);
        cars.push(carInstance);
    });

</script>
    
<body>
    <div class=content>
        {#each cars as car, index}
            <div class=wrapper>
                <CarView index={index} car={car} />
            </div>
        {/each}
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