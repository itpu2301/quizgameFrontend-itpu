<template>
    <!-- <nav>
        <div class="column-4 home-1">
            <h2 class="home-text">
                <RouterLink to="/">Home-Screen</RouterLink>
            </h2>
        </div>
    </nav> -->

    <main>

        <div class="logo"></div>

        <div class="parent">
            <div class="div1">
                <div class="title">
                    Willkommen <!-- {{ user }} --> XXX, zu Wer wird Millionär!
                </div>
            </div>
            <div class="div2">
                <div class="question">
                    Frage: Wird ein Roman häppchenweise in der Tageszeitung abgedruckt, steht am Ende eines Teils
                    meist?
                    {{ question }}

                </div>
            </div>
            <div class="div3">
                <div>
                    <div class="answers">{{ answer }} A: Fortsetzung folgt </div>
                    <div class="answers"><!-- {{ answer }} --> C: Die Spannung steigt </div>
                </div>
                <div>
                    <div class="answers"><!-- {{ answer }} --> B: Bleiben Sie dran! </div>
                    <div class="answers"><!-- {{ answer }} --> D: Ende offen </div>
                </div>
            </div>
            <div class="div4">
                <div class="gewinn">
                    <!-- {{ money }} -->
                    1.000.000 Euro<br>
                    500.000 Euro<br>
                    125.000 Euro<br>
                    64.000 Euro<br>
                    32.000 Euro<br>
                    --- <br>
                    16.000 Euro<br>
                    8000 Euro<br>
                    4000 Euro<br>
                    300 Euro<br>
                    2000 Euro<br>
                    --- <br>
                    1000 Euro<br>
                    500 Euro<br>
                    200 Euro<br>
                    100 Euro<br>
                    50 Euro

                </div>
            </div>
        </div>

    </main>
</template>
      


<script src="./../components/GameScreen.js" lang="js"></script>
<style>
@import "@/assets/game/game.css";
</style>