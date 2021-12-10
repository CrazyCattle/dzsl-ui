import { defineComponent, PropType } from "vue";

export type alignType = "start" | "center" | "end" | "baseline" | "stretch";
export type justifyType = "start" | "center" | "end" | "between" | "around";

export default defineComponent({
  name: "DzRow",
  
  props: {
    align: String as PropType<alignType>,
    justify: String as PropType<justifyType>,
  },

  setup(props, { slots, emit }) {
    const renderClass = (): String => {
      let classCollections: String = "";
      if (props.align) {
        classCollections += ` items-${props.align}`;
      }
      if (props.justify) {
        classCollections += ` justify-${props.justify}`;
      }
      return classCollections;
    };

    return () => {
      return (
        <div class={["el-row", "flex", renderClass()]}>
          {slots.default && slots.default()}
        </div>
      );
    };
  },
});
