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
  title: ['person'],
  paths: [
    {
      d:
        'M12,12 C14.21,12 16,10.21 16,7.99999997 C16,5.78999997 14.21,3.99999997 12,3.99999997 C9.78999999,3.99999997 7.99999998,5.78999997 7.99999998,7.99999997 C7.99999998,10.21 9.78999999,12 12,12 Z M12,14 C9.32999999,14 3.99999997,15.34 3.99999997,18 L3.99999997,19 C3.99999997,19.55 4.44999997,20 4.99999997,20 L19,20 C19.55,20 20,19.55 20,19 L20,18 C20,15.34 14.67,14 12,14 Z',
      id: 'SocialPersonIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'person',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialPersonIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialPersonIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialPersonIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialPersonIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
