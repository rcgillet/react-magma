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
  title: ['invert_colors_off'],
  paths: [
    {
      d:
        'M12,5.09999997 L12,9.14999999 L19.4,16.55 C20.55,13.67 19.99,10.27 17.65,7.93999998 L12.71,2.98999996 C12.32,2.59999996 11.69,2.59999996 11.3,2.98999996 L8.55999999,5.70999997 L9.96999999,7.11999998 L12,5.09999997 Z M3.68999997,5.07999997 C3.29999996,5.46999997 3.29999996,6.09999998 3.68999997,6.48999998 L5.76999997,8.56999999 C3.22999996,11.71 3.41999996,16.32 6.33999998,19.25 C7.89999998,20.8 9.94999999,21.58 12,21.58 C13.78,21.58 15.56,20.99 17.02,19.81 L19.02,21.81 C19.41,22.2 20.04,22.2 20.43,21.81 C20.82,21.42 20.82,20.79 20.43,20.4 L5.10999997,5.07999997 C4.71999997,4.68999997 4.07999997,4.68999997 3.68999997,5.07999997 Z M12,19.59 C10.4,19.59 8.88999999,18.97 7.75999998,17.83 C6.61999998,16.69 5.99999997,15.19 5.99999997,13.59 C5.99999997,12.27 6.42999998,11.03 7.20999998,9.99999999 L12,14.79 L12,19.59 Z',
      id: 'CommunicationInvertColorsOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'invert_colors_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationInvertColorsOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationInvertColorsOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationInvertColorsOffIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationInvertColorsOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
