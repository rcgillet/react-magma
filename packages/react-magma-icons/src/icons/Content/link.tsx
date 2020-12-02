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
  title: ['link'],
  paths: [
    {
      d:
        'M17,6.99999998 L14,6.99999998 C13.45,6.99999998 13,7.44999998 13,7.99999998 C13,8.54999999 13.45,8.99999998 14,8.99999998 L17,8.99999998 C18.65,8.99999998 20,10.35 20,12 C20,13.65 18.65,15 17,15 L14,15 C13.45,15 13,15.45 13,16 C13,16.55 13.45,17 14,17 L17,17 C19.76,17 22,14.76 22,12 C22,9.23999999 19.76,6.99999998 17,6.99999998 Z M7.99999998,12 C7.99999998,12.55 8.44999999,13 8.99999998,13 L15,13 C15.55,13 16,12.55 16,12 C16,11.45 15.55,11 15,11 L8.99999998,11 C8.44999999,11 7.99999998,11.45 7.99999998,12 Z M9.99999996,15 L6.99999996,15 C5.34999997,15 3.99999996,13.65 3.99999996,12 C3.99999996,10.35 5.34999997,8.99999998 6.99999996,8.99999998 L9.99999996,8.99999998 C10.55,8.99999998 11,8.54999999 11,7.99999998 C11,7.44999998 10.55,6.99999998 9.99999996,6.99999998 L6.99999996,6.99999998 C4.23999997,6.99999998 1.99999996,9.23999999 1.99999996,12 C1.99999996,14.76 4.23999997,17 6.99999996,17 L9.99999996,17 C10.55,17 11,16.55 11,16 C11,15.45 10.55,15 9.99999996,15 Z',
      id: 'ContentLinkIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'link',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentLinkIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentLinkIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentLinkIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentLinkIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
