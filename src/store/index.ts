import { createStore } from 'vuex'

export default createStore({
    state: {
        properties: []
    },

    actions: {
        setProperties( { commit }, properties ){
            commit( 'SET_PROPERTIES', properties );
        }
    },

    mutations: {
        SET_PROPERTIES( state, properties ){
            state.properties = properties;
        },
    },

    getters: {
        getProperties( state ){
            return state.properties;
        },
    }
})