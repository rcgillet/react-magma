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
  title: ['radio'],
  paths: [
    {
      d:
        'M3.23999996,6.14999998 C2.50999996,6.42999998 1.99999996,7.16999998 1.99999996,7.99999998 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L20,22 C21.11,22 22,21.1 22,20 L22,7.99999998 C22,6.89999998 21.1,5.99999997 20,5.99999997 L8.29999998,5.99999997 L15.73,2.99999996 C16.19,2.80999996 16.41,2.28999996 16.22,1.82999996 C16.03,1.36999996 15.51,1.14999995 15.05,1.33999996 L3.23999996,6.14999998 Z M6.99999997,20 C5.33999997,20 3.99999997,18.66 3.99999997,17 C3.99999997,15.34 5.33999997,14 6.99999997,14 C8.65999999,14 9.99999997,15.34 9.99999997,17 C9.99999997,18.66 8.65999999,20 6.99999997,20 Z M20,12 L18,12 L18,11 C18,10.45 17.55,9.99999998 17,9.99999998 C16.45,9.99999998 16,10.45 16,11 L16,12 L3.99999997,12 L3.99999997,8.99999998 C3.99999997,8.44999999 4.44999997,7.99999998 4.99999997,7.99999998 L19,7.99999998 C19.55,7.99999998 20,8.44999999 20,8.99999998 L20,12 Z',
      id: 'AVRadioIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'radio',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVRadioIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVRadioIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVRadioIcon-path-1',
        },
      ],
    },
  ],
};

export const AVRadioIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
