<script>
   import { createEventDispatcher } from 'svelte';

   let dispatch = createEventDispatcher();

   let name;
   let shirtColour;
   let age;
   let skills = [];

   const handleSubmit = function(){
      const person = {
         name,
         shirtColour,
         age,
         skills,
         id : Math.random()
      };
      dispatch('addPerson',person);
   };
</script>

<form on:submit|preventDefault={handleSubmit}>
   <input type="text" placeholder="name" bind:value={name}>
   <input type="number" placeholder="age" bind:value={age}>
   
   <label>Skills:</label>
   <input type="checkbox" bind:group={skills} value="frontend">frontend<br>
   <input type="checkbox" bind:group={skills} value="backend">backend<br>
   <input type="checkbox" bind:group={skills} value="database">database<br>

   <label>Shirt colour:</label>
   <select bind:value={shirtColour}>
      <option value="black">black</option>
      <option value="red">red</option>
      <option value="green">green</option>
      <option value="blue">blue</option>
   </select>

   <button>Add Person</button>
</form>

<style>

</style>