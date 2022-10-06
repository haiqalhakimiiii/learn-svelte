<script>
   import { createEventDispatcher } from 'svelte';
   import Card from '../shared/Card.svelte';

   let dispatch = createEventDispatcher();

   let id;
   let amount;
   let paymentMethod;
   let category;
   let date;
   let details;

   const handleSubmit = function(){
      const expense = {
         id : Math.random(),
         amount,
         paymentMethod,
         category,
         date,
         details
      }
      dispatch('addExpense',expense);
   }

</script>

<div>
   <Card>
      <h4 class="text-center">Add Expense</h4>
      <div class="text-center">
         <form on:submit|preventDefault={handleSubmit}>
            <input type="text" class="mb-3" placeholder="Details" bind:value={details}><br>
            <input type="number" class="mb-3" placeholder="Amount (RM)" bind:value={amount}><br>
            <input type="date" class="mb-3" bind:value={date}><br>

            <label>Category</label>
            <select bind:value={category} class="mb-3" >
               <option value="Shopping">Shopping</option>
               <option value="Food">Food</option>
               <option value="Transport">Transport</option>
            </select><br>

            <label>Payment Method</label >
            <select bind:value={paymentMethod} class="mb-3" >
               <option value="Cash">Cash</option>
               <option value="PayWave">PayWave</option>
               <option value="Online">Online</option>
            </select><br>

            <button>Add Expense</button>
         </form>
      </div>
      
   </Card>
   
</div>

<style>

</style>