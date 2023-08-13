import styled from 'styled-components'

const LayoutViewContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    flex-direction: row;
    cursor: pointer;

    .title-cell {
    }
  }
  .content {
  }
  .root {
    width: 100%;
    cursor: pointer;
  }
  .name {
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
  .container {
    maxheight: 200px;

    .header {
      width: 100%;
      justify-content: center;
    }
    .header-cell {
      padding: 1px 6px;
      font-size: 14px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
    .filename {
      &:hover {
        color: #107c41;
      }
    }
    .owner {
      &:hover {
        text-decoration: underline;
      }
    }
    .cell {
      cursor: pointer;
      padding: 6px;
      height: 52px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`
export default LayoutViewContentWrapper
