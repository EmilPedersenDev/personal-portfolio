import Vue from "vue";
import Spinner from "./spinner/Spinner.vue";
import SpinnerSimple from "./spinner/SpinnerSimple.vue";
import Slider from "./transitions/Slider.vue";
import Button from "./button/Button.vue";
import Input from "./input/Input.vue";
import Textarea from "./textarea/Textarea.vue";

Vue.component("e-spinner", Spinner);
Vue.component("e-slider", Slider);
Vue.component("e-button", Button);
Vue.component("e-input", Input);
Vue.component("e-textarea", Textarea);
Vue.component("e-spinner-simple", SpinnerSimple);
