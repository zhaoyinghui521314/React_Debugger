import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       react: path.posix.resolve("src/react/packages/react"),
//       "react-dom": path.posix.resolve("src/react/packages/react-dom"),
//       "react-dom-bindings": path.posix.resolve("scr/react/packages/react-dom-bindings"),
//       "react-reconciler": path.posix.resolve("scr/react/packacges/react-reconciler"),
//       scheduler: path.posix.resolve("scr/react/packacges/scheduler"),
//       shared: path.posix.resolve("scr/react/packages/shared"),
//     }
//   }
// })
console.log(
  "path:",
  path.posix.resolve("scr/react/packacges/react-reconciler")
);
export default defineConfig({
  define: {
    __DEV__: true, // 设置为false跳过 if(__dev__)的开发逻辑
    __EXPERIMENTAL__: true,
    __PROFILE__: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      // react: "/Applications/code/react-debugger/src/react/packages/react",
      // "react-dom": "/Applications/code/react-debugger/src/react/packages/react-dom",
      // "react-dom-bindings": "/Applications/code/react-debugger/src/react/packages/react-dom-bindings",
      // "react-reconciler": "/Applications/code/react-debugger/src/react/packages/react-reconciler",
      // scheduler: "/Applications/code/react-debugger/src/react/packages/scheduler",
      // shared: "/Applications/code/react-debugger/src/react/packages/shared",
      react: path.posix.resolve("src/react/packages/react"),
      "react-dom": path.posix.resolve("src/react/packages/react-dom"),
      "react-dom-bindings": path.posix.resolve(
        "src/react/packages/react-dom-bindings"
      ),
      "react-reconciler": path.posix.resolve(
        "src/react/packages/react-reconciler"
      ),
      scheduler: path.posix.resolve("src/react/packages/scheduler"),
      shared: path.posix.resolve("src/react/packages/shared"),
    },
  },
});
