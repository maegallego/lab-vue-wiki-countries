import { defineStore } from "pinia";

export default defineStore('MyStore', {
    state: () => {
        return {
            countries: [],
        }
    },
})