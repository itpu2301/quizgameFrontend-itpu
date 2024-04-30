<template>
    <main>

        <div class="logo"></div>
        <div class="buttons">
            <div class="button">

                <RouterLink to="/">Start</RouterLink>

            </div>
            <div class="button">

                <RouterLink to="/score">Zum High-Score</RouterLink>

            </div>
        </div>
        <div class="parent">
            <div class="div1">
                <div class="title">
                    Willkommen <!-- {{ user }} -->, zu Wer wird Millionär!
                </div>
            </div>
            <div class="div2">
                <div class="question">
                    Frage: Wird ein Roman häppchenweise in der Tageszeitung abgedruckt, steht am Ende eines Teils
                    meist?
                    <!-- {{ question }} -->

                </div>
            </div>
            <div class="div3">
                <div>
                    <div @click="clickAnswer('A')" class="answers">
                        <p>{{ answers.A }}</p>
                    </div>
                    <div @click="clickAnswer('C')" class="answers">
                        <p>{{ answers.C }}</p>
                    </div>
                </div>
                <div>
                    <div @click="clickAnswer('B')" class="answers">
                        <p>{{ answers.B }}</p>
                    </div>
                    <div @click="clickAnswer('D')" class="answers">
                        <p>{{ answers.D }}</p>
                    </div>
                </div>
            </div>
            <div class="div4">
                <div class="gewinn">

                    <div v-for="(amount, index) in amounts" :key="index"
                        :class="{ 'selected': index === amounts.length - 1 - categoryLevel }">
                        {{ amount }} <br>
                        <span
                            v-if="(amount === '32.000 Euro' || amount === '1000 Euro') && index !== amounts.length - 1"
                            class="separator">---</span>
                    </div>
                </div>
            </div>

        </div>

    </main>
</template>



<script src="./../components/GameScreen.js" lang="js"></script>
<style>
@import "@/assets/game/game.css";
</style>