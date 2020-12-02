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
  title: ['content_copy'],
  paths: [
    {
      d:
        'M15,0.999999954 L3.99999996,0.999999954 C2.89999996,0.999999954 1.99999996,1.89999996 1.99999996,2.99999995 L1.99999996,16 C1.99999996,16.55 2.44999996,17 2.99999996,17 C3.54999996,17 3.99999996,16.55 3.99999996,16 L3.99999996,3.99999995 C3.99999996,3.44999996 4.44999997,2.99999995 4.99999996,2.99999995 L15,2.99999995 C15.55,2.99999995 16,2.54999996 16,1.99999995 C16,1.44999996 15.55,0.999999954 15,0.999999954 Z M19,4.99999997 L7.99999997,4.99999997 C6.89999998,4.99999997 5.99999997,5.89999997 5.99999997,6.99999997 L5.99999997,21 C5.99999997,22.1 6.89999998,23 7.99999997,23 L19,23 C20.1,23 21,22.1 21,21 L21,6.99999997 C21,5.89999997 20.1,4.99999997 19,4.99999997 Z M18,21 L8.99999998,21 C8.44999999,21 7.99999998,20.55 7.99999998,20 L7.99999998,7.99999998 C7.99999998,7.44999998 8.44999999,6.99999998 8.99999998,6.99999998 L18,6.99999998 C18.55,6.99999998 19,7.44999998 19,7.99999998 L19,20 C19,20.55 18.55,21 18,21 Z',
      id: 'ContentContentCopyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'content_copy',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentContentCopyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentContentCopyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentContentCopyIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentContentCopyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
