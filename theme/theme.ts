import { extendTheme } from "native-base";

const newColorTheme = {
    brand: {
        900: "#8287af",
        800: "#7c83db",
        700: "#b3bef6",
    },
    primary:{
        500:'#FB8500'
    }
};
export const theme = extendTheme({ colors: newColorTheme });
