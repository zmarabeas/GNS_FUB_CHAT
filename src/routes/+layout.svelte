<script>
    import { scrollToBottom } from '$lib/utils';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    let licenseRoute = 'https://www.mvsabc.com/vsa-search/vsa-search-results/?search_type=dealer&licence=50220';
    import { page } from '$app/stores';  


    onMount(() => {
    });

    function home() {
        goto('/');
    }


</script>

<div class=header>
    <a href="/">
        <div class=logo-container>
            {#if $page.url.pathname === '/'}
                <img class=logo src="company-logo-white.png" alt="GNSF">
            {/if}
            <!-- <img class=logo src="company-logo-white.png" alt="GNSF"> -->
            <h4>Great North Inventory</h4>
        </div>
    </a>

    <div class=nav>
        {#if $page.url.pathname === '/application' || $page.url.pathname === '/sell-my-car'}
            <h4>(403) 836-0075</h4>
        {:else}
            <a href="/application">get pre-approved</a>
            <a href="/sell-my-car">sell my car</a>
            <a href="/inventory">view inventory</a>
        {/if}
        <!-- <a href="/application">get pre-approved</a>
        <a href="/sell-my-car">sell my car</a>
        <a href="/inventory">view inventory</a> -->
    </div>
</div>


<slot></slot>

<div class=footer>
    <div class=details-container>
        <h3>Company Details </h3>
        <span> - Great North Inventory</span>
        <!--<span> - Address: 110-131 12th Street, New Westminster, BC V3M 4G9</span>
        -->
        <!-- <a href={licenseRoute} target="_blank">
            <span> - VSA Licensed Company Dealer #50220</span>
        </a> -->
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
        /* background-color: #2B443C; */
        background-color: #153D31;
        padding: 20px;
        text-align: center;
        display: flex;
        /* background: linear-gradient(#123d30, #2C433B); */
        align-items: flex-start;
    }

    .logo-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .footer {
        background-color: #2B443C;
        padding: 20px;
        text-align: center;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row;
        width: 100vw;
    }

    /* Default styles */
    span {
        text-align: left;
        font-size: 16px;
        line-height: 1.5;
    }


    .details-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        max-width: 45%;
        min-width: 45%;
    }

    .footer-logo {
        max-width: 50px;
        height: auto;
    }

    .logo {
        max-width: 100px;
        height: auto;
    }

    .nav {
        text-transform: capitalize;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        /* margin-top: 20px; */
        margin-left: auto;
    }

    /* Responsive styles for smaller screens */
    @media only screen and (max-width: 778px) {
        span {
            line-height: 1.3;
            font-size: 1rem;
        }

        .footer {
            padding: 10px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        .details-container {
            max-width: 100%;
            min-width: 80%;
            /* width: 100vw; */
        }
    }
 </style>
