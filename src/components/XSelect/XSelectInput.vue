<script>
export default {
  name: "XSelectInput",
  inject: ["instance"],
  computed: {
    classes() {
      const { instance } = this;

      return {
        "x-select__input": true,
        "x-select__input--focused": instance.isFocused || instance.isOpened,
        "x-select__input--disabled": instance.disabled,
      };
    },
    wrapperClasses() {
      const { instance } = this;

      return {
        "x-select__input-wrapper": instance.selectedOption,
      };
    },
  },
  methods: {
    renderPlaceholder() {
      const { instance } = this;

      const classes = {
        "x-select__placeholder": true,
        "x-select__placeholder--top": instance.selectedOption,
      };

      return <div class={classes}>{instance.placeholder}</div>;
    },
    renderValue() {
      const { instance } = this;

      if (!instance.selectedOption) return null;

      const classes = {
        "x-select__value": true,
      };

      return <div class={classes}>{instance.selectedOption.label}</div>;
    },
    renderArrow() {
      const { instance } = this;

      const classes = {
        "x-select__input-arrow": true,
        "x-select__input-arrow--down": instance.isOpened,
      };

      return (
        <div class={classes}>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.66674 1.07507C9.66697 1.17282 9.64758 1.26963 9.6097 1.35989C9.57182 1.45015 9.51621 1.53206 9.4461 1.60085L5.52265 5.45215C5.38281 5.58961 5.19378 5.66675 4.99676 5.66675C4.79974 5.66675 4.61071 5.58961 4.47087 5.45215L0.554052 1.60742C0.413477 1.46928 0.334066 1.2815 0.333288 1.08537C0.33251 0.889245 0.41043 0.700846 0.549905 0.56162C0.68938 0.422393 0.878986 0.343744 1.07701 0.342974C1.27504 0.342203 1.46526 0.419375 1.60584 0.557512L5.00008 3.88797L8.39432 0.550939C8.49901 0.448032 8.63213 0.378145 8.77688 0.350098C8.92163 0.322051 9.07153 0.337102 9.20766 0.39335C9.34378 0.449597 9.46004 0.544522 9.54174 0.666144C9.62345 0.787765 9.66694 0.930632 9.66674 1.07671L9.66674 1.07507Z"
              fill="#9C9C9C"
            />
          </svg>
        </div>
      );
    },
  },
  render() {
    return (
      <div class={this.classes}>
        <div class={this.wrapperClasses}>
          {this.renderPlaceholder()}
          {this.renderValue()}
        </div>
        {this.renderArrow()}
      </div>
    );
  },
};
</script>

<style>
.x-select__input {
  position: relative;
  padding-left: 16px;
  border: 1px solid #cccccc;
  outline: 4px solid transparent;
  border-radius: 10px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.x-select__input:not(.x-select__input--disabled):hover {
  cursor: pointer;
}

.x-select__input-wrapper {
  padding-top: 6px;
}

.x-select__input-arrow {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 16px;
  height: 16px;
  margin-right: 16px;
  transition: transform 0.3s;
}

.x-select__input-arrow--down {
  transform: rotate(-180deg);
}

.x-select__input--focused {
  border-color: #59ce65;
  outline-color: #e7ffe9;
}

.x-select__input--disabled {
  background: #f7f7f7;
  border-color: #ebebeb;
}

.x-select__placeholder {
  font-weight: 400;
  font-size: 16px;
  color: #9c9c9c;
}

.x-select__placeholder--top {
  font-size: 13px;
  color: #5f6062;
  line-height: 12px;
}

.x-select__value {
  font-size: 16px;
  line-height: 22px;
  color: #333333;
}
</style>
