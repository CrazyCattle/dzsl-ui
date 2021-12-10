import { defineComponent, CSSProperties } from "vue";
import "./icon.less";

const componentsName = "icon";

export default defineComponent({
  name: "DzIcon",

  props: {
    size: {
      type: String,
      default: "20",
    },
    name: {
      type: String,
      default: "ok",
    },
    link: String,
  },
  setup(props, { emit, slots }) {
    const renderSize = (): CSSProperties => {
      const { size, name } = props;
      const style: CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
      };
      return style;
    };

    const renderClass = () => {
      let classCollections = `dz-${componentsName}`;

      const { name } = props;
      if (name) {
        classCollections += ` dz-${componentsName}--${name}`;
      }

      return classCollections;
    };

    return () => {
      return (
        <div class={renderClass()} style={renderSize()}>
          <i></i>
        </div>
      )
    };
  },
});
