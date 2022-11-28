import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Inter", sans-serif;
}

.default-btn {
  padding: 0 20px 0 20px;
  min-height: 35px;
  border-radius: var(--radius-1);
}
.default-btn.green {
  background-color: var(--color-primary);
  color: var(--color-gray-0);
}

.default-btn.gray {
  background-color: var(--color-gray-100);
  color: var(--color-gray-20);
}
main {
  display: flex;
  flex-direction: column;
}
.container {
  margin: 0 15px;
}
@media (min-width: 800px) {
  .container {
    margin: 0 115px;
  }
  main {
    margin-top: 50px;
    flex-direction: row;
  }
}
button {
  cursor: pointer;
  border: none;
  background: transparent;
}
a {
  text-decoration: none;
  color: unset;
}

:root {
  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secondary: #eb5757;
  --color-gray-100: #333333;
  --color-gray-50: #828282;
  --color-gray-20: #e0e0e0;
  --color-gray-0: #f5f5f5;
  --feedback-negative: #e60000;
  --feedback-warning: #ffcd07;
  --feedback-success: #168821;
  --feedback-information: #155bcb;
  --radius-1: 8px;
}
`;
