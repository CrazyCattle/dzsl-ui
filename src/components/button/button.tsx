import { defineComponent, CSSProperties, PropType } from "vue";
import "./button.less";

const componentsName = "button";

export type buttonTypes =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "info"
  | "danger"
  | "text";

export type buttonSizes = "mini" | "small" | "medium" | "large";

export default defineComponent({
  name: "DzButton",

  props: {
    text: String,
    type: {
      type: String as PropType<buttonTypes>,
      default: 'default'
    },
    size: {
      type: String as PropType<buttonSizes>,
      default: 'medium'
    },
    color: String,
    bgColor: String,
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
    circle: {
      type: Boolean,
      default: false,
    },
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
        color: color,
        backgroundColor: bgColor,
      };
      return style;
    };

    const renderClass = (): String => {
      let classCollections = `dz-${componentsName}`;
      if (props.type) {
        let type = props.type;
        classCollections += ` dz-${componentsName}--${type}`;
      }

      if (props.circle) {
        classCollections += ` is-circle`;
      } else {
        if (props.size) {
          let size = props.size;
          classCollections += ` dz-${componentsName}--${size}`;
        }
        if (props.round) {
          classCollections += " is-round";
        }
      }
      return classCollections;
    };

    return () => {
      return (
        <button
          class={renderClass()}
          style={renderStyle()}
          disabled={props.disabled}
          type="button"
        >
          <div class="flex items-center">
            {props.loading && <div class="is-loading"></div>}
            <div>
              {/* <img style="width: 16px; height: 16px" src="@/assets/icons/dz-icon--add.svg" alt="" /> */}
            </div>
            {renderText()}
          </div>
        </button>
      );
    };
  },
});
