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
            <td>{{ threeOfAKind }}</td>
        </tr>
        <tr>
            <td>carré</td>
            <td>totaal 5 stenen</td>
            <td>{{ carré }}</td>
        </tr>
        <tr>
            <td>full house</td>
            <td>25 punten</td>
            <td>{{ fullHouse }}</td>
        </tr>
        <tr>
            <td>kleine straat</td>
            <td>30 punten</td>
            <td>{{ smallStraight }}</td>
        </tr>
        <tr>
            <td>grote straat</td>
            <td>40 punten</td>
            <td>{{ largeStraight }}</td>
        </tr>
        <tr>
            <td>Yahtzee</td>
            <td>50 punten</td>
            <td>{{ yahtzee }}</td>
        </tr>
        <tr>
            <td>change</td>
            <td>totaal 5 stenen</td>
            <td>{{ diceSum }}</td>
        </tr>
        <tr>
            <td>totaal onderste helft</td>
            <td></td>
            <td>{{ totalLower }}</td>
        </tr>
        <tr>
            <td>totaal bovenste helft</td>
            <td></td>
            <td>{{ diceSum }}</td>
        </tr>
        <tr>
            <td>totaal generaal</td>
            <td></td>
            <td>{{ diceSum + totalLower }}</td>
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

const diceSum = computed(() => diceArray.value.reduce((p, a) => p + a, 0));
const XOfAkind = checkForX => Object.values(diceCounter.value).some(c => c >= checkForX); // True or false?

const threeOfAKind = computed(() => (XOfAkind(3) ? diceSum.value : 0));
const carré = computed(() => (XOfAkind(4) ? diceSum.value : 0));
const yahtzee = computed(() => (XOfAkind(5) ? 50 : 0));

const fullHouse = computed(() => (XOfAkind(3) && XOfAkind(2) ? 25 : 0));

const checkStraight = length => {
    // Kijkt naar length en bepaald hoe vaak je for loop moet doen? Of splice o.i.d. toepassen?
};

const smallStraight = computed(() => {
    const smallStraightScore =
        Object.values(diceCounter.value)[2] >= 1 &&
        Object.values(diceCounter.value)[3] >= 1 &&
        ((Object.values(diceCounter.value)[0] >= 1 && Object.values(diceCounter.value)[1] >= 1) ||
            (Object.values(diceCounter.value)[1] >= 1 && Object.values(diceCounter.value)[4] >= 1) ||
            (Object.values(diceCounter.value)[4] >= 1 && Object.values(diceCounter.value)[5] >= 1));
    if (smallStraightScore == true) {
        return 30;
    } else {
        return 0;
    }
});

const largeStraight = computed(() => {
    const equalOrSmallerThanOne = element => {
        return element <= 1;
    };
    const largeStraightScore =
        (Object.values(diceCounter.value)[0] == 0 || Object.values(diceCounter.value)[5] == 0) &&
        Object.values(diceCounter.value).every(equalOrSmallerThanOne);
    if (largeStraightScore == true) {
        return 40;
    } else {
        return 0;
    }
});

const totalLower = computed(() => {
    const totalLowerScore =
        threeOfAKind.value +
        carré.value +
        yahtzee.value +
        fullHouse.value +
        largeStraight.value +
        smallStraight.value +
        diceSum.value;
    return totalLowerScore;
});

const test = () => {
    console.log(diceCounter.value);
    console.log(XOfAkind(4));
    console.log(Object.values(diceCounter.value));
};
</script>
