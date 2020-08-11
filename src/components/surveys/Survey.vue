
<template>
    <div id="survey" class="survey">
        <!-- questions, loaded static due to problem getting it right dynamically -->
        <h1>how do you feel about these quotes</h1>
        <div class="survey__question" v-if="selectedQuestionIndex === 0">
            <img class="survey__question-image" src="@/assets/img/statements/img_statement_1.png" alt="">
        </div>
        <div class="survey__question" v-if="selectedQuestionIndex === 1">
            <img class="survey__question-image" src="@/assets/img/statements/img_statement_2.png" alt="">
        </div>
        <div class="survey__question" v-if="selectedQuestionIndex === 2">
            <img class="survey__question-image" src="@/assets/img/statements/img_statement_3.png" alt="">
        </div>
        <div class="survey__question" v-if="selectedQuestionIndex === 3">
            <img class="survey__question-image" src="@/assets/img/statements/img_statement_4.png" alt="">
        </div>
        <div class="survey__question" v-if="selectedQuestionIndex === 4">
            <img class="survey__question-image" src="@/assets/img/statements/img_statement_5.png" alt="">
        </div>
        <div class="survey__question" v-if="selectedQuestionIndex === 5">
            <img class="survey__question-image" src="@/assets/img/statements/img_statement_6.png" alt="">
        </div>
        <!--  end of the questions, if all are answered you get a check otherwise error message -->
        <div class="survey__question" v-if="selectedQuestionIndex === 6">
            <div v-if="areWeDone()">
                <img src="../../assets/img/markers/img_control_tool_finish.svg"/>
            </div>
            <div v-else>
                Some questions are not filled in
            </div>

        </div>
        <!-- show questions if index is not 6 -->
        <div v-if="selectedQuestionIndex < 6">
            <!-- survey component 1 -->
            <div v-if="selectedSurvey === 1">
                <ChoicesType1 selectedQuestionIndex="selectedQuestionIndex"/>
            </div>
            <!--  survey component 2 -->
            <div v-if="selectedSurvey === 2">
                <ChoicesType2 selectedQuestionIndex="selectedQuestionIndex"/>
            </div>
            <!-- survey component 3 -->
            <div v-if="selectedSurvey === 3">
                <ChoicesType3 selectedQuestionIndex="selectedQuestionIndex"/>
            </div>

        </div>
        <!--  prev, next buttons -->
        <div class="survey__buttons">
            <button @click="moveToPrevQuestion()">
                <font-awesome-icon icon="chevron-left" />
            </button>
            <button @click="moveToNextQuestion()">
                <font-awesome-icon icon="chevron-right" />
            </button>
        </div>
    </div>
</template>

<script>
  import {questions} from './surveyQuestions'
  import ChoicesType1 from './ChoicesType1'
  import ChoicesType2 from './ChoicesType2'
  import ChoicesType3 from './ChoicesType3'

  export default {
    components: {
      ChoicesType1,
      ChoicesType2,
      ChoicesType3
    },
    data() {
      // use type from params to select a survey
      return {
        selectedSurvey: Number(this.$route.params.type),
        questions,
        selectedQuestionIndex: 0,
      }
    },
    computed: {
      submittedSurveys() {
        return this.$store.state.submittedSurveys
      }
    },

    methods: {
      moveToNextQuestion() {
        if (this.selectedQuestionIndex < 7) {
          this.selectedQuestionIndex += 1
        }
      },
      moveToPrevQuestion() {
        if (this.selectedQuestionIndex > 0) {
          this.selectedQuestionIndex -= 1
        }
      },
      // determine if the survey is finished
      areWeDone() {
        return this.$store.state.submittedSurveys[this.$route.params.type] && Object.keys(this.$store.state.submittedSurveys[this.$route.params.type]).length === 6
      }
    }


  }
</script>

<style>
    #app {
        display: flex;
        justify-content: center;
    }

    .survey {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #77b9d7;
        width: 60rem;
    }

    .survey__question {

    }

    .survey__question-image {
        max-width: 40rem;
        height: 30rem;
    }

    .survey__buttons {
        display: flex;
        justify-content: space-between;

    }

    .survey__buttons button {
        height: 5rem;
        width: 5rem;
    }

    .survey__buttons button svg {
        /* this is bad, I know */
        width: 64% !important;
        height: auto;
    }

    .survey__buttons button:hover {
        transform: scale(1.1);

    }

    .survey__choices {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
    }

    .survey__choices img:hover {
        transform: scale(1.1);

    }

    .survey__choices svg {
        width: 64% !important;
        height: auto;
    }

    .survey__choices-image {

    }
</style>
