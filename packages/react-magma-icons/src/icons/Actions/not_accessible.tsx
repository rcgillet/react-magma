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
  title: ['not_accessible'],
  paths: [
    {
      d:
        'M12,1.99999996 C13.1,1.99999996 14,2.89999996 14,3.99999996 C14,5.09999997 13.1,5.99999996 12,5.99999996 C10.9,5.99999996 9.99999999,5.09999997 9.99999999,3.99999996 C9.99999999,2.89999996 10.9,1.99999996 12,1.99999996 Z M9.99999997,20 C8.33999998,20 6.99999997,18.66 6.99999997,17 C6.99999997,15.69 7.83999998,14.59 8.99999997,14.17 L8.99999997,12.1 C6.71999998,12.56 4.99999997,14.58 4.99999997,17 C4.99999997,19.76 7.23999998,22 9.99999997,22 C12.42,22 14.44,20.28 14.9,18 L12.83,18 C12.42,19.16 11.31,20 9.99999997,20 Z M20.49,20.49 L3.50999996,3.50999996 C3.11999996,3.11999996 2.48999996,3.11999996 2.09999996,3.50999996 C1.70999996,3.89999997 1.70999996,4.52999997 2.09999996,4.91999997 L9.99999999,12.82 L9.99999999,15 C9.99999999,16.1 10.9,17 12,17 L14.17,17 L19.07,21.9 C19.46,22.29 20.09,22.29 20.48,21.9 C20.88,21.51 20.88,20.88 20.49,20.49 Z M18.16,10.93 C16.91,10.72 15.73,10.05 14.93,9.16999999 L13.64,7.73999998 C13.4,7.49999998 13.2,7.37999998 13.01,7.27999998 C12.65,7.08999998 12.29,6.97999998 11.81,7.01999998 C11.32,7.05999998 10.9,7.28999998 10.58,7.62999998 L14,11.05 C15,11.88 16.4,12.59 17.8,12.87 C18.42,13 19,12.53 19,11.9 C19,11.42 18.64,11.01 18.16,10.93 Z',
      id: 'ActionsNotAccessibleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'not_accessible',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsNotAccessibleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsNotAccessibleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsNotAccessibleIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsNotAccessibleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
