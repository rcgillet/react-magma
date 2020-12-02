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
  title: ['play_arrow'],
  paths: [
    {
      d:
        'M7.99999998,6.81999998 L7.99999998,17.18 C7.99999998,17.97 8.86999999,18.45 9.53999999,18.02 L17.68,12.84 C18.3,12.45 18.3,11.55 17.68,11.15 L9.53999999,5.97999997 C8.86999999,5.54999997 7.99999998,6.02999998 7.99999998,6.81999998 Z',
      id: 'AVPlayArrowIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'play_arrow',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVPlayArrowIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVPlayArrowIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVPlayArrowIcon-path-1',
        },
      ],
    },
  ],
};

export const AVPlayArrowIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
