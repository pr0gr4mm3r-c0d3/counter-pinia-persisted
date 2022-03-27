<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { useCounterStore } from './store/counterStore';
const counter = useCounterStore();
const { increment, decrement, resetCounter } = useCounterStore();

// const incrementBy = () => counter.increment();
</script>

<template>
	<img alt="Vue logo" src="./assets/logo.png" />

	<p>{{ counter.$state.counter }}</p>

	<button @click="increment">increment</button>
	<button @click="decrement">decrement</button>
	<button @click="resetCounter">resetCounter</button>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
