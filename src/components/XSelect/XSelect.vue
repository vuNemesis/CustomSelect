<script>
import XSelectInput from "@/components/XSelect/XSelectInput";
import XSelectMenu from "@/components/XSelect/XSelectMenu";
import { KEY_CODES } from "@/constants";
import { checkTouchSmartphoneDevice } from "@/utils/checkTouchMobileDevice";

function isGroup(option) {
  return option.options && Array.isArray(option.options);
}

export default {
  name: "x-select",

  props: {
    value: {
      type: [Number, String],
      default: null,
    },
    options: {
      type: Array,
      default() {
        return [];
      },
      validator(options) {
        return options.every(
          (option) =>
            (option.value !== null && option.label !== null) ||
            (option.group !== null && Array.isArray(option.options))
        );
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    tabIndex: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
      default: "",
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    form: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      isFocused: false,
      isOpened: false,
      isTouchDevice: false,
      selectedOption: null,
    };
  },

  watch: {
    value: {
      handler(val, oldVal) {
        if (this.value !== null && val !== oldVal) {
          this.onSelect(
            this.flatOptions.find((option) => option.value === val)
          );
        } else {
          this.onClear();
        }
      },
      immediate: true,
    },
  },

  computed: {
    indexSelectedOption() {
      return this.flatOptions.findIndex(
        (option) => option.value === this.value
      );
    },
    countOptions() {
      return this.flatOptions.length;
    },
    hasGroups() {
      return this.options.some((option) => isGroup(option));
    },
    flatOptions() {
      return this.options.flatMap((option) =>
        isGroup(option) ? option.options : option
      );
    },
    activeTouchSelect() {
      return this.isTouchDevice && !this.hasGroups;
    },
  },

  created() {
    this.isTouchDevice = checkTouchSmartphoneDevice();
  },

  mounted() {
    this.autofocus && this.$refs.wrapper.focus();
  },

  provide() {
    return {
      instance: this,
    };
  },

  methods: {
    boundingRect() {
      return this.$el.getBoundingClientRect();
    },
    onFocus() {
      this.isFocused = true;
    },
    onBlur() {
      this.isFocused = false;
      this.onClose();
    },
    onKeyDown(e) {
      const key = "which" in e ? e.which : e.keyCode;

      if (
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.metaKey ||
        key === KEY_CODES.TAB ||
        this.activeTouchSelect
      )
        return;

      switch (key) {
        case KEY_CODES.ENTER:
          this.toggleOpened();
          break;

        case KEY_CODES.ESCAPE:
          e.preventDefault();
          this.isOpened = false;
          break;

        case KEY_CODES.BACKSPACE:
        case KEY_CODES.DELETE:
          this.onClear();
          break;

        case KEY_CODES.ARROW_DOWN:
          e.preventDefault();
          this.selectNextOption();
          break;

        case KEY_CODES.ARROW_UP:
          e.preventDefault();
          this.selectPrevOption();
          break;

        case KEY_CODES.HOME:
          e.preventDefault();
          this.countOptions && this.selectFirstOption();
          break;

        case KEY_CODES.END:
          e.preventDefault();
          this.countOptions && this.selectLastOption();
          break;

        default:
          console.log("default");
      }
    },
    selectFirstOption() {
      this.countOptions && this.onSelect(this.flatOptions[0]);
    },
    selectNextOption() {
      const nextIndex = this.indexSelectedOption + 1;
      if (nextIndex >= this.countOptions) return;

      if (nextIndex >= 0) this.onSelect(this.flatOptions[nextIndex]);
    },
    selectPrevOption() {
      if (this.indexSelectedOption < 1) return;

      const prevIndex = this.indexSelectedOption - 1;
      this.onSelect(this.flatOptions[prevIndex]);
    },
    selectLastOption() {
      this.countOptions &&
        this.onSelect(this.flatOptions[this.countOptions - 1]);
    },
    onClear() {
      this.selectedOption = null;
      this.$emit("input", null);
    },
    onSelect(option, close = false) {
      if (option === null) return;

      this.selectedOption = option;
      this.$emit("input", option.value);
      close && this.onClose();
    },
    onTouchChange(e) {
      this.selectedOption = this.options.find(
        (option) => option.value == e.target.value
      );

      this.$emit("input", e.target.value);
    },
    onClose() {
      if (this.disabled) return;

      this.isOpened = false;
    },
    onOpen() {
      if (this.disabled) return;

      this.isOpened = true;
    },
    onInputClick() {
      this.toggleOpened();
    },
    toggleOpened() {
      if (this.disabled) return;

      this.isOpened ? this.onClose() : this.onOpen();
    },
    renderTouchSelect() {
      return (
        <select
          tabIndex={this.activeTouchSelect && !this.disabled ? 0 : -1}
          style={{
            "z-index": this.activeTouchSelect && !this.disabled ? 1 : -1,
          }}
          form={this.form}
          name={this.name}
          required={this.required}
          class="touch-select"
          value={this.value}
          onChange={this.onTouchChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
          disabled={this.disabled}
        >
          <option disabled value="">
            {this.placeholder}
          </option>
          {this.options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      );
    },
  },

  render() {
    let props = {};

    if (!this.disabled) {
      props = {
        attrs: {
          tabIndex: this.tabIndex,
        },
        on: {
          focus: this.onFocus,
          blur: this.onBlur,
          keydown: this.onKeyDown,
        },
      };
    }

    return (
      <div ref="wrapper" class="x-select" {...props}>
        {this.renderTouchSelect()}

        <XSelectInput vOn:click_native={this.onInputClick} />
        {this.isOpened && <XSelectMenu />}
      </div>
    );
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap");

.x-select {
  font-family: "PT Sans", sans-serif;
  position: relative;
  box-sizing: border-box;
}

.x-select:focus {
  box-shadow: none !important;
  outline: none !important;
}

.x-select * {
  box-sizing: border-box;
}

.touch-select {
  opacity: 0;
  z-index: 1;
  height: 48px;
  border-radius: 10px;
  width: 100%;
  position: absolute;
}
</style>
