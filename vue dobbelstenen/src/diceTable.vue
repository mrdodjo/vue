<template>
    <div>
        <table>
            <tr>
                <th>Number</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>1</td>
                <td v-for="(amount, index) in count.slice(1, 2)" :key="index">{{ amount }}</td>
            </tr>
            <tr>
                <td>2</td>
                <td v-for="(amount, index) in count.slice(2, 3)" :key="index">{{ amount }}</td>
            </tr>
            <tr>
                <td>3</td>
                <td v-for="(amount, index) in count.slice(3, 4)" :key="index">{{ amount }}</td>
            </tr>
            <tr>
                <td>4</td>
                <td v-for="(amount, index) in count.slice(4, 5)" :key="index">{{ amount }}</td>
            </tr>
            <tr>
                <td>5</td>
                <td v-for="(amount, index) in count.slice(5, 6)" :key="index">{{ amount }}</td>
            </tr>
            <tr>
                <td>6</td>
                <td v-for="(amount, index) in count.slice(6, 7)" :key="index">{{ amount }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    count: Array,
});
</script>
