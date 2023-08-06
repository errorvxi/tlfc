import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  .container {
    ${`height: calc(100% - 125px);`}
    position: absolute;
    width: 100%;
    overflow: auto;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    background: rgba(27, 161, 226, 0.1);
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #ededed;
  }
`
