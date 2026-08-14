<template>
    <table>
        <tr>
            <th colspan="9">SCOREBLOK</th>
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
            <td>enen</td>
            <td>alle enen</td>
            <td class="upperCount">0</td>
        </tr>
        <tr>
            <td>tweeën</td>
            <td>alle tweeën</td>
            <td class="upperCount">0</td>
        </tr>
        <tr>
            <td>drieën</td>
            <td>alle drieën</td>
            <td class="upperCount">0</td>
        </tr>
        <tr>
            <td>vieren</td>
            <td>alle vieren</td>
            <td class="upperCount">0</td>
        </tr>
        <tr>
            <td>vijven</td>
            <td>alle vijven</td>
            <td class="upperCount">0</td>
        </tr>
        <tr>
            <td>zessen</td>
            <td>alle zessen</td>
            <td class="upperCount">0</td>
        </tr>
        <tr>
            <td>totaal aantal punten</td>
            <td></td>
            <td class="upperTotal">0</td>
        </tr>
        <tr>
            <td>totaal bovenste helft</td>
            <td></td>
            <td class="upperTotal">0</td>
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
            <td class="lowerTotal" id="yahtzee">0</td>
        </tr>
        <tr>
            <td>change</td>
            <td>totaal 5 stenen</td>
            <td class="lowerTotal" id="change">0</td>
        </tr>
        <tr>
            <td>totaal onderste helft</td>
            <td></td>
            <td class="lowerTotal">0</td>
        </tr>
        <tr>
            <td>totaal bovenste helft</td>
            <td></td>
            <td class="upperTotal">0</td>
        </tr>
        <tr>
            <td>totaal generaal</td>
            <td></td>
            <td id="totalGeneral">0</td>
        </tr>
    </table>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
const diceArray = defineModel();
</script>
