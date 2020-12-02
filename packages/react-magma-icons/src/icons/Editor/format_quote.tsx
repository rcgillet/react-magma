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
  title: ['format_quote'],
  paths: [
    {
      d:
        'M7.16999998,17 C7.67999998,17 8.14999998,16.71 8.36999998,16.26 L9.78999999,13.42 C9.92999999,13.14 9.99999997,12.84 9.99999997,12.53 L9.99999997,7.99999998 C9.99999997,7.44999998 9.54999999,6.99999998 8.99999997,6.99999998 L4.99999997,6.99999998 C4.44999997,6.99999998 3.99999997,7.44999998 3.99999997,7.99999998 L3.99999997,12 C3.99999997,12.55 4.44999997,13 4.99999997,13 L6.99999997,13 L5.96999997,15.06 C5.51999997,15.95 6.16999998,17 7.16999998,17 Z M17.17,17 C17.68,17 18.15,16.71 18.37,16.26 L19.79,13.42 C19.93,13.14 20,12.84 20,12.53 L20,7.99999998 C20,7.44999998 19.55,6.99999998 19,6.99999998 L15,6.99999998 C14.45,6.99999998 14,7.44999998 14,7.99999998 L14,12 C14,12.55 14.45,13 15,13 L17,13 L15.97,15.06 C15.52,15.95 16.17,17 17.17,17 Z',
      id: 'EditorFormatQuoteIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_quote',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatQuoteIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatQuoteIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatQuoteIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatQuoteIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
