<script lang='ts'>
  import currencyNames from './currenciesRU.ts';
  import { onMount } from 'svelte';

  const getCurrencyOptions = async () => {
    try {
      const targetUrl = 'https://open.er-api.com/v6/latest/USD';
      const response = await fetch(targetUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch currency data');
      }
      return response.json();
    } catch (error) {
      console.error(error);
      return { result: 'error' };
    }
  }

  let currencyOptions = [];
  let rates = {};
  let selectedCurrency1 = 'USD';
  let selectedCurrency2 = 'RUB';
  let inputValue1 = '';
  let inputValue2 = '';
  let currentRate = '';

  $: console.log(`Input value 1 changed: ${inputValue1}`);
  $: console.log(`Input value 2 changed: ${inputValue2}`);

  const calculateConversion = () => {
    if (selectedCurrency1 === selectedCurrency2) {
      inputValue2 = inputValue1;
    } else {
      const rate = (rates[selectedCurrency2] / rates[selectedCurrency1]).toFixed(2);
      console.log("rate:", rate);
      inputValue2 = (inputValue1 * rate).toFixed(2);
    }
    calculateRate();
  }

  const calculateConversion2 = () => {
    if (selectedCurrency1 === selectedCurrency2) {
      inputValue1 = inputValue2;
    } else {
      const rate = (rates[selectedCurrency2] / rates[selectedCurrency1]).toFixed(2);
      console.log("rate:", rate);
      inputValue1 = (inputValue2 / rate).toFixed(2);
    }
    calculateRate();
  }

  const calculateRate = () => {
    if (selectedCurrency1 === selectedCurrency2) {
      currentRate = `Текущий курс: 1 ${selectedCurrency1} = 1 ${selectedCurrency2}`;
    } else {
      const rate = (rates[selectedCurrency2] / rates[selectedCurrency1]).toFixed(2);
      currentRate = `Текущий курс: 1 ${selectedCurrency1} = ${rate} ${selectedCurrency2}`;
    }
  }


   const handleInput = (event) => {
    if (!/^\d*\.?\d*$/.test(event.target.value)) {
      event.preventDefault();
      event.target.value = '';
    } else {
      event.target.value = !!event.target.value && Math.abs(event.target.value) >= 0 ? Math.abs(event.target.value) : null;
    }
  }


  onMount(async () => {
    const response = await getCurrencyOptions();
    if (response.result === 'success') {
      currencyOptions = Object.keys(response.rates);
      rates = response.rates;
      calculateRate(); // Call calculateRate initially
    } else {
      console.error('Failed to fetch currency options');
    }
  });
</script>

<main class="wrapper">
  <h1>Конвертатор валют</h1>
  <form class="form">
  <div class="exchange">
  <label class="currency">
    <span>Валюта 1:</span>
    <select bind:value={selectedCurrency1} on:change={calculateConversion}>
      {#each currencyOptions as currency}
        <option value={currency}>{currencyNames[currency]}</option>
      {/each}
    </select>
    <input type="number" bind:value={inputValue1} on:input={calculateConversion} min="0" on:input={handleInput} />
  </label>

  <label class="currency">
   <span>Валюта 2:</span> 
    <select bind:value={selectedCurrency2} on:change={calculateConversion2}>
      {#each currencyOptions as currency}
        <option value={currency}>{currencyNames[currency]}</option>
      {/each}
    </select>
    <input type="number" bind:value={inputValue2} on:input={calculateConversion2} min="0" on:input={handleInput} />
  </label>
</div>
  <p>
    {#if currentRate}
      <div>{currentRate}</div>
    {:else}
      <div>Loading...</div>
    {/if}
  </p>
</form>
  <p class="reference">
    Приложение использует
    <a href="https://www.exchangerate-api.com" target="_blank">Exchange Rate API</a>
  </p>
  
</main>
