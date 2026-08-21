<template>
    <table>
        <tr>
            <th colspan="3">SCOREBLOK</th>
        </tr>
        <tr>
            <th>speler:</th>
        </tr>
        <tr>
            <th>deel 1</th>
            <th>puntentelling</th>
            <th>1e spel</th>
        </tr>
        <tr>
            <td>
                <ul v-for="(number, index) in numbers" :key="index">
                    {{
                        number
                    }}
                </ul>
            </td>
            <td>
                <ul v-for="(pointtype, index) in pointnumbers" :key="index">
                    {{
                        pointtype
                    }}
                </ul>
            </td>

            <td>
                <ul v-for="(eyes, index) in diceCounter" :key="index">
                    {{
                        eyes * index
                    }}
                </ul>
            </td>
        </tr>
        <tr>
            <td>totaal bovenste helft</td>
            <td></td>
            <td>{{ diceSum }}</td>
        </tr>
        <tr>
            <th>deel 2</th>
        </tr>
        <tr>
            <td>three of a kind</td>
            <td>totaal 5 stenen</td>
            <td class="lowerTotal" id="threeOfAKind">0</td>
        </tr>
        <tr>
            <td>carré</td>
            <td>totaal 5 stenen</td>
            <td class="lowerTotal" id="carré">0</td>
        </tr>
        <tr>
            <td>full house</td>
            <td>25 punten</td>
            <td class="lowerTotal" id="fullHouse">0</td>
        </tr>
        <tr>
            <td>kleine straat</td>
            <td>30 punten</td>
            <td class="lowerTotal" id="smallStraight">0</td>
        </tr>
        <tr>
            <td>grote straat</td>
            <td>40 punten</td>
            <td class="lowerTotal" id="largeStraight">0</td>
        </tr>
        <tr>
            <td>Yahtzee</td>
            <td>50 punten</td>
            <td v-if="diceCounter.value >= 2">50</td>
            <td v-else>0</td>
        </tr>
        <tr>
            <td>change</td>
            <td>totaal 5 stenen</td>
            <td>{{ diceSum }}</td>
        </tr>
        <tr>
            <td>totaal onderste helft</td>
            <td></td>
            <td class="lowerTotal">0</td>
        </tr>
        <tr>
            <td>totaal bovenste helft</td>
            <td></td>
            <td>{{ diceSum }}</td>
        </tr>
        <tr>
            <td>totaal generaal</td>
            <td></td>
            <td id="totalGeneral">0</td>
        </tr>
    </table>
    <button @click="test">log</button>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
const diceArray = defineModel();
const numbers = ref(['enen', 'tweeën', 'drieën', 'vieren', 'vijven', 'zessen']);
const pointnumbers = ref(['alle enen', 'alle tweeën', 'alle drieën', 'alle vieren', 'alle vijven', 'alle zessen']);

const diceCounter = computed(() => {
    const diceCount = ref({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0});
    diceArray.value.forEach(amountThrown => {
        diceCount.value[amountThrown] = (diceCount.value[amountThrown] || 0) + 1;
    });
    return diceCount.value;
});

const diceSum = computed(() => {
    const initialValue = 0;
    const Sum = diceArray.value.reduce((p, a) => p + a, initialValue);
    return Sum;
});

const Yahtzee = computed(() => {
    const yahtzeeScore = diceCounter.value.find(number => number >= 2);
    console.log(yahtzeeScore);
    return yahtzeeScore;
});

const test = () => {
    console.log(diceArray.value);
    console.log(diceCounter.value);
    console.log(Yahtzee.value);
};
</script>
