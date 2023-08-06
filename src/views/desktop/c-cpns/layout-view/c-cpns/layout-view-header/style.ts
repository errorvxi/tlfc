import styled from 'styled-components'

export const LayoutViewHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .main-content {
    width: 100px;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`
