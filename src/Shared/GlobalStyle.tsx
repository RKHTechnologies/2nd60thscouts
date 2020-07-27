import { createGlobalStyle } from "styled-components";
import { colours } from "./SharedStyles";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300;1,400;1,700;1,800;1,900&display=swap');
    
    * {
        font-family: 'Nunito Sans', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colours.lightGrey};
        border-radius: 20px;
    }
`;

export default GlobalStyle;