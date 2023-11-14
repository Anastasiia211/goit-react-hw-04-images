import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
--salmon: #ff7b73;
  --btnText: white;
  --second-color: green;
  --background-notification: lightgreen;
  --background-section: mintcream;
  --cubic-transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --font-family: Tahoma, Verdana, sans-serif;
}
/* Reset */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 10px;
  font-weight: 600;
}

#root {
        margin: 20px;
    }

p {
  margin-bottom: 10px;
  margin-top: 0;
}

link {
  text-decoration: none;
}

ul {
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
}


 .btn-outline {
    margin-top: 15px;
    background-image: linear-gradient(180deg, #b4f2a0 0, #a1ec9c 16.67%, #89e397 33.33%, #6cd890 50%, #49cd8a 66.67%, #10c488 83.33%, #00bd88 100%);
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s linear;
    letter-spacing: 0.05em;
}



.btn-submit:hover {
    background:linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
}

button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
        font-size: 16px;
    }

body {
  font-family: var(--font-family);
  font-size: 18px;
  line-height: 1.3;
  font-weight: 400;
  color: var(--black);
  background-color: var(--background-section);
  margin: 0;
}
 input {
        padding: 5px 15px;
        border: 1px solid var(--black);
        color: var(--black);
        font-size: 18px;
        line-height: 1;
        outline: none;
        height: calc(1em + 1.6em + 0.5em);
        width: 100%;
        background-color:  var( --background-section);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        background-size: 200% 100%;
        transition: background-position 0.8s ease-out;
    }


  .wrapper {
        max-width: 1700px;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: auto;
        margin-right: auto;
    }


.btn {
  padding: 8px 15px;
  border-radius: 5px;
}
.numberCard{
max-width: 50%;
    margin-left: auto;
    margin-right: auto;
}


`;