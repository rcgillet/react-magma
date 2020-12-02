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
  title: ['view_carousel'],
  paths: [
    {
      d:
        'M7.99999998,19 L16,19 C16.55,19 17,18.55 17,18 L17,4.99999997 C17,4.44999997 16.55,3.99999997 16,3.99999997 L7.99999998,3.99999997 C7.44999998,3.99999997 6.99999998,4.44999997 6.99999998,4.99999997 L6.99999998,18 C6.99999998,18.55 7.44999998,19 7.99999998,19 Z M2.99999996,17 L4.99999996,17 C5.54999997,17 5.99999996,16.55 5.99999996,16 L5.99999996,6.99999997 C5.99999996,6.44999998 5.54999997,5.99999997 4.99999996,5.99999997 L2.99999996,5.99999997 C2.44999996,5.99999997 1.99999996,6.44999998 1.99999996,6.99999997 L1.99999996,16 C1.99999996,16.55 2.44999996,17 2.99999996,17 Z M18,6.99999997 L18,16 C18,16.55 18.45,17 19,17 L21,17 C21.55,17 22,16.55 22,16 L22,6.99999997 C22,6.44999998 21.55,5.99999997 21,5.99999997 L19,5.99999997 C18.45,5.99999997 18,6.44999998 18,6.99999997 Z',
      id: 'ActionsViewCarouselIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'view_carousel',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsViewCarouselIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsViewCarouselIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsViewCarouselIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsViewCarouselIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
