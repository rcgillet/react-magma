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
  title: ['request_quote'],
  paths: [
    {
      d:
        'M19.41,7.40999998 L14.58,2.57999996 C14.21,2.20999996 13.7,1.99999996 13.17,1.99999996 L5.99999997,1.99999996 C4.89999997,1.99999996 4.00999997,2.89999996 4.00999997,3.99999996 L3.99999997,20 C3.99999997,21.1 4.88999997,22 5.98999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,8.82999999 C20,8.29999998 19.79,7.78999998 19.41,7.40999998 Z M14,13 C14.55,13 15,13.45 15,14 L15,17 C15,17.55 14.55,18 14,18 L13,18 C13,18.55 12.55,19 12,19 C11.45,19 11,18.55 11,18 L9.99999999,18 C9.44999999,18 8.99999999,17.55 8.99999999,17 C8.99999999,16.45 9.44999999,16 9.99999999,16 L13,16 L13,15 L9.99999999,15 C9.44999999,15 8.99999999,14.55 8.99999999,14 L8.99999999,11 C8.99999999,10.45 9.44999999,9.99999999 9.99999999,9.99999999 L11,9.99999999 C11,9.44999999 11.45,8.99999999 12,8.99999999 C12.55,8.99999999 13,9.44999999 13,9.99999999 L14,9.99999999 C14.55,9.99999999 15,10.45 15,11 C15,11.55 14.55,12 14,12 L11,12 L11,13 L14,13 Z M14,7.99999996 C13.45,7.99999996 13,7.54999998 13,6.99999996 L13,3.49999996 L17.5,7.99999996 L14,7.99999996 Z',
      id: 'FileRequestQuoteIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'request_quote',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'FileRequestQuoteIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#FileRequestQuoteIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#FileRequestQuoteIcon-path-1',
        },
      ],
    },
  ],
};

export const FileRequestQuoteIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
