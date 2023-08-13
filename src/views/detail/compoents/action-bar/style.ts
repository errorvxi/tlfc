import styled from 'styled-components'

export const ActionBarWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #f3f3f3;
  .nav,
  .edit-bar {
    display: flex;
    justify-content: start;
    height: 44px;
  }
  .nav {
  }
  .edit-bar {
    border-bottom: 2px solid #f3f3f3;
  }
  .home {
    flex: 0 1 3%;
    border-right: 2px solid #f3f3f3;

    text-align: center;
  }
  .info {
    flex: 0 1 97%;
    padding-left: 20px;
  }
  .bolder {
    font-size: 20px;
    font-weight: 700;
  }
  .btn {
    margin: 0px 8px;
  }
  .insert {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .arrow-back {
    margin-left: 10px;
  }
  .divider {
    margin: 8px;
  }
`
