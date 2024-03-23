<script>
    import { scrollToBottom } from '$lib/utils';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
    });

    function home() {
        goto('/');
    }

</script>

<div class=header>
    <a href="/">
        <div class=logo-container>
            <img class=logo src="company-logo-white.png" alt="GNSF">
            <h4>Great North Sales and Finance</h4>
        </div>
    </a>

    <div class=nav>
        <a href="/application">get pre-approved</a>
        <a href="/sell-my-car">sell my car</a>
    </div>
</div>

<slot></slot>

<div class=footer>
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
        justify-content: space-evenly;
        flex-direction: row;
    }

    /* Default styles */
    span {
        text-align: left;
        font-size: 16px;
        line-height: 1.5;
    }

    /* Responsive styles for smaller screens */
    @media only screen and (max-width: 768px) {
        span {
            font-size: 14px;
            line-height: 1.3;
        }

        .footer {
            padding: 10px;
            flex-direction: row;
        }


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
 </style>
