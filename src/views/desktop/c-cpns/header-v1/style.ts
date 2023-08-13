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
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: #fff;
        background-color: #3f51b5;
      }
    }
  }

  .right {
    color: #3f51b5;
    display: flex;
    justify-content: flex-end;
    align-items: center;

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

    .panel {
      color: ##3f51b5;
      position: absolute;
      z-index: 99;
      right: 0;
      top: 60px;
      width: 320px;
      height: 240px;
      max-width: 100vw;
      background-color: #fff;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      line-height: normal;

      .top {
        display: grid;
        grid-template-columns: auto 1fr auto;
        padding: 1px 0;
        width: 320px;
        box-sizing: border-box;
        line-height: normal;
        height: 180px;
        text-align: left;
        border-bottom: 1px solid #ddd;

        .title {
          grid-column: 1/2;
          padding-left: 14px;
          display: block;
          box-sizing: border-box;
          align-self: center;
          padding-right: 14px;
          font-size: 13px;
        }

        .account-info {
          max-height: 132px;
          grid-column: 1/4;
          display: flex;
          width: 100%;
          align-items: center;

          .account-details {
            flex-grow: 1;
            min-width: 0;
            width: 0;
            padding-right: 12px;
            padding: 0;
            .username {
              font-size: 18px;
              font-weight: 700;
            }
            .item {
              margin-top: 3px;
              font-size: 13px;
              padding: 1px;
            }
          }

          .icon {
            display: block;
            border-radius: 50%;
            overflow: hidden;
            width: 88px;
            height: 88px;
            margin-left: 16px;
            margin-right: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
          }
        }
      }
      .bottom {
        display: flex;
        flex-direction: row;
        width: 320px;
        height: 60px;
        align-items: center;
        cursor: pointer;
        transition: box-shadow 0.2s ease;
        &:hover {
          background-color: #f5f5f5;
        }
        .panel-icon {
          float: left;
          margin-left: 16px;
          margin-right: 12px;
          margin-top: 10px;
          margin-bottom: 10px;
          width: 40px;
          height: 40px;
        }
        .other {
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 48px;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          min-width: 0;
          width: 0;
        }
      }
    }
  }
`
