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
            <input type="text" name="Name" placeholder="Name" />
            <input type="tel" name="Phone" maxLength=12 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
              placeholder="123-456-7890"
              />
            <input type="email" placeholder="E-mail" />
            <textarea name="paragraph_text" cols="50" rows="10"
            placeholder="Leave a message here!" ></textarea>
            <button class=submit><h3>Submit</h3></button>
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

    body{
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>
