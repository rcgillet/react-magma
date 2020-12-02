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
  title: ['format_bold'],
  paths: [
    {
      d:
        'M15.6,10.79 C16.57,10.12 17.25,9.01999999 17.25,7.99999997 C17.25,5.73999997 15.5,3.99999997 13.25,3.99999997 L7.99999998,3.99999997 C7.44999998,3.99999997 6.99999998,4.44999997 6.99999998,4.99999997 L6.99999998,17 C6.99999998,17.55 7.44999998,18 7.99999998,18 L13.78,18 C15.85,18 17.74,16.31 17.7500863,14.23 C17.76,12.7 16.9,11.39 15.6,10.79 Z M9.99999999,6.49999998 L13,6.49999998 C13.83,6.49999998 14.5,7.16999998 14.5,7.99999998 C14.5,8.82999999 13.83,9.49999998 13,9.49999998 L9.99999999,9.49999998 L9.99999999,6.49999998 Z M13.5,15.5 L9.99999999,15.5 L9.99999999,12.5 L13.5,12.5 C14.33,12.5 15,13.17 15,14 C15,14.83 14.33,15.5 13.5,15.5 Z',
      id: 'EditorFormatBoldIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_bold',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatBoldIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatBoldIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatBoldIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatBoldIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
