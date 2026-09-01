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
            <td v-if="threeOfAKind">{{ diceSum }}</td>
            <td v-else>0</td>
        </tr>
        <tr>
            <td>carré</td>
            <td>totaal 5 stenen</td>
            <td v-if="carré">{{ diceSum }}</td>
            <td v-else>0</td>
        </tr>
        <tr>
            <td>full house</td>
            <td>25 punten</td>
            <td v-if="fullHouse">25</td>
            <td v-else>0</td>
        </tr>
        <tr>
            <td>kleine straat</td>
            <td>30 punten</td>
            <td v-if="smallStraight">30</td>
            <td v-else>0</td>
        </tr>
        <tr>
            <td>grote straat</td>
            <td>40 punten</td>
            <td v-if="largeStraight">40</td>
            <td v-else>0</td>
        </tr>
        <tr>
            <td>Yahtzee</td>
            <td>50 punten</td>
            <td v-if="yahtzee">50</td>
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

const yahtzee = computed(() => {
    const yahtzeeScore = Object.values(diceCounter.value).some(count => count >= 5);
    return yahtzeeScore;
});

const carré = computed(() => {
    const carréScore = Object.values(diceCounter.value).some(count => count >= 4);
    return carréScore;
});

const threeOfAKind = computed(() => {
    const threeScore = Object.values(diceCounter.value).some(count => count >= 3);
    return threeScore;
});

const fullHouse = computed(() => {
    const fullHouseScore = Object.values(diceCounter.value).includes(3) && Object.values(diceCounter.value).includes(2);
    return fullHouseScore;
});

const largeStraight = computed(() => {
    const equalOrSmallerThanOne = element => {
        return element <= 1;
    };
    const largeStraightScore =
        (Object.values(diceCounter.value)[0] == 0 || Object.values(diceCounter.value)[5] == 0) &&
        Object.values(diceCounter.value).every(equalOrSmallerThanOne);
    return largeStraightScore;
});

const smallStraight = computed(() => {
    const smallStraightScore =
        Object.values(diceCounter.value)[2] >= 1 &&
        Object.values(diceCounter.value)[3] >= 1 &&
        ((Object.values(diceCounter.value)[0] >= 1 && Object.values(diceCounter.value)[1] >= 1) ||
            (Object.values(diceCounter.value)[1] >= 1 && Object.values(diceCounter.value)[4] >= 1) ||
            (Object.values(diceCounter.value)[4] >= 1 && Object.values(diceCounter.value)[5] >= 1));
    return smallStraightScore;
});

const test = () => {
    console.log(diceArray.value);
    console.log(diceCounter.value);
    console.log(yahtzee.value);
};
</script>
