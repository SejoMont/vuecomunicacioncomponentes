import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import PadreDeporte from "./components/PadreDeporte.vue";
import NumerosPadre from "./components/NumerosPadre.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import SelectMultiple from './components/SelectMultiple.vue';
import CheckBox from './components/CheckBox.vue';
import NumeroDoble from './components/NumeroDoble.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue'

const myRouters = [
    {
        path: "/", component:HelloWorld
    },
    {
        path: "/deporte", component:PadreDeporte
    },
    {
        path: "/numeros", component:NumerosPadre
    },
    {
        path: "/comics", component:ComicsComponent
    },
    {
        path: "/selectmultiple", component:SelectMultiple
    },
    {
        path: "/checkbox", component:CheckBox
    },
    {
        path: "/numerodoble/:numero?", component:NumeroDoble
    },
    {
        path: "/tablamultiplicar/:numero?", component:TablaMultiplicar
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRouters
})

export default router