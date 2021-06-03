<template>
  <div :class="classList">
    <input
      class="e-input"
      type="text"
      @input="onHandleInput($event.target.value)"
      @blur="onHandleBlur"
      :value="value"
      :placeholder="placeholder"
      :invalid="invalid"
    />
    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  name: "e-input",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    required: {
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
      const inputGroup = "e-input-group";
      return [
        "e-input-group",
        this.required && `${inputGroup}--is-required`,
        this.invalid && `${inputGroup}--is-invalid`,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.e-input-group {
  position: relative;
  .e-input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    background-color: hsla(0, 0%, 100%, 0.1);
    border: none;
    color: $white;
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
    .e-input {
      border: 1px solid $error;
    }
    .input-error {
      display: block;
      font-size: 12px;
      text-align: left;
      color: $error-bright;
      margin-top: 5px;
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