<script lang="ts">
	export let form;
	export let data; // data returned by the load function
</script>

<h1>Todo app</h1>

{#if form?.message}
	<p>{form.message}</p>
{/if}

<form action="/?/add" method="post" class="flex">
	<input type="text" name="content" placeholder="Content" />
	<input type="submit" value="Add" />
</form>

<br />

{#if data?.todos}
	{#each data.todos as todo}
		<div class="flex">
			<form action="/?/update" method="post">
				<input type="hidden" name="id" value={todo.id} />
				<input type="text" name="content" value={todo.content} />
				<input type="checkbox" name="completed" checked={todo.completed} />
				<input type="submit" value="Update" />
			</form>

			<form action="/?/delete" method="post">
				<input type="hidden" name="id" value={todo.id} />
				<input type="submit" value="Delete" />
			</form>

			<p>
				{todo.createdAt?.toLocaleString()}
			</p>
		</div>
	{/each}
{/if}

<style>
	.flex *,
	.flex {
		display: flex;
		align-items: center;
	}
</style>
