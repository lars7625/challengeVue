import Vuex from 'vuex'
import Vue from 'vue'
import uniq from 'lodash/uniq'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // [{surveyType: { question: value, choice: value, question2:...}]
    submittedSurveys: {},
  },

  mutations: {
    addChoice(state, payload) {
      if (!state.submittedSurveys[payload.survey]) {
        state.submittedSurveys[payload.survey] = {}
      }
      state.submittedSurveys[payload.survey][payload.question] = payload.choice
    },
    addChoices(state, payload) {
      if (!state.submittedSurveys[payload.survey]) {
        state.submittedSurveys[payload.survey] = {}
      }
      if (!state.submittedSurveys[payload.survey][payload.question]) {
        state.submittedSurveys[payload.survey][payload.question] = []
      }

      /* todo should be able to remove choices, another time  */
      const currentSurvey = state.submittedSurveys[payload.survey][payload.question]

      state.submittedSurveys[payload.survey][payload.question] = uniq([...currentSurvey, payload.choice])
    }
  },


  actions: {
    addChoice(context, payload) {
      if (payload.choice > -1) {
        context.commit('addChoice', payload)
      } else {
        return false
      }
    },

    addChoices(context, payload) {
      if (payload.choice > -1) {
        context.commit('addChoices', payload)
      } else {
        return false
      }
    }
  }
})
