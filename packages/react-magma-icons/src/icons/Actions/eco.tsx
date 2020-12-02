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
  title: ['eco'],
  paths: [
    {
      d:
        'M6.04999998,8.04999998 C3.31999996,10.78 3.31999996,15.2 6.02999998,17.93 C7.49999307,14.53 10.12,11.69 13.39,9.99999999 C10.62,12.34 8.67999999,15.61 7.99999307,19.32 C10.6,20.55 13.8,20.1 15.95,17.95 C18.94,14.96 19.78,6.80999998 19.96,4.56999997 C19.98,4.25999997 19.73,4.00999997 19.43,4.03999997 C17.19,4.21999997 9.03999999,5.05999997 6.04999998,8.04999998 Z',
      id: 'ActionsEcoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'eco',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsEcoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsEcoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsEcoIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsEcoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
