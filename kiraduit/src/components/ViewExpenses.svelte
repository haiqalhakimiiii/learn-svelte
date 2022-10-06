<script>
   import Card from "../shared/Card.svelte";
   import Tabs from '../shared/Tabs.svelte'
   import ExpensesList from './ExpensesList.svelte';
   import ExpenseDetails from './ExpenseDetails.svelte';

   let items = ['All','Food','Shopping','Transport']
   let activeItem = 'All';

   const tabChange = function(e){
      activeItem = e.detail;
   }
</script>

<Card>
   <Tabs {activeItem} {items} on:tabChange={tabChange}/>
   {#if activeItem === 'All'}
      <ExpensesList />
   {:else if activeItem !== 'All'}
      <ExpenseDetails {activeItem} />   
   {/if}   
</Card>

<style>

</style>