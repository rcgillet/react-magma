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
  title: ['topic'],
  paths: [
    {
      d:
        'M20,5.99999997 L12,5.99999997 L10.59,4.58999997 C10.21,4.20999997 9.69999999,3.99999997 9.16999999,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 2.00999996,4.89999997 2.00999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,7.99999997 C22,6.89999998 21.1,5.99999997 20,5.99999997 Z M13,16 L6.99999997,16 C6.44999998,16 5.99999997,15.55 5.99999997,15 C5.99999997,14.45 6.44999998,14 6.99999997,14 L13,14 C13.55,14 14,14.45 14,15 C14,15.55 13.55,16 13,16 Z M17,12 L6.99999997,12 C6.44999998,12 5.99999997,11.55 5.99999997,11 C5.99999997,10.45 6.44999998,9.99999999 6.99999997,9.99999999 L17,9.99999999 C17.55,9.99999999 18,10.45 18,11 C18,11.55 17.55,12 17,12 Z',
      id: 'FileTopicIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'topic',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'FileTopicIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#FileTopicIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#FileTopicIcon-path-1',
        },
      ],
    },
  ],
};

export const FileTopicIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
