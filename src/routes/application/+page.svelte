<script>
    import { onMount } from 'svelte';
    import { PreApprovalApplicationQuestions } from '$lib/formData.js';
    //import { QuestionForm } from '$lib/QuestionForm.svelte';
    import { userStore, updateUser, resetUser } from '$lib/stores/stores.js';
    import { FirebaseDB as database } from '$lib/firebase/firebase';
    import { ref, set, update } from "firebase/database";

    let user = $userStore;
    const db = database;
    // console.log(db);

    /**************************************************************
    TODO:
          validate user input
          handle errors
          send user to thank you page / confirmation notification
          build full application form
          prequalify user
    **************************************************************/

    function writeUserData(user) {
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

</script>

<body>
    <div class=content>
        <div class=wrapper>
            <p>Get pre-approved to buy a car after answering a few questions</p>
        </div>
        <div class=options-container>
          <div class=container id=submit>
            <button class=action><h3>Get Pre-Qualified Now!</h3></button>
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
    }

    .action {
      width: 100%;
      display: inline-flex;
      align-items: center;
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

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>
