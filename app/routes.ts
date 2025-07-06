import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('product/:sku', './components/productCard/itemCard.tsx')
] satisfies RouteConfig;
