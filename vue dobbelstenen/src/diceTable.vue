<template>
    <div>
        <table>
            <tr>
                <th>Number</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>1</td>
                <td placeholder="0"></td>
            </tr>
            <tr>
                <td>2</td>
                <td placeholder="0"></td>
            </tr>
            <tr>
                <td>3</td>
                <td placeholder="0"></td>
            </tr>
            <tr>
                <td>4</td>
                <td placeholder="0"></td>
            </tr>
            <tr>
                <td>5</td>
                <td placeholder="0"></td>
            </tr>
            <tr>
                <td>6</td>
                <td placeholder="0"></td>
            </tr>
        </table>
    </div>
</template>

<script setup>
defineProps({
    dice: Array,
});
</script>
