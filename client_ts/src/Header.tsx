/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import {
  fontFamily,
  fontSizeMedium,
  white2,
  white1,
  gray5,
  backgroundColour1,
  fontSizeSmall,
} from './Styles';
import { UserIcon } from './Icons';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: ${backgroundColour1};
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <Link
        to="/recipes"
        css={css`
          @media screen and (max-width: 405px) {
            .recipe-size {
              font-size: ${fontSizeSmall};
            }
          }
          @media screen and (min-width: 406px) {
            .recipe-size {
              font-size: ${fontSizeMedium};
            }
          }

          font-weight: bold;
          color: ${white1};
          text-decoration: none;
        `}
      >
        <div className="recipe-size">
        Recipes
        </div>
      </Link>{' '}
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchInputChange}
        css={css`
          box-sizing: border-box;
          font-family: ${fontFamily};
          font-size: ${fontSizeMedium};
          padding: 8px 10px;
          border: 1px solid ${gray5};
          border-radius: 3px;
          color: ${white2};
          background-color: white;
          width: 200px;
          height: 30px;
          :focus {
            outline-color: ${gray5};
          }
        `}
      />
      <Link
        to="/recipes/signin"
        css={css`
          @media screen and (max-width: 405px) {
            .hide-mobile {
              display: none !important;
            }
          }
          font-family: ${fontFamily};
          font-size: ${fontSizeSmall};
          padding: 5px 10px;
          background-color: transparent;
          color: ${white2};
          text-decoration: none;
          cursor: pointer;
          span {
            margin-left: 10px;
          }
          :focus {
            outline-color: ${gray5};
          }
        `}
      >
        <UserIcon />
        <div className="hide-mobile">
          <span>Sign In</span>
        </div>
      </Link>
    </div>
  );
};
