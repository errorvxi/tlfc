import styled from 'styled-components'

export const TitleBarWrapper = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
  border-bottom: 1px solid #eee;

  .left {
    display: flex;
    align-items: center;
    .home {
      margin: 0px 8px;
    }
    .divider {
      padding: 0px 4px;
    }
    .info {
      width: 125px;
      font-size: 18px;
      padding: 1px 0.8px;
      border: 1px solid transparent;
      font-weight: 500;
      font-family:
        -apple-system,
        Helvetica Neue,
        Helvetica,
        PingFang SC,
        Microsoft YaHei,
        Source Han Sans SC,
        Noto Sans CJK SC,
        WenQuanYi Micro Hei,
        sans-serif;
    }
  }
  .right {
    color: purple;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .profile {
      position: relative;
      display: flex;
      z-index: 100;
      justify-content: space-evenly;
      align-items: center;
      width: 77px;
      height: 42px;
      margin-right: 24px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 25px;
      background-color: #fff;
      cursor: pointer;

      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    }
  }
`
