import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 24 28',
  paths: [
    {
      d:
        'M22.94,5.94a3.63,3.63,0,0,1,.75,1.18A3.77,3.77,0,0,1,24,8.5v18A1.5,1.5,0,0,1,22.5,28H1.5a1.44,1.44,0,0,1-1.06-.44A1.44,1.44,0,0,1,0,26.5V1.5A1.44,1.44,0,0,1,.44.44,1.44,1.44,0,0,1,1.5,0h14a3.58,3.58,0,0,1,1.38.31,3.63,3.63,0,0,1,1.18.75ZM16,2.12V8h5.88a1.69,1.69,0,0,0-.35-.64L16.64,2.47A1.69,1.69,0,0,0,16,2.12ZM22,26V10H15.5A1.5,1.5,0,0,1,14,8.5V2H2V26ZM3.64,12v1.67h1.1L7.3,24H9.78l2-7.58a3.48,3.48,0,0,0,.16-.72,3.32,3.32,0,0,0,0-.37H12l.05.37a2.32,2.32,0,0,1,.05.32,3.13,3.13,0,0,0,.09.4l2,7.58H16.7l2.57-10.33h1.09V12H15.67v1.67h1.41l-1.55,6.85a4.25,4.25,0,0,0-.11.71l0,.33h-.06l-.05-.33-.06-.32c0-.17-.06-.3-.08-.39L12.89,12H11.11L8.86,20.52a3.86,3.86,0,0,0-.07.38l-.06.33-.06.33H8.61l0-.33a4.25,4.25,0,0,0-.11-.71L6.92,13.67H8.33V12Z',
      transform: 'translate(0 0)',
    },
  ],
};

export const FileWordOIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
