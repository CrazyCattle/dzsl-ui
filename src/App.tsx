import { defineComponent, ref } from "vue";
import DzButton from "@/components/button/button";
import DzIcon from "@/components/icon/icon";
import DzRow  from "@/components/row/row";

import "./index.less";

export default defineComponent({
  name: "app",
  setup(props, { emit, slots }) {
    return () => {
      return (
        <div class=" mt-3 mb-3 ml-5">
          <div class=" mb-5">
            <DzButton class="mr-2">
              <div>默认</div>
            </DzButton>
            <DzButton class="mr-2" type="primary" size="large" loading round>
              <div>primary large</div>
            </DzButton>
            <DzButton class="mr-2" type="info" size="medium">
              <div>info medium</div>
            </DzButton>
            <DzButton class="mr-2" type="success" size="mini" round>
              <div>succss mini</div>
            </DzButton>
            <DzButton class="mr-2" type="danger" size="small">
              <div>danger small</div>
            </DzButton>
            <DzButton type="warning">
              <div>warning default</div>
            </DzButton>
          </div>

          <div class="flex items-center mb-5">
            <DzButton type="warning" circle></DzButton>
            <DzIcon></DzIcon>
          </div>

          <div>
            <DzRow>
              <DzRow justify="center">1231212</DzRow>
              <DzRow justify="center">123</DzRow>
            </DzRow>
          </div>
        </div>
      );
    };
  },
});
