import styled from 'styled-components'

export const FormularBarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 25px;
  line-height: 25px;
  .bar-label {
    width: 50px;
    height: 25px;
    padding: 0px 4px;
    color: #777777;
    box-sizing: border-box;
    text-align: center;

    display: inline-block;
  }
  .bar-input {
    flex: 1;
    border-left: 1px solid #ccc;
    display: block;
    overflow: hidden auto;
    box-sizing: content-box;
    outline: none;
    padding: 4px 8px;
    text-decoration-skip-ink: none;
    line-height: 17px;
    font-size: 14px;
    white-space: pre-wrap;
    line-break: anywhere;
    word-break: break-word;
    overflow-wrap: break-word;
    left: 50px;
    top: 0px;
    background: rgb(255, 255, 255);
    font-family:
      Helvetica Neue,
      Helvetica,
      PingFang SC,
      Microsoft YaHei,
      Source Han Sans SC,
      Noto Sans CJK SC,
      WenQuanYi Micro Hei,
      sans-serif;
  }
`
