import { defineComponent, CSSProperties } from "vue";

const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  "",
];

export default defineComponent({
  name: "DzButton",

  props: {
    text: String,
    type: {
      type: String,
      values: buttonTypes,
      default: "",
    },
    size: String,
    color: String,
    bgColor: String,
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
  },

  setup(props, { slots, emit }) {
    const renderText = (): JSX.Element => {
      let text;
      text = slots.default ? slots.default() : props.text;
      return <span>{text}</span>;
    };

    const renderStyle = (): CSSProperties => {
      const { color, bgColor } = props;
      const style: CSSProperties = {
        color: color || "white",
        backgroundColor: bgColor || "blue",
      };
      return style;
    };

    return () => {
      return (
        <button style={renderStyle()} disabled={props.disabled} type="button">
          {renderText()}
        </button>
      );
    };
  },
});
