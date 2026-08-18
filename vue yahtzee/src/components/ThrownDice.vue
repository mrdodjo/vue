<template>
    <div>
        <button @click="ThrowDice">Throw Dice!</button>
        <div class="centerdiv">
            <div class="horizontal">
                <ul v-for="(dice, index) in diceArray" :key="index">
                    {{
                        dice
                    }}
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
const diceArray = defineModel();

const ThrowDice = () => {
    diceArray.value.length = 0;
    for (let i = 0; i < 5; i++) {
        diceArray.value.push(Math.floor(Math.random() * 6 + 1));
    }
};
</script>
