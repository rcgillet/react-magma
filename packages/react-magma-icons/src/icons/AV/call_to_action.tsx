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
  title: ['call_to_action'],
  paths: [
    {
      d:
        'M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M20,19 L3.99999996,19 C3.44999996,19 2.99999996,18.55 2.99999996,18 L2.99999996,17 C2.99999996,16.45 3.44999996,16 3.99999996,16 L20,16 C20.55,16 21,16.45 21,17 L21,18 C21,18.55 20.55,19 20,19 Z',
      id: 'AVCallToActionIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'call_to_action',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVCallToActionIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVCallToActionIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVCallToActionIcon-path-1',
        },
      ],
    },
  ],
};

export const AVCallToActionIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
