import { defineComponent, ref } from "vue";
import DzButton from "@/components/button/button";

export default defineComponent({
  name: "app",
  setup(props, { emit, slots }) {
    return () => {
      return (
        <DzButton
          text=""
          type="ffdf"
          color="#f5f5f5"
          bgColor="#e4393c"
          disabled={true}
          round={true}
        >
          <div>slot 按钮</div>
        </DzButton>
      );
    };
  },
});
