module.exports = {
  title: "稻子熟了",
  description: "美好的季节到来，稻子熟了~ Oh, yeah !",
  base: "/", // 部署时的路径,默认 /; 可以使用二级地址 /base/
  // lang: 'en-US', //语言
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    ["meta", { name: "daozishule", content: "daozishule ui" }],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: "首页", link: "/" },
      { text: "关于", link: "/button/" },
    ],
    sidebar: [
      {
        text: "按钮",
        children: [{ text: "按钮", link: "/button/index" }],
      },
      {
        text: "组件",
        children: [
          { text: "Layout 布局", link: "/index" },
          { text: "Container 布局容器", link: "/index/large" },
        ],
      },
      {
        text: "表单",
        children: [
          { text: "Radio 单选框", link: "/index" },
          { text: "Checkbox 多选框", link: "/index/large" },
        ],
      },
    ],
  },

  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin, {
        cssPreprocessor: "less",
      });
    },
  },
};
