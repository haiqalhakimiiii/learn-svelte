<script>
   import Card from "../shared/Card.svelte";
   import { balance } from '../stores/balance'; 
   import Expenses from '../stores/expenses';
   
   let expense;
   let totalMoney;
   let percentBalance;

   function count(){
      expense = 0;
      totalMoney = 0;
      percentBalance = 0;

      $Expenses.forEach((xpns) => {
         expense += xpns.amount;
      })
      totalMoney = $balance + expense;
      percentBalance = Math.floor($balance/totalMoney * 100) || 0;
      console.log(percentBalance, 'percentBalance');
   }
   // reactive values
   $: if($Expenses){
      count();
   }
</script>

<Card>
   <div class="container">
      <div class="row text-center">
         <div class="col">
            <div class="row">
               <div class="col"><span class="align-middle balances">RM{$balance}</span></div>
               <div class="col"><span style="color: #45c496; font-size: 12px">Available Money</span></div>
            </div>
         </div>
         <div class="col-8">
            <div class="percent">
               <div class="percent-split" style="width: {percentBalance}%;"></div>
            </div>
         </div>
         <div class="col">
            <div class="row">
               <div class="col"><span class="align-middle expenses">RM{expense}</span></div>
               <div class="col"><span style="color: #d91b42; font-size: 12px">Money Spent</span></div>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col text-center">
            <span class="align-middle">Monthly: RM{totalMoney}</span>
         </div>
      </div>
   </div>
</Card>

<style>
   .percent{
      height: 100%;
      background-color: #d91b42;
      box-sizing: border-box;
      border-left: 4px solid #45c496 ;
      border-right: 4px solid #d91b42;
   }
   .percent-split{
      background: #45c496;
      height: 100%;
   }
   .balances{
      font-size: 30px;
      font-weight: bold;
      color: #45c496;
   }
   .expenses{
      font-size: 30px;
      font-weight: bold;
      color: #d91b42;
   }
</style>