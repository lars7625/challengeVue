<template>
    <div class="survey__choices">
        <div @click="addChoice(1)">
            <font-awesome-icon icon="star" />
        </div>
        <div @click="addChoice(2)">
            <font-awesome-icon icon="star" />
        </div>
        <div @click="addChoice(3)">
            <font-awesome-icon icon="star" />
        </div>
        <div @click="addChoice(4)">
            <font-awesome-icon icon="star" />
        </div>
        <div @click="addChoice(5)">
            <font-awesome-icon icon="star" />
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


