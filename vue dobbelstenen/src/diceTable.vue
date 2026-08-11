<template>
    <div>
        <table>
            <tr>
                <th>Number</th>
                <th>Amount</th>
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
                    <ul v-for="(amount, index) in count.slice(1, 7)" :key="index">
                        {{
                            amount
                        }}
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    count: Array,
    numbers: Array,
});
</script>
