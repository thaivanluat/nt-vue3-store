import { defineStore } from 'pinia';

export const useAlertStore = defineStore({
    id: 'alert',
    state: () => ({
        loading: false
    }),
    actions: {
        setLoading(loading) {
            this.loading = loading
        }   
    }
});