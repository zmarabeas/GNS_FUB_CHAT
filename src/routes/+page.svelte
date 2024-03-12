
<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { scrollToBottom, routeToPage, goBack } from '$lib/utils';

    let applicationRoute = '/application';
    let sellMyCarRoute = '/sell-my-car';

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


<style>
    /* @import "../global-dark.css"; */
    .header {
        /* background-color: #f4f4f4; */
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
        min-height: 60vh;
    }

    .content {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        height: 100%;
        padding: 20px;
        /* margin-top: 20px; */
        /* gap: 20px; */
    }

    .btn {
        padding: 10px 20px;
        border-radius: 5px;
        /* background-color: #333;
        color: #fff; */
        border: none;
        cursor: pointer;
    }
    /* h1 {
        color: #333;
    } */
</style>
