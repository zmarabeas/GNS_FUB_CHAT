<script>
    import { carData } from '$lib/data/cars.js';
    import { createEventDispatcher } from 'svelte';
    import { slide } from 'svelte/transition';
    export let index;
    export let car;
    export let showDetails = false;

    const dispatch = createEventDispatcher();

    function formatPrice(price) {
        return price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }

    function toggleDetails(button=false) {
        showDetails = !showDetails;
        dispatch('toggle', {showDetails, index});
    }
</script>


<div class=content>
    <img src={car.image} alt="">
    <div class='main-info'>
        <h4>{car.make} {car.model} {car.year}</h4>
        <span id=title-info>{car.transmissionType}  -  {car.mileage}</span>
    </div>

    <div class=row-container>
        <div class=price>
            <span>{formatPrice(car.price)}</span>
        </div>
        <button class=but id=head on:click={()=>toggleDetails(true)}>{showDetails===true?'Less':'More'} Details</button>
    </div>

    {#if showDetails}
        <div class=details in:slide={{duration: 1000}} out:slide={{duration: 1000}}>
            {#each car.details as detail}
                <p>
                    {detail}
                </p>
            {/each}
        </div>
    {/if}

    <div class=specs>
        <span class=spec><h4>Vehicle Summary</h4></span>
        <span class=spec>
            <span class=item>
                <p id=title>Make</p>
                <p>{car.make}</p>
            </span>
            <span class=item>
                <p id=title>Model</p>
                <p>{car.model}</p>
            </span>
        </span>
        <span class=spec>
            <span class=item>
                <p id=title>Mileage</p>
                <p>{car.mileage}</p>
            </span>
            <span class=item>
                <p id=title>Stock #</p>
                <p>{car.stockNumber}</p>
            </span>
        </span>
        <span class=spec>
            <span class=item>
                <p id=title>Year</p>
                <p>{car.year}</p>
            </span>
            <span class=item>
                <p id=title>Dealer Number</p>
                <p>{car.dealerNumber}</p>
            </span>
        </span>
        <span class=spec>
            <span class=item>
                <p id=title>Drive Type</p>
                <p>{car.driveType}</p>
            </span>
            <span class=item>
                <p id=title>Transmission</p>
                <p>{car.transmissionType}</p>
            </span>
        </span>
        <span class=spec>
            <span class=item>
                <p id=title>Doors</p>
                <p>{car.doors}</p>
            </span>
            <span class=item>
                <p id=title>Seats</p>
                <p>{car.seats}</p>
            </span>
        </span>
        <span class=spec>
            <span class=item>
                <p id=title>Fuel Type</p>
                <p>{car.fuelType}</p>
            </span>
            <span class=item>
                <p id=title></p>
                <p></p>
            </span>
        </span>
    </div>
    <!-- <button class=but on:click={()=>toggleDetails(true)}>{showDetails===true?'Less Details':'More Details'}</button> -->
</div>

<style>
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        background-color: azure;
        color: black;
    }

    .row-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    #head {
        max-width: 40%;
    }

    .content img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 15px;
    }

    .main-info {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        /* gap: 5px; */
        padding: 10px;
        border-bottom: 1px solid #ccc;
        width: 100%;
    }

    .spec {
        font-size: 1em;
        /* color: #747474; */
        text-transform: capitalize;
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    #title-info {
        color: #747474;
        /* border-radius: 15px;
        padding: 10px;
        background-color: #e7e7e7; */
    }

    .specs {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        padding: 10px;
        border-radius: 15px;
        flex-wrap: wrap;
        /* background-color: #d2d2d2; */
        /* background-color: #e7e7e7; */
        background-color: #e1eaec;
        width: 100%;
    }

    .specs span {
        font-size: 1em;
        border-bottom: 1px solid #ccc;
        /* min-width: 100%; */
    }

    #title {
        color: #747474;
    }

    .specs span p {
        font-size: 1em;
        margin-bottom: 0;
    }

    .price {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        background: linear-gradient(90deg, #ABD2C4 0%, #ABD2C4 100%);
        background: linear-gradient(90deg, rgba(171,210,196, .20) 0%, rgba(171,210,196, .8) 100%);
        padding: 10px;
    }

    .item {
        min-width: 48%;
        max-width: 48%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }


</style>