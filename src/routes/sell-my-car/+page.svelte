<script>
    import { onMount } from 'svelte';
    import { PreApprovalApplicationQuestions } from '$lib/formData.js';

    onMount(() => {
        console.log(PreApprovalApplicationQuestions);
    });

</script>

<body>
    <div class=content>
        <h2>No Dealerships. No Hassle.</h2>
        <p>Get a quote for your vehicle after answering a few questions</p>
    </div>
</body>

<style>
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

    body{
        min-height: 80vh;
        max-height: 80vh;
        /* height: 100%; */
    }

</style>