<script>
    import { scrollToBottom } from '$lib/utils';
    import { onMount } from 'svelte';
    

    onMount(() => {
        // scrollToBottom();
    });

</script>

<div class=header>
    <img class=logo src="company-logo-white.png" alt="Great North Sales and Finance">
    <h1>Great North Sales and Finance</h1>
</div>

<slot></slot>

<div class=footer>
    <img class=logo src="company-logo-white.png" alt="Great North Sales and Finance">
    <div class=details-container>
        <h3>Company Details </h3>
        <span> - Great North Auto and Financing</span>
        <span> - Address: 110-131 12th Street, New Westminster, BC V3M 4G9</span>
        <span> - VSA Licensed Company Dealer #50220</span>
    </div>
    <div class=details-container>
        <h3>Our Services</h3>
        <span> - Auto Sales And Financing</span> 
        <span> - Powersports And Recreation</span>
        <span> - Commercial And Construction</span>
        <span> - Fleet And Rental</span>
    </div>
</div>


<style>
    @import "../global-dark.css";

    .header {
        background-color: #333;
        padding: 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer {
        background-color: #333;
        padding: 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
    }

    .details-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }


    .footer-logo {
        max-width: 50px;
        height: auto;
    }

    .logo {
        max-width: 100px;
        height: auto;
        position: absolute;
        left: 20px;
    }
 </style>
