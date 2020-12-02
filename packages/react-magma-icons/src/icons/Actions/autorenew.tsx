import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['autorenew'],
  paths: [
    {
      d:
        'M12,5.99999998 L12,7.78999998 C12,8.23999998 12.54,8.45999999 12.85,8.13999998 L15.64,5.34999997 C15.84,5.14999997 15.84,4.83999997 15.64,4.63999997 L12.85,1.84999996 C12.54,1.53999996 12,1.75999996 12,2.20999996 L12,3.99999997 C7.57999998,3.99999997 3.99999997,7.57999998 3.99999997,12 C3.99999997,13.04 4.19999997,14.04 4.56999997,14.95 C4.83999997,15.62 5.69999997,15.8 6.20999998,15.29 C6.47999998,15.02 6.58999998,14.61 6.43999998,14.25 C6.14999998,13.56 5.99999997,12.79 5.99999997,12 C5.99999997,8.68999999 8.68999999,5.99999998 12,5.99999998 Z M17.79,8.70999999 C17.52,8.97999999 17.41,9.39999999 17.56,9.74999999 C17.84,10.45 18,11.21 18,12 C18,15.31 15.31,18 12,18 L12,16.21 C12,15.76 11.46,15.54 11.15,15.86 L8.35999998,18.65 C8.15999998,18.85 8.15999998,19.16 8.35999998,19.36 L11.15,22.15 C11.46,22.46 12,22.24 12,21.8 L12,20 C16.42,20 20,16.42 20,12 C20,10.96 19.8,9.95999999 19.43,9.04999999 C19.16,8.37999998 18.3,8.19999998 17.79,8.70999999 Z',
      id: 'ActionsAutorenewIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'autorenew',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAutorenewIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAutorenewIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAutorenewIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAutorenewIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
