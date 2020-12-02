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
  title: ['thumb_down_alt'],
  paths: [
    {
      d:
        'M10.88,21.94 L16.41,16.4 C16.78,16.03 16.99,15.52 16.99,14.99 L16.99,4.99999996 C16.99,3.89999997 16.09,2.99999996 14.99,2.99999996 L5.99999997,2.99999996 C5.19999997,2.99999996 4.47999997,3.47999996 4.16999997,4.20999997 L0.909999954,11.82 C0.0599999502,13.8 1.50999996,16 3.65999997,16 L9.30999999,16 L8.35999998,20.58 C8.25999998,21.08 8.40999999,21.59 8.76999999,21.95 C9.35999999,22.53 10.3,22.53 10.88,21.94 L10.88,21.94 Z M21,2.99999996 C19.9,2.99999996 19,3.89999997 19,4.99999996 L19,13 C19,14.1 19.9,15 21,15 C22.1,15 23,14.1 23,13 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z',
      id: 'SocialThumbDownAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'thumb_down_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialThumbDownAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialThumbDownAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialThumbDownAltIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialThumbDownAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
