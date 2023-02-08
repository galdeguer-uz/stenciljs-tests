import { TlkButton } from '../../../components/button';

const buttonStyles: object = {
  [TlkButton.COMPONENT_ID]: `
    :host {
      --color-action500: #4363f9;
      --color-action600: #304ad6;
      --color-action700: #2136b3;
      --color-white: #fff;
    }

    button {
      border: 1px solid transparent;
      box-sizing: border-box;
      border-radius: 4px;

      font-size: 14px;
      line-height: 24px;
      height: 32px;
      padding: 4px 12px;

      background-color: var(--color-action500);
      border-color: var(--color-action500);
      color: var(--color-white);
    }

    button:disabled {
      color: var(--color-white);
      background-color: var(--color-action500);
      border-color: var(--color-action500);
      opacity: 0.24;
    }

    button:not(:disabled):hover {
      color: var(--color-white);
      background-color: var(--color-action600);
      border-color: var(--color-action600);
    }

    button:not(:disabled):active {
      color: var(--color-white);
      background-color: var(--color-action700);
      border-color: var(--color-action700);
    }
  `,
};

export default buttonStyles;
