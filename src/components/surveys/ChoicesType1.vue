<template>
    <div class="survey__choices">
        <div @click="addChoice(1)">
            <img class="survey__choices-image" src="../../assets/img/reaction/img_cat_supersad.png" alt="">
        </div>
        <div @click="addChoice(2)">
            <img class="survey__choices-image" src="../../assets/img/reaction/img_cat_neutral.png" alt="">
        </div>
        <div @click="addChoice(3)">
            <img class="survey__choices-image" src="../../assets/img/reaction/img_cat_happy.png" alt="">
        </div>
    </div>
</template>

<script>
  export default {
    props: [
      'selectedQuestionIndex'
    ],

    methods: {

      addChoice(choice) {
        console.log('choice')
        this.$store.dispatch('addChoice', {
          survey: this.$route.params.type,
          question: this.$parent.selectedQuestionIndex,
          choice,
        })
        this.$parent.moveToNextQuestion()
      },
    }
  }
</script>


