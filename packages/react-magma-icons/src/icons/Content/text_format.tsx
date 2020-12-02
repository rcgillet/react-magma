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
  title: ['text_format'],
  paths: [
    {
      d:
        'M4.99999997,18 C4.99999997,18.55 5.44999997,19 5.99999997,19 L18,19 C18.55,19 19,18.55 19,18 C19,17.45 18.55,17 18,17 L5.99999997,17 C5.44999997,17 4.99999997,17.45 4.99999997,18 Z M9.49999999,12.8 L14.5,12.8 L15.16,14.4 C15.31,14.76 15.66,15 16.05,15 C16.74,15 17.2,14.29 16.93,13.66 L13.05,4.68999997 C12.87,4.26999997 12.46,3.99999997 12,3.99999997 C11.54,3.99999997 11.13,4.26999997 10.95,4.68999997 L7.06999998,13.66 C6.79999998,14.29 7.26999998,15 7.95999998,15 C8.34999998,15 8.69999999,14.76 8.84999999,14.4 L9.49999999,12.8 Z M12,5.97999997 L13.87,11 L10.13,11 L12,5.97999997 Z',
      id: 'ContentTextFormatIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'text_format',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentTextFormatIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentTextFormatIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentTextFormatIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentTextFormatIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
