<script>
    import { onMount } from 'svelte';
    import { PreApprovalApplicationQuestions } from '$lib/formData.js';
    //import { QuestionForm } from '$lib/QuestionForm.svelte';
    import { userStore, updateUser, resetUser } from '$lib/stores/stores.js';
    import { FirebaseDB as database } from '$lib/firebase/firebase';
    import { ref, set, update } from "firebase/database";
    import { slide } from 'svelte/transition';
    import { fly, fade } from 'svelte/transition';

    let user = $userStore;
    const db = database;
    let questionIndex = 0;
    let question = PreApprovalApplicationQuestions[questionIndex];

    $: {
        question = PreApprovalApplicationQuestions[questionIndex];
        console.log(question);
    }

    /**************************************************************
    TODO:
          validate user input
          handle errors
          send user to thank you page / confirmation notification
          build full application form
          prequalify user
    **************************************************************/

    function writeUserData(user) {
        console.log('User: ', user);
        update(ref(db, 'users', ), {
            [user.phone]: {
                ...user
            }
        });
    }

    userStore.subscribe(value => {
        user = value;
    });

    onMount(() => {
    });

    let input = {
        name: '',
        phone: '',
        email: '',
        message: ''
    };

    async function submitForm() {
        // console.log('Input: ', tracker);
        writeUserData(tracker);
    }

    let tracker;

    $: {
        tracker = {
            name: input.name,
            phone: input.phone,
            email: input.email,
            message: input.message
        }
        //remove all non numbers from phone
        tracker.phone = tracker.phone.replace(/\D/g, '');
        // console.log(tracker);
    }

    let questionKey = {};
    let transitionInParams = { x: 200, duration: 400 };
    let transitionOutParams = { x: -200, duration: 400 };
    let isVisible = false;
    async function handleNext() {
        if(questionIndex < PreApprovalApplicationQuestions.length - 1){
            transitionInParams = { x: 200, duration: 400 };
            transitionOutParams = { x: -200, duration: 400 };
            isVisible = false;
            questionIndex++;
            questionKey = {};
            setTimeout(() => {
                isVisible = true;
            }, 400); // Delay to wait for fade out transition
        }else{
            console.log('End of questions');
            console.log('User: ', tracker);
        }
    }

    async function handleBack() {
        if(questionIndex > 0){
            isVisible = false;
            transitionInParams = { x: -200, duration: 400 };
            transitionOutParams = { x: 200, duration: 400 };
            questionIndex--;
            questionKey = {};
            setTimeout(() => {
                isVisible = true;
            }, 400); // Delay to wait for fade out transition

        }else{
            console.log('Start of questions');
        }
    }

    function slideInFromRight(node, { duration = 400 }) {
        const slideTrans = slide(node, {
            x: '100%', // Start from the right
            y: 0, // No vertical movement
            duration,
        });

        return {
            duration,
            css: t => `
                ${slideTrans.css(t)}
                transform: translateX(${(1 - t) * 100}%); // Slide in from the right
            `,
        };
    }

    function fadeSlide(node, options) {
		const slideTrans = slide(node, {
            x: '100%', // Start from the right
            y: '-100%',
            duration: 400,
        })
		return {
			duration: options.duration,
			css: t => `
				${slideTrans.css(t)}
                transform: translateX(${(1 - t) * 100}%);
				opacity: ${t};
			`
		};
	}

</script>

<body>
    <div class=content>
        {#if questionIndex === 0}
            <div class=wrapper>
                <p>Get pre-approved to buy a car after answering a few questions</p>
            </div>
            <div class=options-container>
                <div class=container id=submit>
                    <button class=action on:click={()=>handleNext()}><h3>Get Pre-Approved Now!</h3></button>
                </div>

                <div class=container id=or>
                    <h3>
                    -Or-
                    </h3>
                </div>

                <div class=container id=info>
                    <p>In a hurry? Leave your information and we can get back to you later!</p>
                    <input type="text" name="Name" placeholder="Name" bind:value={input.name}/>
                    <input type="tel" name="Phone" maxLength=12 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    placeholder="123-456-7890"
                    bind:value={input.phone}
                    />
                    <input type="email" placeholder="E-mail" bind:value={input.email}/>
                    <textarea name="paragraph_text" cols="50" rows="10"
                    placeholder="Leave a message here!" bind:value={input.message}></textarea>
                    <button class=submit on:click={()=>submitForm()}><h3>Submit</h3></button>
                </div>
            </div>
        {:else if questionIndex < PreApprovalApplicationQuestions.length}
            <div class=questionWrapper>
                {#if isVisible}

                    <!-- <div class=container id=info transition:fadeSlide> -->
                    <div class=container id=info in:fly={transitionInParams} out:fly={transitionOutParams}>
                        <p>{question.question}</p>
                        <p>In a hurry? Leave your information and we can get back to you later!</p>
                        <input type="text" name="Name" placeholder="Name" bind:value={input.name}/>
                        <input type="tel" name="Phone" maxLength=12 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        placeholder="123-456-7890"
                        bind:value={input.phone}
                        />
                        <input type="email" placeholder="E-mail" bind:value={input.email}/>
                        <textarea name="paragraph_text" cols="50" rows="10"
                        placeholder="Leave a message here!" bind:value={input.message}></textarea>
                        <div class=row-container>
                            <button class=back on:click={()=>handleBack()}><h3>Back </h3></button>
                            <button class=submit id=question on:click={()=>handleNext()}><h3>Next</h3></button>
                        </div>
                    </div>

                {/if}
            </div>
        {/if}
    </div>
</body>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: inherit;
        justify-content: flex-start;
        padding: 20px;
        min-height: 100vh;
    }

    .action {
      width: 100%;
      display: inline-flex;
      align-items: center;
    }

    .row-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    h3 {
      margin: 0;
    }

    #submit {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    #or {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 100px;
      max-width: 100px;
      width: 100px;
    }

    .options-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        height: inherit;
        gap: 20px;
    }

    .submit{
      width: 100%;
    }

    #question.submit {
        width: 60%;
        margin: 0 auto;
    }

    .back {
        width: 30%;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>
