import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const SearchForm = styled.header`
  background-image: linear-gradient(180deg, #b4f2a0 0, #a1ec9c 16.67%, #89e397 33.33%, #6cd890 50%, #49cd8a 66.67%, #10c488 83.33%, #00bd88 100%);
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;

  .search-list {
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  input {
    width: 100%;
  }

  button {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;

    &:hover {
      svg {
        fill: var(--second-color);
      }
    }
  }

  svg {
    fill: rgb(117, 117, 117);
    transition: fill 250ms;
  }
`;

export const ErrMessage = styled(ErrorMessage)`
position: absolute;
  bottom: -1.5em;
  font-size: 14px;
`;