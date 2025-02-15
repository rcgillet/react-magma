import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 28 28',
  paths: [
    {
      d:
        'M28,14a13.74,13.74,0,0,1-1.88,7A14,14,0,0,1,21,26.12a14,14,0,0,1-11,1.3,11.43,11.43,0,0,0,1.42-3c.11-.42.44-1.7,1-3.85a3,3,0,0,0,1.33,1.23,4.31,4.31,0,0,0,2.08.52,6.6,6.6,0,0,0,3.94-1.25,8.12,8.12,0,0,0,2.68-3.43,12.31,12.31,0,0,0,.95-4.93,7.47,7.47,0,0,0-1.09-3.9,8.26,8.26,0,0,0-3.14-3A9.48,9.48,0,0,0,14.53,4.7,11.71,11.71,0,0,0,11,5.23,9.31,9.31,0,0,0,8.14,6.64a9.72,9.72,0,0,0-2,2A8.43,8.43,0,0,0,4.93,11a8,8,0,0,0-.39,2.44,7.24,7.24,0,0,0,.73,3.34,4.1,4.1,0,0,0,2.13,2c.37.15.6,0,.7-.36,0-.09.07-.27.14-.57a4.69,4.69,0,0,1,.15-.54.87.87,0,0,0-.2-.79,4.14,4.14,0,0,1-.93-2.75,6.63,6.63,0,0,1,6.89-6.71,5.9,5.9,0,0,1,4.29,1.5A5.14,5.14,0,0,1,20,12.47a10.43,10.43,0,0,1-1.25,5.27,3.68,3.68,0,0,1-3.2,2.17,2.22,2.22,0,0,1-1.78-.8,2.06,2.06,0,0,1-.42-1.9c.09-.43.26-1,.48-1.71s.41-1.33.55-1.87a5.65,5.65,0,0,0,.21-1.38,2.34,2.34,0,0,0-.49-1.51,1.72,1.72,0,0,0-1.41-.6,2.32,2.32,0,0,0-1.91,1A4.16,4.16,0,0,0,10,13.76,4.94,4.94,0,0,0,10.43,16L8.62,23.61a12.27,12.27,0,0,0-.23,3.22,13.85,13.85,0,0,1-6.07-5.12A13.53,13.53,0,0,1,0,14,13.74,13.74,0,0,1,1.88,7,13.91,13.91,0,0,1,7,1.88,13.67,13.67,0,0,1,14,0a13.74,13.74,0,0,1,7,1.88A14,14,0,0,1,26.12,7,13.64,13.64,0,0,1,28,14Z',
      transform: 'translate(0 0)',
    },
  ],
};

export const PinterestIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
