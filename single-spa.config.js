import { registerApplication, start } from "single-spa";

registerApplication(
  // Name of our single-spa application
  "home",
  // Our loading function
  async () => await import("./src/home/home.app.js").default,
  // Our activity function
  () =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/home"),
);

registerApplication(
  // Name of our single-spa application
  "contact",
  // Our loading function
  async () => await import("./src/contact/contact.app.js").default,
  // Our activity function
  () =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/contact"),
);


start();