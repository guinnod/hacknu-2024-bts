import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["var(--font-roboto)"],
            },
        },
    },
    plugins: [],
};
export default config;

// /api/cashback/get_user_cashbacks/?ordering=percent - ASC order
// /api/cashback/get_user_cashbacks/?ordering=-percent - DECS order
// /api/cashback/get_user_cashbacks/?search=<content> - for search by bank name and card_name
// /api/cashback/get_user_cashbacks/?has_qr_payment=Flase/True&has_card_payment=False/True - by deafult if you want take both Flase/True just not send this query-params
// /api/cashback/get_user_cashbacks/?min_percent=<float>&max_percent=<float> - for take percent by range
