<script>
  import { onMount } from 'svelte';
  import { writeUserData } from './index.js';

  let dummyData = {
    name: "John Doe",
    birthday: "01/01/2000",
    userId: "jdo"
  }

  onMount(async () => {
    const data = await writeUserData(...dummyData);
    console.log(data);

  });

  let name = null;
  let birthday = null;
  let userId = null;

  function handleSubmit(){
    if(name && birthday && userId){
      writeUserData(name, birthday, userId);
      name = null;
      birthday = null;
      userId = null;
    }else{
      console.log("Please fill out all fields");
    }
  }
</script>

<div class=main>
  <div class=col-container>
    <h1>API TESTING PAGE</h1>
    <input type="text" placeholder="Enter Full Name" class="inp" bind:value={name}>
    <input type="text" placeholder="Enter Birthday" class="inp" bind:value={birthday}>
    <input type="text" placeholder="Enter User ID" class="inp" bind:value={userId}>
    <button class="btn" on:click={()=>handleSubmit()}>submit</button>
  </div>
</div>

<style>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
  }

  .col-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  .inp {
    text-align: center;
    border-radius: 5px;
    width: 200px;
    height: 25px;
  }

  .btn {
    text-align: center;
    border-radius: 5px;
    width: 100px;
    height: 25px;
    background-color: purple;
    color: azure;
    border-style: none;
  }

</style>

