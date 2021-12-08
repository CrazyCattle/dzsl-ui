import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld";
// import logo from "@/assets/logo.png";
import DzButton from '@/components/button/button'

export default defineComponent({
  name: "app1",
  setup(props, { emit, slots }) {
    const testEmit = () => {
      console.log("test emit");
    };

    const hello = ref()
    const clickChild = () => {
      if (!hello.value) return;
      hello.value.clickFromParent()
    };

    return () => {
      return (
        <div>
          {/* <img alt="Vue logo" src={logo} /> */}
          <button onClick={clickChild}>点击父组件 出发子组件</button>
          <HelloWorld
            ref={hello}
            onTestEmit={testEmit}
            msg={"Hello Vue 3 + TypeScript + Vite"}
          />
          <DzButton disabled={true} round={true}>
            <div>slot 按钮</div>
          </DzButton>
        </div>
      );
    };
  },
});
