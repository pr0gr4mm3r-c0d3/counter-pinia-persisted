import { defineStore } from 'pinia';

interface ICounterState {
	counter: number;
}

export const useCounterStore = defineStore({
	id: 'counter',
	state: (): ICounterState => ({
		counter: 0,
	}),
	persist: true,
	getters: {},
	actions: {
		increment(): void {
			this.counter++;
		},
		decrement(): void {
			this.counter--;
		},
		resetCounter(): void {
			this.counter = 0;
		},
	},
});
