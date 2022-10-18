import { createStore } from 'vuex'
interface property {
    id: number;
    [key: string]: any;
}

export default createStore({
    state: {
        properties: [] as property[]
    },

    actions: {
        setProperties( { commit }, properties ) {
            commit( 'SET_PROPERTIES', properties );
        }
    },

    mutations: {
        SET_PROPERTIES( state, properties:property[] ) {
            state.properties = properties;
        },
        ADD_PROPERTY( state, property:property ) {
            state.properties.push(property);
        },
        EDIT_PROPERTY( state, editedProperty:property) {
            const index = state.properties.findIndex((property) => editedProperty.id === property.id);
            state.properties[index] = editedProperty;
        },
    },

    getters: {
        getProperties( state ){
            return state.properties;
        },
    }
})