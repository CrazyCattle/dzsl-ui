import { defineComponent, ref } from "vue";
import DzButton from "@/components/button/button";
import "./index.less";

export default defineComponent({
  name: "app",
  setup(props, { emit, slots }) {
    return () => {
      return (
        <div class=" mt-3 mb-3 ml-5">
          <DzButton>
            <div>按钮 默认</div>
          </DzButton>
          <span class="mr-1"></span>
          <DzButton type="primary">
            <div>按钮 primary</div>
          </DzButton>
          <span class="mr-1"></span>
          <DzButton type="info">
            <div>按钮 info</div>
          </DzButton>
          <span class="mr-1"></span>
          <DzButton type="success">
            <div>按钮 succss</div>
          </DzButton>
          <span class="mr-1"></span>
          <DzButton type="danger">
            <div>按钮 danger</div>
          </DzButton>
          <span class="mr-1"></span>
          <DzButton type="warning">
            <div>按钮</div>
          </DzButton>
        </div>
      );
    };
  },
});
