<script>
   import Expenses from '../stores/expenses';

   export let activeItem;
</script>

<div class="expense-list">
   <div class="container scroll">
      {#each $Expenses as expense (expense.id)}
         {#if expense.category === activeItem}
            <div class="row">
               <div class="col date">
                  <span>{ expense.date }</span>
               </div>
            </div>
            <div class="row">
               <div class="col"><span>{ expense.details }</span></div>
               <div class="col text-end"><span>RM{ expense.amount.toFixed(2) }</span></div>
            </div>
         {/if}
      {/each}
   </div>
</div>

<style>
   .date{
      background: gray;
      color: white;
   }
   .scroll{
      max-height: 500px;
      overflow-y: auto;
   }
</style>
      