<script>
import XSelectOption from "@/components/XSelect/XSelectOption";
import { DIRECTIONS } from "@/constants";

export default {
  name: "XSelectMenu",
  inject: ["instance"],
  computed: {
    classes() {
      return {
        "x-select__menu": true,
        "x-select__menu--up": this.direction === DIRECTIONS.UP,
      };
    },
  },
  data() {
    return {
      maxHeight: 200,
      direction: DIRECTIONS.DOWN,
    };
  },
  methods: {
    setMenuHeightAndDirection() {
      const { instance } = this;
      const boundingRect = instance.boundingRect();

      const heightBefore = Math.round(boundingRect.top);
      const heightAfter = Math.round(
        document.documentElement.clientHeight - boundingRect.bottom
      );

      this.direction = DIRECTIONS.DOWN;
      this.maxHeight = heightAfter - 20;

      if (heightBefore > heightAfter) {
        this.direction = DIRECTIONS.UP;
        this.maxHeight = heightBefore - 20;
      }
    },
    renderGroup(group) {
      return (
        <div class="x-select__group" key={group.group}>
          <div class="x-select__group-label">{group.group}</div>
          {group.options.map((option) => this.renderOption(option))}
        </div>
      );
    },
    renderOption(option) {
      const { instance } = this;

      return (
        <XSelectOption
          class={`x-option-${option.value}`}
          option={option.label}
          key={option.value}
          selected={option.value === instance.value}
          nativeOnClick={() => instance.onSelect(option, true)}
        />
      );
    },
    renderOptions() {
      const { instance } = this;

      return instance.options.map((option) =>
        option.group ? this.renderGroup(option) : this.renderOption(option)
      );
    },
  },
  beforeMount() {
    this.setMenuHeightAndDirection();
  },
  render() {
    return (
      <div
        class={this.classes}
        style={{ maxHeight: `${this.maxHeight}px` }}
        vOn:wheel_prevent={() => {}}
        vOn:touchmove_prevent={() => {}}
        vOn:scroll_prevent={() => {}}
      >
        <div class="x-select__menu-wrapper" v-scrollbar ref="wrapper">
          {this.renderOptions()}
        </div>
      </div>
    );
  },
};
</script>

<style>
.x-select__menu {
  position: absolute;
  padding: 8px 0;
  top: 56px;
  left: 0;
  right: 0;

  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.x-select__menu--up {
  top: auto;
  bottom: 56px;
}

.x-select__menu-wrapper {
  position: relative;
}

.x-select__group {
  margin-top: 8px;
  border-top: 1px solid #ebebeb;
}

.x-select__group-label {
  padding: 9px 12px 5px 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #5f6062;
}
</style>
