import styled from 'styled-components'

export const HomeButtonWrapper = styled.div`
  .btns {
    display: flex;
    height: 32px;
    padding: 10px;

    .new-build {
      width: 60px;
      line-height: 32px;
      background: #0067b8;
      text-align: center;
      border-radius: 4px;
      margin-right: 16px;
      color: white;

      cursor: pointer;
      &:hover {
        box-shadow: 0 0px 2px rgba(0, 0, 0, 0.2);
      }
    }

    .introduce {
      width: 60px;
      line-height: 32px;
      text-align: center;
      margin-left: 16px;
      border-radius: 4px;
      color: 5f5f5f;
      background-color: #f5f5f5;

      cursor: pointer;
      &:hover {
        box-shadow: 0 0px 2px rgba(0, 0, 0, 0.2);
      }
    }
  }
`
