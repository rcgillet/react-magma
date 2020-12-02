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
  title: ['publish'],
  paths: [
    {
      d:
        'M4.99999997,4.99999997 C4.99999997,5.54999997 5.44999997,5.99999997 5.99999997,5.99999997 L18,5.99999997 C18.55,5.99999997 19,5.54999997 19,4.99999997 C19,4.44999997 18.55,3.99999997 18,3.99999997 L5.99999997,3.99999997 C5.44999997,3.99999997 4.99999997,4.44999997 4.99999997,4.99999997 Z M7.40999998,14 L8.99999999,14 L8.99999999,19 C8.99999999,19.55 9.44999999,20 9.99999999,20 L14,20 C14.55,20 15,19.55 15,19 L15,14 L16.59,14 C17.48,14 17.93,12.92 17.3,12.29 L12.71,7.69999998 C12.32,7.30999998 11.69,7.30999998 11.3,7.69999998 L6.70999998,12.29 C6.07999998,12.92 6.51999998,14 7.40999998,14 Z',
      id: 'EditorPublishIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'publish',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorPublishIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorPublishIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorPublishIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorPublishIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
