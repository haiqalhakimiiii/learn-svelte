<script>
   import { createEventDispatcher } from "svelte"; 
   import Button from "../shared/Button.svelte";
   import Card from "../shared/Card.svelte";
   import RatingSelect from "./RatingSelect.svelte";

   const dispatch = createEventDispatcher()

   let text = ''
   let rating = 10
   let btnDisabled = true
   let min = 10
   let message

   function handleInput(){
      if(text.trim().length <= min){
         message = 'Text must be at least '+min+' characters'
         btnDisabled = true
      }
      else{
         message = null
         btnDisabled = false
      }
   }

   function handleSelect(e){
      rating = e.detail
   }

   function handleSubmit(){
      if(text.trim().length >= min){
         const newFeedback = {
            id: Math.random(),
            text,
            rating: +rating
         }
         dispatch('add-feedback', newFeedback)

         text = ''
      }
   }

</script>

<Card>
<header>
   <h2>How would you rate your service with us?</h2>
</header>
<form on:submit|preventDefault={handleSubmit}>
   <RatingSelect on:rating-select={handleSelect}/>
   <div class="input-group">
      <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keep you coming back">
      <Button disabled={btnDisabled} type="submit">Send</Button>
   </div>
   {#if message}
      <div class="message">
         {message}
      </div>
   {/if}
</form>
</Card>


<style>
   header{
      max-width: 400px;
      margin: auto;
   }
   header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
   }

   .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
   }

   input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
   }

   input:focus {
      outline: none;
   }
</style>