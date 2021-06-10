<template>
  <div class="contact">
    <form @submit.prevent="submit" :class="{ animate: isContactAnimating }">
      <div class="contact-form-action" v-if="!isEmailSent">
        <h1>Contact</h1>
        <e-input
          type="text"
          placeholder="Name"
          v-model="model.name"
          required
          @blur="$v.model.name.$touch"
          :invalid="$v.model.name.$dirty && $v.model.name.$invalid"
        >
          <span
            slot="error"
            class="input-error"
            v-if="$v.model.name.$dirty && !$v.model.name.required"
            >Name is required.</span
          >
          <span
            slot="error"
            class="input-error"
            v-if="$v.model.name.$dirty && !$v.model.name.alphaLetterValidation"
            >Name must be alphabetic.</span
          >
        </e-input>
        <e-input
          type="text"
          placeholder="Email"
          v-model="model.email"
          required
          @blur="$v.model.email.$touch"
          :invalid="$v.model.email.$dirty && $v.model.email.$invalid"
        >
          <span
            slot="error"
            class="input-error"
            v-if="$v.model.email.$dirty && !$v.model.email.required"
            >Not a valid Email.</span
          >
          <span
            slot="error"
            class="input-error"
            v-if="$v.model.email.$dirty && !$v.model.email.email"
            >Not a valid Email.</span
          >
        </e-input>
        <e-textarea
          type="text"
          placeholder="Message"
          v-model="model.message"
          @blur="$v.model.message.$touch"
          :invalid="$v.model.message.$dirty && $v.model.message.$invalid"
        >
          <span
            slot="error"
            class="input-error"
            v-if="$v.model.message.$dirty && !$v.model.message.required"
            >Message is required.</span
          >
          <span
            slot="error"
            class="input-error"
            v-if="$v.model.message.$dirty && !$v.model.message.minLength"
            >Message must be at least 10 characters.</span
          >
          <span
            slot="error"
            class="input-error"
            v-if="$v.model.message.$dirty && !$v.model.message.maxLength"
            >Message cannot be longer than 1000 characters.</span
          >
        </e-textarea>
        <e-button
          type="submit"
          btnText="Send Message"
          minWidth="150"
          :hasIcon="false"
          :disabled="isDisabled"
          :isLoading="isLoading"
        />
        <e-error :error="error" v-if="Object.keys(error).length !== 0" />
        <span class="required-definition"><span>*</span> Required fields</span>
      </div>
      <e-success v-show="isEmailSent" :isActive="isEmailSent" />
    </form>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import alphaLetterValidation from "../services/validations.js";
import { mapMutations } from "vuex";
import Success from "../components/success/Success.vue";
import axios from "axios";

export default {
  name: "e-contact",
  components: {
    "e-success": Success,
  },
  data() {
    return {
      model: {
        name: "",
        message: "",
        email: "",
      },
      isEmailSent: false,
      isLoading: false,
      error: {},
      isContactAnimating: false,
    };
  },
  mounted() {
    this.setBlackNavbar(true);
    setTimeout(() => {
      this.isContactAnimating = true;
    }, 1);
  },
  validations: {
    model: {
      name: {
        required,
        alphaLetterValidation,
      },
      email: {
        required,
        email,
      },
      message: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(1000),
      },
    },
  },
  methods: {
    ...mapMutations({
      setBlackNavbar: "SET_BLACK_NAVBAR",
    }),
    async submit() {
      try {
        if (this.$v.$invalid) return;

        for (let value of Object.values(this.model)) {
          if (!value) return;
        }
        this.error = {};
        this.isLoading = true;

        const { status } = await axios.post(
          `${process.env.VUE_APP_API_URL}/mail`,
          this.model
        );

        if (status !== 200) {
          throw new Error("Could not send the email.");
        }

        this.isEmailSent = true;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        this.error = err.response.data;
      }
    },
  },
  computed: {
    isDisabled() {
      return this.$v.$invalid;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-image: url("../assets/images/forest-creative-gray.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 400px;
    background-color: $black-background;
    padding: 20px;
    box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.5);
    transition: all $animation-duration ease $animation-delay;
    transform: translateY(400px);
    opacity: 0;
    visibility: hidden;
    h1,
    .e-input-group,
    .e-textarea-group,
    .e-button {
      margin: 20px 0;
    }
    h1 {
      text-align: center;
      margin-bottom: 35px;
    }
    .e-button {
      margin: 20px auto;
    }
    .required-definition {
      font-size: 10px;
      float: right;
      span {
        font-size: 14px;
        color: $pink;
      }
    }

    &.animate {
      transform: translateY(0px);
      opacity: 1;
      visibility: visible;
    }
  }

  .about__back-to-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    cursor: pointer;
    @media (max-width: 768px) {
      left: 50%;
      bottom: 5%;
      right: auto;
      transform: translateX(-50%);
      background: $main-background;
      opacity: 0.9;
      border-radius: 5px;
      padding: 10px;
      z-index: 100;
      img {
        display: none;
      }
      p {
        margin: 0 !important;
        text-decoration: underline;
      }
    }
    right: 5%;
    bottom: 5%;
    img {
      height: 20px;
      width: 20px;
      flex-basis: 100%;
      transform: rotate(180deg);
      animation: bounceUpDown 2s infinite;
    }
    p {
      margin-top: 12px;
      font-size: 12px;
      letter-spacing: 2px;
    }
  }
}

@keyframes bounceUpDown {
  0% {
    transform: translateY(0px) rotate(180deg);
  }
  50% {
    transform: translateY(10px) rotate(180deg);
  }

  100% {
    transform: translateY(0px) rotate(180deg);
  }
}
</style>