<script>
export default {
  name: "XSelectOption",
  props: {
    option: {
      required: true,
      type: [Number, String],
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        "x-select__option": true,
        "x-select__option--selected": this.selected,
      };
    },
  },
  render() {
    return (
      <div class={this.classes} role="option">
        {this.option}
      </div>
    );
  },
};
</script>

<style>
.x-select__option {
  padding: 8px;
  margin: 0 8px;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  height: 44px;
  display: flex;
  align-items: center;
  user-select: none;
}

.x-select__option:hover {
  cursor: pointer;
  background-color: #ebebeb;
}

.x-select__option--selected {
  background-color: #f7f7f7;
}
</style>
