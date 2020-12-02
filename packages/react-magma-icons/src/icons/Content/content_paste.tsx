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
  title: ['content_paste'],
  paths: [
    {
      d:
        'M19,1.99999995 L14.82,1.99999995 C14.4,0.839999953 13.3,-5.00013773e-08 12,-5.00013773e-08 C10.7,-5.00013773e-08 9.59999999,0.839999953 9.17999999,1.99999995 L4.99999996,1.99999995 C3.89999997,1.99999995 2.99999996,2.89999996 2.99999996,3.99999995 L2.99999996,19.9999999 C2.99999996,21.1 3.89999997,21.9999999 4.99999996,21.9999999 L19,21.9999999 C20.1,21.9999999 21,21.1 21,19.9999999 L21,3.99999995 C21,2.89999996 20.1,1.99999995 19,1.99999995 Z M12,1.99999996 C12.55,1.99999996 13,2.44999996 13,2.99999996 C13,3.54999996 12.55,3.99999996 12,3.99999996 C11.45,3.99999996 11,3.54999996 11,2.99999996 C11,2.44999996 11.45,1.99999996 12,1.99999996 Z M18,20 L5.99999997,20 C5.44999997,20 4.99999997,19.55 4.99999997,19 L4.99999997,4.99999997 C4.99999997,4.44999997 5.44999997,3.99999997 5.99999997,3.99999997 L6.99999997,3.99999997 L6.99999997,4.99999997 C6.99999997,6.09999998 7.89999998,6.99999997 8.99999997,6.99999997 L15,6.99999997 C16.1,6.99999997 17,6.09999998 17,4.99999997 L17,3.99999997 L18,3.99999997 C18.55,3.99999997 19,4.44999997 19,4.99999997 L19,19 C19,19.55 18.55,20 18,20 Z',
      id: 'ContentContentPasteIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'content_paste',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentContentPasteIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentContentPasteIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentContentPasteIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentContentPasteIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
