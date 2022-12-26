declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module "pdp/PDPContent";

declare module "home/MainLayout";
declare module "home/mount";
