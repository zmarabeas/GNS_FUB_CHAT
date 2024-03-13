<script>
    import { onMount } from 'svelte';
    import { PreApprovalApplicationQuestions } from '$lib/formData.js';
    //import { QuestionForm } from '$lib/QuestionForm.svelte';
    import { userStore, updateUser, resetUser } from '$lib/stores/stores.js';

    let user = $userStore;

    userStore.subscribe(value => {
        user = value;
    });


    onMount(() => {
        console.log(PreApprovalApplicationQuestions);
        console.log(user);
    });

</script>

<body>
    <div class=content>
        <div class=wrapper>
            <p>Get pre-approved to buy a car after answering a few questions</p>
        </div>
        <div class=options-container>
          <div class=container id=info>
            <p>In a hurry? Leave your information and we can get back to you later!</p>
            <input type="text" name="Name" placeholder="Name" />
            <input type="tel" name="Phone" maxLength=12 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
              placeholder="123-456-7890"
              />
            <input type="email" placeholder="E-mail" />
            <textarea name="paragraph_text" cols="50" rows="10"
            placeholder="Leave a message here!" ></textarea>
            <button class=submit>Submit</button>
          </div>
          <div class=container>
            <button>Get Pre-Qualified Now!</button>
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

    .options-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: inherit;
        width: 100%;
        gap: 20px;
    }

    .submit{
      width: 100%;
    }

    body{
        min-height: 80vh;
        max-height: 80vh;
        height: 100%;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>
