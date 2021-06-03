<template>
  <div :class="classList">
    <textarea
      class="e-textarea"
      name="message"
      id="message"
      cols="30"
      rows="5"
      @input="onHandleInput($event.target.value)"
      @blur="onHandleBlur"
      :value="value"
      :placeholder="placeholder"
      :invalid="invalid"
    ></textarea>
    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    value: {
      type: String,
      default: "",
    },
    Textarea: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: true,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onHandleInput(value) {
      this.$emit("input", value);
    },
    onHandleBlur() {
      this.$emit("blur");
    },
  },
  computed: {
    classList() {
      const textarea = "e-textarea-group";
      return [
        "e-textarea-group",
        this.invalid && `${textarea}--is-invalid`,
        this.required && `${textarea}--is-required`,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.e-textarea-group {
  position: relative;
  .e-textarea {
    width: 100% !important;
    padding: 10px;
    border-radius: 8px;
    background-color: hsla(0, 0%, 100%, 0.1);
    border: none;
    color: $white;
    resize: none;
    letter-spacing: normal;
    line-height: normal;
    font-style: normal;
    transition: all $animation-short-duration ease;
    &:focus {
      outline: none;
      box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.5);
    }
    &::placeholder {
      color: $white;
    }
  }
  &--is-invalid {
    .e-textarea {
      border: 1px solid $error;
    }
    .input-error {
      display: block;
      font-size: 12px;
      text-align: left;
      color: $error-bright;
      margin-top: 1px;
    }
  }
  &--is-required {
    &::before {
      content: "*";
      position: absolute;
      left: 0;
      top: -15px;
      color: $pink;
    }
  }
}
</style>