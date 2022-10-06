<script>
   import Header from './components/Header.svelte';
   import Footer from './components/Footer.svelte';
   import Summary from './components/Summary.svelte';
   import ViewExpenses from './components/ViewExpenses.svelte';
   import ExpensesChart from './components/ExpensesChart.svelte';
   import { balance } from './stores/balance';
   import Expenses from './stores/expenses';
   import AddExpense from './components/AddExpense.svelte';

   const addExpense = function(e){
      const xpns = e.detail;
      // save expense to store
      balance.update((current) => {return current - xpns.amount})
      console.log($balance);
      Expenses.update( current => {
         return [xpns, ...current];
      })
   }

  
</script>

<!-- CSS only
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
-->

<Header />
<main>
   <div class="container">
      <div class="row mb-3">
         <div class="col">
            <Summary />
         </div>
      </div>
      <div class="row">
         <div class="col mb-3 chart">
            <ExpensesChart />
         </div>
         <div class="col mb-3 view">
            <ViewExpenses />
         </div>
         <div class="col add">
            <div class="add-expense-button">
               <AddExpense on:addExpense={addExpense}/>
            </div>
         </div>
      </div>
      <div class="row">
         
      </div>
   </div>

</main>
<Footer />

<style>
	main{
      max-width: 960px;
      margin: 40px auto;
   }
   .chart{
      max-width: 400px;
   }
   .view{
      max-width: 310px;
   }
   .add{
      max-width: 270px;
   }
</style>