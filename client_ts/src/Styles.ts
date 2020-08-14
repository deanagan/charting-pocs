import styled from '@emotion/styled';

export const white1 = '#FFFFFF';
export const white2 = '#B9B6B8';
export const white3 = '#b9b6b8';
export const gray4 = '#b9b9b9';
export const gray5 = '#e3e2e2';
export const gray6 = '#f7f8fa';
export const primary1 = '#B1D076';
export const primary2 = '#99C24D';
export const accent1 = '#dbb365';
export const accent2 = '#048ba8';
export const fontFamily = "'Segoe UI', 'Helvetica Neue',sans-serif";
export const fontSizeTiny = '12px';
export const fontSizeSmall = '16px';
export const fontSizeMedium = '24px';

export const backgroundColour1 = '#1C2835';
export const backgroundColour2 = '#2F2D2E';

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: auto;
  font: ${fontSizeSmall};
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;

export const AddRecipeButton = styled.button`
    background-color: ${primary2};
    border-color: ${primary2};
    border-style: solid;
    border-radius: 5px;
    font-family: ${fontFamily};
    font-size: ${fontSizeSmall};
    padding: 5px 10px;
    color: ${white1};
    cursor: pointer;
        :hover
        {
            background-color: ${primary1};
        }
        :focus
        {
            outline-color: ${primary2};
        }
        :disabled
        {
            opacity: 0.5;
            cursor: not-allowed;
        }`;