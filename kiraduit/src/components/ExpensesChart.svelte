<script>
   import Card from "../shared/Card.svelte";
   import Expenses from '../stores/expenses';

   let totalShopping;
   let totalFood;
   let totalTransport;
   let totalExpenses;
   let percentShopping;
   let percentFood;
   let percentTransport;

   function count() {
      totalShopping = 0;
      totalFood = 0;
      totalTransport =0;
      totalExpenses = 0;
      percentShopping = 0;
      percentFood = 0;
      percentTransport = 0;
      $Expenses.forEach((xpns) => {
         if(xpns.category === 'Food'){
            totalFood += xpns.amount;
         }
         else if(xpns.category === 'Shopping'){
            totalShopping += xpns.amount;
         }
         else{
            totalTransport += xpns.amount;
         }
      })
      totalExpenses = totalFood + totalShopping + totalTransport;

      percentShopping = Math.floor(100 / totalExpenses * totalShopping);
      percentFood = Math.floor(100 / totalExpenses * totalFood);
      percentTransport = Math.floor(100 / totalExpenses * totalTransport);
   }

   $: if($Expenses) {
      count();
   };

</script>

<div class="expenses-chart-details">
   <Card>
      <div class="container">
         <div class="row mb-3 chart">
            <div class="bar-container">
               <div class="bar val-a" style="flex-basis: {percentShopping}%">{percentShopping}%</div>
               <div class="bar val-b" style="flex-basis: {percentFood}%">{percentFood}%</div>
               <div class="bar val-c" style="flex-basis: {percentTransport}%">{percentTransport}%</div>
            </div>
         </div>
         <div class="category-list">
            <div class="row category">
               <div class="col">
                  <span>Category</span>
               </div>
               <div class="col text-end">
                  <span>Total</span>
               </div>
            </div>
            <div class="category-amount">
               <div class="row val-a">
                  <div class="col">
                     <span>Shopping</span>
                  </div>
                  <div class="col text-end">
                     <span>RM{totalShopping.toFixed(2)}</span>
                  </div>
               </div>
               <div class="row val-b">
                  <div class="col">
                     <span>Food</span>
                  </div>
                  <div class="col text-end">
                     <span>RM{totalFood.toFixed(2)}</span>
                  </div>
               </div><div class="row val-c">
                  <div class="col">
                     <span>Transport</span>
                  </div>
                  <div class="col text-end">
                     <span>RM{totalTransport.toFixed(2)}</span>
                  </div>
               </div>
            </div>
         </div>
         
      </div>
   </Card>
</div>

<style>
   .row .bar-container {
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      width: 100%;
   }

   .row .bar {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .val-a { background: salmon }
   .val-b { background: wheat }
   .val-c { background: honeydew } 
   .category{
      background: gray;
      color: white;
   }
   
</style>

<!-- https://thomaswilburn.github.io/viz-book/css-flex.html -->