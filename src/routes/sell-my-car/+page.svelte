<script>
    import { onMount } from 'svelte';
    import { PreApprovalApplicationQuestions } from '$lib/formData.js';
    import BIBinput from '$lib/components/BIBinput.svelte';

    onMount(() => {
        console.log(PreApprovalApplicationQuestions);
    });

    let input = {
        name: '',
        phone: '',
        email: '',
        message: ''
    };

    function submitForm() {
        console.log(input);
    }

</script>

<body>
    <div class=content>
        <h2>Sell your car directly to us</h2>
        <p>Leave your name, number, and information about your vehicle and one of our associates will reach out to you</p>
        <div class=container id=mini-info>
            <BIBinput width={100} type={'text'} placeholder={"First and Last Name"} label={"Name"} bind:value={input.name}/>
            <BIBinput width={100} max=10 type={'phone'} placeholder={"123-456-7890"} label={"Phone"} bind:value={input.phone}/>
            <BIBinput width={100} type={'text'} placeholder={"EpicDeals@gnsf.com"} label={"E-Mail"} bind:value={input.email}/>
            <!-- <input type="text" name="Name" placeholder="Name" bind:value={input.name}/>
            <input type="tel" name="Phone" maxLength=12 
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
            placeholder="123-456-7890"
            bind:value={input.phone}
            /> -->
            <!-- <input type="email" placeholder="E-mail" bind:value={input.email}/> -->
            <span class=label>Leave us a message!</span>
            <textarea name="paragraph_text" cols="50" rows="10"
            placeholder="eg. I want to sell my 2019 Ford F-150" bind:value={input.message}></textarea>
            <button class=submit on:click={()=>submitForm()}><h3>Submit</h3></button>
        </div>
    </div>
</body>

<style>
    .content {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        min-height: 85vh;
        padding: 20px;
        /* margin-top: 20px; */
        /* gap: 20px; */
    }

    body{
        /* height: 100%; */
    }

    h3{
        margin: 0;
    }

    .label{
        margin: 0;
        min-width: 100%;
        text-align: left;
        margin-bottom: -10px;
        margin-left: 20px;
    }
    
    p{
        margin-bottom: 0;
        text-align: center;
        max-width: 50%;
    }

    @media only screen and (max-width: 768px) {
        p{
            max-width: 100%;
        }
    }

    #mini-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

</style>
