import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:-0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
}
:root{
    --dark:#56565c;
    --primary:#717174;
    --primaryAlt:#8b8b8b;
    --secondary:#b9b9b9;
    --light:#e7e7e7;
    --lighter:#f1f1f1;
    --white:#fbfbfb;
}
button{
    cursor: pointer;
    
}
`;

export default GlobalStyle;
