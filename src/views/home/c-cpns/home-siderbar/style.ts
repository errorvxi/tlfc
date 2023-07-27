import styled from 'styled-components'

export const SiderbarWrapper = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;

  .header {
    flex: 1 1 auto;
  }

  .nav-menu {
    min-width: 210px;
    flex: 1 1 100%;

    .item {
      height: 40px;
      border-radius: 10px;
      line-height: 40px;
      padding: 0 16px;
      margin: 4px;
      cursor: pointer;
      &:hover {
        background-color: rgb(2, 2, 2, 0.1);
      }
    }
    .top {
      border-top: 1px solid #ddd;
    }
  }

  .logo {
    height: 96px;
  }
`
