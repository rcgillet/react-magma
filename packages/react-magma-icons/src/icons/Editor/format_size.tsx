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
  title: ['format_size'],
  paths: [
    {
      d:
        'M8.99999999,5.49999997 C8.99999999,6.32999998 9.66999999,6.99999997 10.5,6.99999997 L14,6.99999997 L14,17.5 C14,18.33 14.67,19 15.5,19 C16.33,19 17,18.33 17,17.5 L17,6.99999997 L20.5,6.99999997 C21.33,6.99999997 22,6.32999998 22,5.49999997 C22,4.66999997 21.33,3.99999997 20.5,3.99999997 L10.5,3.99999997 C9.66999999,3.99999997 8.99999999,4.66999997 8.99999999,5.49999997 Z M4.49999996,12 L5.99999996,12 L5.99999996,17.5 C5.99999996,18.33 6.66999998,19 7.49999996,19 C8.32999998,19 8.99999996,18.33 8.99999996,17.5 L8.99999996,12 L10.5,12 C11.33,12 12,11.33 12,10.5 C12,9.66999999 11.33,8.99999999 10.5,8.99999999 L4.49999996,8.99999999 C3.66999997,8.99999999 2.99999996,9.66999999 2.99999996,10.5 C2.99999996,11.33 3.66999997,12 4.49999996,12 Z',
      id: 'EditorFormatSizeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_size',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatSizeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatSizeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatSizeIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatSizeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
