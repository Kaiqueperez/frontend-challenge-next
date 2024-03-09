import styled from 'styled-components'

export const ToastDialog = styled.dialog`
  background-color: black;
  color: white;
  padding: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  border: none;
  position: absolute;
  bottom: 0;
  left: 25px;
  animation-name: toast;
  animation-duration: 4s;

  @keyframes toast {
    0% {
      bottom: 250px;
    }
    50% {
      bottom: 275px;
    }
    100% {
      bottom: 300px;
    }
  }
`
