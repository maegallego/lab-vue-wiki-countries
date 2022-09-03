<template>
	<div>
		<router-link
			v-for="country in countries"
			:key="country.id"
			:to="`${country.alpha3Code}`"
		>
			<div class="show-country">
				<img
					:src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
					:alt="`Flag of ${country.name}`"
				/>
				<p>{{ country.name }}</p>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: "CountriesList",
		props: {
			countries: Array,
		},
	};
</script>

<style>
	.show-country {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 12px;
		border: 1px solid #656565;
	}
</style>