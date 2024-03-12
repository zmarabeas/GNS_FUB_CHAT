
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
    <div class=input-container>
        <button class=btn on:click={()=>handleClick(applicationRoute)}>Get Pre-Approved</button>
        <span>Or</span>
        <button class=btn on:click={()=>handleClick(sellMyCarRoute)}>Sell My Car</button>
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
        flex-direction: column;
        margin-top: 100px;
    }
    /* h1 {
        color: #333;
    } */
</style>
