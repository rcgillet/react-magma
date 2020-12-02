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
  title: ['system_update_alt'],
  paths: [
    {
      d:
        'M8.00999998,2.99999996 C8.54999999,2.99999996 8.99999995,3.44999996 8.99999995,3.99999996 C8.99999995,4.53999997 8.54999999,4.98999997 8.00999998,4.98999997 L8.00999998,4.98999997 L3.99999995,4.98999997 C3.44999996,4.98999997 2.99999995,5.43999997 2.99999995,5.98999997 L2.99999995,5.98999997 L2.99999995,18.01 C2.99999995,18.56 3.44999996,19.01 3.99999995,19.01 L3.99999995,19.01 L20,19.01 C20.55,19.01 21,18.56 21,18.01 L21,18.01 L21,5.97999997 C21,5.42999997 20.55,4.97999997 20,4.97999997 L20,4.97999997 L15.99,4.97999997 C15.45,4.97999997 15,4.53999997 15,3.98999997 C15,3.44999996 15.45,2.99999996 15.99,2.99999996 L15.99,2.99999996 L21,2.99999996 C22.1,2.99999996 23,3.89999997 23,4.99999996 L23,4.99999996 L23,19 C23,20.1 22.1,21 21,21 L21,21 L2.99999995,21 C1.89999996,21 0.999999954,20.1 0.999999954,19 L0.999999954,19 L0.999999954,4.99999996 C0.999999954,3.89999997 1.89999996,2.99999996 2.99999995,2.99999996 L2.99999995,2.99999996 Z M12,2.99999996 C12.55,2.99999996 13,3.44999996 13,3.99999996 L13,3.99999996 L13,12.01 L14.79,12.01 C15.23,12.01 15.45,12.55 15.14,12.86 L15.14,12.86 L12.35,15.65 C12.16,15.84 11.84,15.84 11.65,15.64 L11.65,15.64 L8.85999999,12.85 C8.53999999,12.54 8.75999999,12 9.20999999,12 L9.20999999,12 L11,12 L11,3.99999996 C11,3.44999996 11.45,2.99999996 12,2.99999996 Z',
      id: 'ActionsSystemUpdateAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'system_update_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSystemUpdateAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSystemUpdateAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSystemUpdateAltIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSystemUpdateAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
