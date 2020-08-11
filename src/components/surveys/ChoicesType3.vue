<template>
    <div class="survey__choices">
        <div @click="addChoices(1)">
            <img class="survey__choices-image" src="../../assets/img/reaction/img_cat_supersad.png" alt="">
        </div>
        <div @click="addChoices(2)">
            <img class="survey__choices-image" src="../../assets/img/reaction/img_cat_neutral.png" alt="">
        </div>
        <div @click="addChoices(3)">
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

      addChoices(choice) {
        this.$store.dispatch('addChoices', {
          survey: this.$route.params.type,
          question: this.$parent.selectedQuestionIndex,
          choice,
        })
      },
    }
  }
</script>


