import { env } from "process";

const routes = {
    zolkin: {
        name: "Цолькин",
        path: "/zolkin",
        href: "#/zolkin"
    }
}

if (env.ktoty) {
    routes.zolkin.href = "#/tzolkin";
    routes.zolkin.path = "/tzolkin";
}

export default routes;