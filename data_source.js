// 数据源配置
// 默认读取同目录下 macro_data.json。
// 如果你想用 Google Sheets / 腾讯文档等在线表格维护数据：
// 1）把 mode 改成 "csv"
// 2）把 csvUrl 改成表格发布后的 CSV 链接
// 3）以后只改在线表格，网页刷新后自动读取最新内容
window.MACRO_DATA_SOURCE = {
  mode: "json",
  jsonUrl: "./macro_data.json",
  csvUrl: "https://docs.google.com/spreadsheets/d/1VvMyNnDhgSW4_KV9319yqfyJJT6ZgnVIuZf4Yll7RT4/export?format=csv&gid=1396427078"
};
