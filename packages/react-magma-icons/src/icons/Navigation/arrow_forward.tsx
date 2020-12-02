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
  title: ['arrow_forward'],
  paths: [
    {
      d:
        'M4.99999997,13 L16.17,13 L11.29,17.88 C10.9,18.27 10.9,18.91 11.29,19.3 C11.68,19.69 12.31,19.69 12.7,19.3 L19.29,12.71 C19.68,12.32 19.68,11.69 19.29,11.3 L12.71,4.69999997 C12.32,4.30999997 11.69,4.30999997 11.3,4.69999997 C10.91,5.08999997 10.91,5.71999997 11.3,6.10999998 L16.17,11 L4.99999997,11 C4.44999997,11 3.99999997,11.45 3.99999997,12 C3.99999997,12.55 4.44999997,13 4.99999997,13 Z',
      id: 'NavigationArrowForwardIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'arrow_forward',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationArrowForwardIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationArrowForwardIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationArrowForwardIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationArrowForwardIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
