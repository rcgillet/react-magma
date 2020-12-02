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
  title: ['help'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M13,19 L11,19 L11,17 L13,17 L13,19 Z M15.07,11.25 L14.17,12.17 C13.67,12.68 13.31,13.14 13.13,13.86 C13.05,14.18 13,14.54 13,15 L11,15 L11,14.5 C11,14.04 11.08,13.6 11.22,13.19 C11.42,12.61 11.75,12.09 12.17,11.67 L13.41,10.41 C13.87,9.96999999 14.09,9.30999999 13.96,8.60999999 C13.83,7.88999998 13.27,7.27999998 12.57,7.07999998 C11.46,6.76999998 10.43,7.39999998 10.1,8.34999998 C9.97999999,8.71999999 9.66999999,8.99999999 9.27999999,8.99999999 L8.97999999,8.99999999 C8.39999998,8.99999999 7.99999998,8.43999999 8.15999998,7.87999998 C8.58999999,6.40999998 9.83999999,5.28999997 11.39,5.04999997 C12.91,4.80999997 14.36,5.59999997 15.26,6.84999998 C16.44,8.47999999 16.09,10.23 15.07,11.25 L15.07,11.25 Z',
      id: 'ActionsHelpIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'help',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsHelpIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsHelpIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsHelpIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsHelpIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
