
<script>
  import { ref, onValue } from "firebase/database";
  import { FirebaseDB as db } from "../../config/firebase/firebase.js";


  const usersRef = ref(db, "users");
  onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
  console.log(db);


	let name = null;
	let birthday = null;

  let twilioURL = "https://gnschat-9300.twil.io/welcome";

	async function handleSubmit(){
    //setItem(name, birthday);	
    const response = await fetch(twilioURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "mode": "no-cors",
      },
      body: JSON.stringify({
        "To": name,
        "Body": birthday,
      }),
    });
    console.log(response);

		name = null;
		birthday = null;

	}
</script>

<div class=main>
	<div class=col-container id=api>
		<h1>API TESTING PAGE</h1>
		<input class=inp bind:value={name} type=text 
			placeholder="Enter Full Name">
		<input class=inp bind:value={birthday} type=text 
			placeholder="Enter Birthday">
		<button class=btn on:click={()=>handleSubmit()}>submit</button>
	</div>
</div>

<style>
	.main {
		display: flex;
    //justify-content: center;
		align-items: center;
		flex-direction: column;
		min-width: 100vw;
		min-height: 100vh;
	}

	.col-container {
		display: flex;
		//justify-content: center;
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
