<template>
	<div class="countries-details">
		<img
			:src="`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code.toLowerCase()}.png`"
			:alt="`Flag of the ${countryInfo.name}`"
		/>
		<h1>{{ countryInfo.name.common }}</h1>
		<p>Capital: {{ countryInfo.capital }}</p>
		<p>Area: {{ countryInfo.area }} Km2</p>
		<router-link
			v-for="border in countryInfo.borders"
			:key="border"
			:to="border"
		>
			<ul>
				{{
					border
				}}
			</ul>
		</router-link>
	</div>
</template>

<script>
	import countriesData from "../../public/countries.json";
	export default {
		name: "CountryDetails",
		data() {
			return {
				countryInfo: null,
			};
		},
		created() {
			const { countryCode } = this.$route.params;
			if (countriesData.length && countryCode) {
				const info = countriesData.filter(
					(country) => country.alpha3Code === countryCode
				)[0];
				this.countryInfo = {
					alpha2Code: info.alpha2Code.toLowerCase(),
					name: info.name.common,
					capital: info.capital[0],
					borders: info.borders,
				};
			}
			this.$watch(
				() => this.$route.params,
				(toParams) => {
					if (countriesData.length && toParams.countryCode) {
						this.countryInfo = countriesData.filter(
							(country) => country.alpha3Code === toParams.countryCode
						)[0];
					}
				}
			);
		},
	};
</script>

<style>
	.countries-details {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: space-between;
		flex-wrap: wrap;
	}
</style>