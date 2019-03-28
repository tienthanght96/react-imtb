import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  padding: 10px 20px;
  background: #fff;
  -webkit-box-shadow: 0 2px 8px #f0f1f2;
  box-shadow: 0 2px 8px #f0f1f2;
  color: #fff;
  .header {
    &__left {
      display: flex;
      flex: 1;
      align-items: center;
      .logo-img {
        width: 50px;
        height: 50px;
        transform: translateY(-5px);
      }
      .logo-label {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin: 0 10px;
      }
    }
    &__right {
      font-size: 18px;
      .search-button {
        margin-right: 20px;
      }
    }
  }
`;