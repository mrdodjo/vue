<script setup>
import {ref, reactive} from 'vue';
</script>

<template>
    <div>
        <h1>Roll dice</h1>
        <h3>Current rolls</h3>
        <div>
            <table>
                <tr>
                    <th>Number</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
        <button @click="rolldice">Gooi!</button>
    </div>
</template>
