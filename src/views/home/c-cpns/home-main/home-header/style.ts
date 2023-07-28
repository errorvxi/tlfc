import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  align-items: center;
  height: 80px;
  .left {
    padding: 5px 6px;
    .search-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      height: 48px;
      box-sizing: border-box;
      padding: 5 6px;
      padding-right: 10px;
      border: 1px solid #ddd;
      border-radius: 24px;
      cursor: pointer;
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }

      .text {
        padding: 0 16px;
        color: #222;
        font-weight: 600;
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: #fff;
        background-color: purple;
      }
    }
  }

  .right {
    color: purple;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: 600;

    .btns {
      display: flex;
      align-items: center;

      .btn {
        height: 18px;
        line-height: 18px;
        padding: 12px 15px;
        cursor: pointer;
        border-radius: 22px;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }

    .profile {
      position: relative;
      display: flex;
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

      .panel {
        position: absolute;
        right: 0;
        top: 60px;
        width: 180px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

        .top,
        .middle,
        .bottom {
          padding: 1px 0;

          .item {
            height: 40px;
            line-height: 40px;
            padding: 0 16px;

            &:hover {
              background-color: #f5f5f5;
            }
          }
        }

        .top {
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }
`
