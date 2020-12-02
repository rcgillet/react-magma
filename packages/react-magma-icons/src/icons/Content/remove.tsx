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
  title: ['remove'],
  paths: [
    {
      d:
        'M18,13 L5.99999997,13 C5.44999997,13 4.99999997,12.55 4.99999997,12 C4.99999997,11.45 5.44999997,11 5.99999997,11 L18,11 C18.55,11 19,11.45 19,12 C19,12.55 18.55,13 18,13 Z',
      id: 'ContentRemoveIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'remove',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentRemoveIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentRemoveIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentRemoveIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentRemoveIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
