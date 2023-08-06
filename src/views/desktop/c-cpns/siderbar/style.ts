import styled from 'styled-components'

export const SiderbarWrapper = styled.div`
  background-color: #f0f0f0;
  display: flex;
  height: 100vh;

  .header {
    flex: 1 1 auto;
    background-color: #f0f0f0;
  }
  .drawer {
    background-color: #f0f0f0;
    width: 240px;
    flexshrink: 0;
    .outlet {
      height: 100px;
    }
    .list {
      width: 240px;
    }
  }
`
