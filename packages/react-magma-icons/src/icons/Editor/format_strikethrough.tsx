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
  title: ['format_strikethrough'],
  paths: [
    {
      d:
        'M12,19 C13.1,19 14,18.1 14,17 L14,16 L9.99999999,16 L9.99999999,17 C9.99999999,18.1 10.9,19 12,19 Z M4.99999997,5.49999997 C4.99999997,6.32999998 5.66999997,6.99999997 6.49999997,6.99999997 L9.99999997,6.99999997 L9.99999997,9.99999997 L14,9.99999997 L14,6.99999997 L17.5,6.99999997 C18.33,6.99999997 19,6.32999998 19,5.49999997 C19,4.66999997 18.33,3.99999997 17.5,3.99999997 L6.49999997,3.99999997 C5.66999997,3.99999997 4.99999997,4.66999997 4.99999997,5.49999997 Z M3.99999996,14 L20,14 C20.55,14 21,13.55 21,13 C21,12.45 20.55,12 20,12 L3.99999996,12 C3.44999996,12 2.99999996,12.45 2.99999996,13 C2.99999996,13.55 3.44999996,14 3.99999996,14 Z',
      id: 'EditorFormatStrikethroughIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_strikethrough',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatStrikethroughIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatStrikethroughIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatStrikethroughIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatStrikethroughIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
