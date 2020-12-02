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
  title: ['work_off'],
  paths: [
    {
      d:
        'M4.10999997,2.53999996 C3.71999997,2.14999996 3.08999996,2.14999996 2.69999996,2.53999996 C2.30999996,2.92999996 2.30999996,3.55999996 2.69999996,3.94999997 L4.73999997,5.99999998 L3.99999996,5.99999998 C2.88999996,5.99999998 2.00999996,6.88999998 2.00999996,7.99999998 L1.99999996,19 C1.99999996,20.11 2.88999996,21 3.99999996,21 L19.74,21 L21.03,22.29 C21.42,22.68 22.05,22.68 22.44,22.29 C22.83,21.9 22.83,21.27 22.44,20.88 L4.10999997,2.53999996 Z M9.99999999,3.99999996 L14,3.99999996 L14,5.99999996 L10.4,5.99999996 L22,17.6 L22,7.99999996 C22,6.88999998 21.11,5.99999996 20,5.99999996 L16,5.99999996 L16,3.99999996 C16,2.88999996 15.11,1.99999996 14,1.99999996 L9.99999999,1.99999996 C9.00999999,1.99999996 8.19999998,2.69999996 8.03999998,3.63999997 L9.99999999,5.59999997 L9.99999999,3.99999996 Z',
      id: 'ActionsWorkOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'work_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsWorkOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsWorkOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsWorkOffIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsWorkOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
