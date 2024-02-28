<script>
  {/* import { sendSMS } from '../../../lib/utils.js'; */}
  {/* import { TwilioClient } from '../../../config/twilio/twilio.js'; */}
  {/* import { twilioNumberCA } from '../../../config/twilio/twilio.js'; */}

  const accountSid = 'ACf8ccd164ab96b9ba138f68c1a4ab7b91';
  const authToken = '3d0fa3c0837c04348dad5f29ed564661';
  const twilioNumberCA = '+12363019250';
  const twilioNumberUS = '+18888575941';
  const twilioConsole = '+18777804236';

  {/* import { createRequire } from 'module'; */}

  {/* const require = createRequire(import.meta.url); */}
  {/* const { MessagingResponse } = require('twilio').twiml; */}
  {/* const twilio = require('twilio'); */}
  {/* const client = twilio(accountSid, authToken); */}

  {/* import twilio from 'twilio'; */}
  {/* console.log(twilio); */}

  {/* const TwilioClient = twilio(accountSid, authToken); */}





  let phone = null;
  let message = null;

  {/* async function sendSMS(req, res){ */}
  {/*   {/1* const { body, to } = req.body; *1/} */}
  {/*   try { */}
  {/*     const message = 'test'; */}
  {/*     // const message = await TwilioClient.messages.create({ */}
  {/*     //   body, */}
  {/*     //   from: twilioNumberCA, */}
  {/*     //   to */}
  {/*     // }); */}
  {/*     res.status(200).send({ message, success: true }); */}
  {/*   } catch (error) { */}
  {/*     res.status(500).send({ error, success: false }); */}
  {/*   } */}
  {/* } */}



  function handleSubmit(){
    if(phone && message){
      {/* _sendSMS(phone, message); */}
      phone = null;
      message = null;
    }else{
      console.log("Please fill out all fields");
    }
  }

</script>


<div class=main>
  <div class=col-container>
    <h1>TWILIO TESTING PAGE</h1>
    <input type="text" placeholder="Enter Phone Number" class="inp" bind:value={phone}>
    <input type="text" placeholder="Enter Message" class="inp" bind:value={message}>
    <button class="btn" on:click={()=>handleSubmit()}>submit</button>
  </div>
</div>


<style>
  .main {
    display: flex;
    #justify-content: center;
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
