<script lang='ts'>
import currencyNames from './currenciesRU.ts';

import { onMount } from 'svelte';

  const getCurrencyOptions = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://open.er-api.com/v6/latest/USD';
    const response = await fetch(proxyUrl + targetUrl);
    return response.json();
  }

  let currencyOptions = [];
  let rates = {};

  let selectedCurrency1 = 'USD';
  let selectedCurrency2 = 'RUB';
  let inputValue1 = '';
  let inputValue2 = '';

  // Reactive statement to log changes in inputValue1 and inputValue2
  $: console.log(`Input value 1 changed: ${inputValue1}`);
  $: console.log(`Input value 2 changed: ${inputValue2}`);

  let currentRate = '';

  const calculateConversion = () => {
    if (selectedCurrency1 === selectedCurrency2) {
      inputValue2 = inputValue1;
    } else {
      let result = inputValue1 * rates[selectedCurrency2];
      if (result <= 0) {
        inputValue2 = '';
      } else {
        inputValue2 = result.toFixed(2);
      }
    }
    calculateRate();
  }

  const calculateConversion2 = () => {
    if (selectedCurrency1 === selectedCurrency2) {
      inputValue1 = inputValue2;
    } else {
      let result = inputValue2 / rates[selectedCurrency2];
      if (result <= 0) {
        inputValue1 = '';
      } else {
        inputValue1 = result.toFixed(2);
      }
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
    }
  }

  onMount(async () => {
    const response = await getCurrencyOptions();
    if (response.result === 'success') {
      currencyOptions = Object.keys(response.rates);
      rates = response.rates;
    }
    calculateRate(); // Initial calculation
  });
</script>

<main>
<h1>Конвертатор валют</h1>
  <label>
    Валюта 1:
    <select bind:value={selectedCurrency1} on:change={calculateConversion}>
      {#each currencyOptions as currency}
        <option value={currency}>{currencyNames[currency]}</option>
      {/each}
    </select>
    <input type="number" bind:value={inputValue1} on:input={calculateConversion} min="0" on:input={handleInput} />
  </label>

  <label>
    Валюта 2:
    <select bind:value={selectedCurrency2} on:change={calculateConversion2}>
      {#each currencyOptions as currency}
        <option value={currency}>{currencyNames[currency]}</option>
      {/each}
    </select>
    <input type="number" bind:value={inputValue2} on:input={calculateConversion2} min="0" on:input={handleInput} />
  </label>

  <p>
  {#if currentRate}
    <div>{currentRate}</div>
  {/if}
  </p>
</main>
