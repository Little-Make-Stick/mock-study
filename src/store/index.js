import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentProject: {},
        currentProjectId: 0,
        currentProjectName: '',
    },
    getters: {
        getCurrentProjectId(state){
            return state.currentProject.id
        },
        getCurrentProjectName(state){
            return state.currentProject.projectName
        }
    },
    mutations: {
        setCurrentProject(state, project) {
            state.currentProject = project
        },
        setCurrentProjectId(state, projectId) {
            state.currentProjectId = projectId
        },
    },
    actions: {},
})
