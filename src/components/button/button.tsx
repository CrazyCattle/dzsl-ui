import { defineComponent, CSSProperties } from "vue";
import "./button.less"

const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
];

const buttonSizes = [
  "mini",
  "small",
  "medium",
  "large"
]
const componentsName = 'button'

export default defineComponent({
  name: "DzButton",

  props: {
    text: String,
    type: {
      type: String,
      values: buttonTypes,
      default: "default",
    },
    size:  {
      type: String,
      values: buttonSizes,
      default: "medium" 
    },
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
        color: color,
        backgroundColor: bgColor,
      };
      return style;
    };

    const renderClass = (): String => {
      let classCollections =`dz-${componentsName}` 
      
      if (props.type) {
        let type = buttonTypes.indexOf(props.type) > -1 ? props.type : 'default'
        classCollections += ` dz-${componentsName}--${type}`
      }
      if (props.size) {
        let size = buttonSizes.indexOf(props.size) > -1 ? props.size : 'medium'
        classCollections += ` dz-${componentsName}--${size}`
      }
      if (props.round) {
        classCollections += ' is-round'
      }
      return classCollections
    }

    return () => {
      return (
        <button
          class={renderClass()}
          style={renderStyle()}
          disabled={props.disabled}
          type="button"
        >
          <div class="flex items-center">
            {
              props.loading && <div class="is-loading">loading</div>
            }
            {renderText()}
          </div>
        </button>
      );
    };
  },
});
