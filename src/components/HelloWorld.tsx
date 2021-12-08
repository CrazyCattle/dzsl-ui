import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "hello-world",

  props: {
    msg: {
      type: String,
      default: "",
    },
  },

  emits: ["testEmit"],

  setup(props, { emit, slots }) {
    let count: Ref<number> = ref(0);
    const handleClick = (event: MouseEvent): void => {
      count.value++;
      emit("testEmit");
    };

    const clickFromParent = () => {
      console.log("clickFromParent");
    };

    return {
      handleClick,
      clickFromParent,
      count,
    };
  },

  render() {
    return (
      <div class="hello-world">
        <h1>{this.$props.msg}</h1>
        <button onClick={this.handleClick} type="button">
          count is: {this.count}
        </button>
      </div>
    );
  },
});
