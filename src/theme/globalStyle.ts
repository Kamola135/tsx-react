import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-width: 530px;
  margin: 0;
  font-family: "Inter";
  background-color: ${(props)=> props.theme.bgc};
  color: ${props=>props.theme.colors.textColor};
}
.container {
  padding: 0 calc(12vw - 35px); //? 1920 - 195 | 375 - 10
  margin-top: calc(4.4vw + 62px); //? 146 - 1920 | 85 - 530
}

button,
input {
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${props=>props.theme.colors.textColor};
  }
}

._no-select {
  -webkit-touch-callout: none; //? iOS Safari
  -webkit-user-select: none; //? Safari
  -khtml-user-select: none; //? Konqueror HTML
  -moz-user-select: none; //? Old versions of Firefox
  -ms-user-select: none; //? Internet Explorer/Edge
  user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
}

/* button {
  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  background-color: ${props=>props.theme.colors.primeColor};
  color: white;
  transition: 200ms;

  &:disabled {
    background-color: ${props=>props.theme.disabledBgc};
  }

  &.primary {
    background-color: ${props=>props.theme.colors.primeColor};
    color: white;
  }

  &.secondary {
    background-color: ${props=>props.theme.colors.lightGray};
    color: ${props=>props.theme.colors.placeholderColor};
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
} */

input {
  padding: 12px 15px;
  background-color: ${(props)=> props.theme.bgc};
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: ${props=>props.theme.colors.primeColor};
  }
}

@media (max-width: 730px) {
  input, button {
    padding: 10px 12px;
  }
}`