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
  title: ['vertical_align_bottom'],
  paths: [
    {
      d:
        'M14.79,13 L13,13 L13,3.99999996 C13,3.44999996 12.55,2.99999996 12,2.99999996 C11.45,2.99999996 11,3.44999996 11,3.99999996 L11,13 L9.20999999,13 C8.75999999,13 8.53999999,13.54 8.85999999,13.85 L11.65,16.64 C11.85,16.84 12.16,16.84 12.36,16.64 L15.15,13.85 C15.46,13.54 15.24,13 14.79,13 L14.79,13 Z M3.99999997,20 C3.99999997,20.55 4.44999997,21 4.99999997,21 L19,21 C19.55,21 20,20.55 20,20 C20,19.45 19.55,19 19,19 L4.99999997,19 C4.44999997,19 3.99999997,19.45 3.99999997,20 Z',
      id: 'EditorVerticalAlignBottomIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'vertical_align_bottom',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorVerticalAlignBottomIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorVerticalAlignBottomIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorVerticalAlignBottomIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorVerticalAlignBottomIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
