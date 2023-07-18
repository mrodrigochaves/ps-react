import { CSSProperties } from "react";

interface TableStyles {
  solidBorder: CSSProperties;
}

export const tableStyles: TableStyles = {
  solidBorder: {
    border: '1px solid',
    textAlign: 'left',
    color: '#000',
  },
};
