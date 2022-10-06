<script>
   import Modal from './Modal.svelte';
   import AddPersonForm from './AddPersonForm.svelte';

   let showModal = false;

	let people = [
		{ name: 'haiqal', shirtColour:'black', age: 22, id: 1},
		{ name: 'ali', shirtColour:'blue', age: 23, id: 2},
		{ name: 'ezzuan', shirtColour:'red', age: 24, id: 3}
	];

  const handleClick = function(id){
    //delete person from people
    people = people.filter((person) => person.id != id);
  };

  const toggleModal = function(){
   showModal = !showModal;
  };

  const addPerson = function(e){
      //console.log(e.detail);
      const person = e.detail;
      people = [person, ...people];
      showModal = false;
  };
</script>

<Modal {showModal} on:click={toggleModal}>
   <AddPersonForm on:addPerson={addPerson}/>
</Modal>

<main>
   <button on:click|once={toggleModal}>Open Modal</button>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
      {#if person.shirtColour === 'black'}
        <p><strong>BLACK SUPREMACY!!</strong></p>
      {/if}
			<p>{person.age} years old, {person.shirtColour} shirt.</p>
      <button on:click={() => handleClick(person.id)}>delete</button>
		</div>
    {:else}
      <p>There are no people to show..</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>