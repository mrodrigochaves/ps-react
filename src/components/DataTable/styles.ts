
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

export const inputStyles: CSSProperties = {
  borderColor: '#000000',
  borderRadius: '0',
};

export const containerStyles: CSSProperties = {

  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
};

export const labelStyles: CSSProperties = {  
  marginBottom: 'auto',
};
