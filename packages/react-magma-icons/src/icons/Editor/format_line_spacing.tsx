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
  title: ['format_line_spacing'],
  paths: [
    {
      d:
        'M7.28999998,6.99999998 C7.73999998,6.99999998 7.95999998,6.45999998 7.63999998,6.14999998 L5.34999997,3.84999997 C5.14999997,3.64999997 4.83999997,3.64999997 4.63999997,3.84999997 L2.34999996,6.14999998 C2.03999996,6.45999998 2.25999996,6.99999998 2.70999996,6.99999998 L3.99999997,6.99999998 L3.99999997,17 L2.70999996,17 C2.25999996,17 2.03999996,17.54 2.35999996,17.85 L4.64999997,20.14 C4.84999997,20.34 5.15999997,20.34 5.35999997,20.14 L7.64999998,17.85 C7.95999998,17.54 7.73999998,17 7.28999998,17 L5.99999998,17 L5.99999998,6.99999998 L7.28999998,6.99999998 Z M11,6.99999997 L21,6.99999997 C21.55,6.99999997 22,6.54999998 22,5.99999997 C22,5.44999997 21.55,4.99999997 21,4.99999997 L11,4.99999997 C10.45,4.99999997 9.99999999,5.44999997 9.99999999,5.99999997 C9.99999999,6.54999998 10.45,6.99999997 11,6.99999997 Z M21,17 L11,17 C10.45,17 9.99999999,17.45 9.99999999,18 C9.99999999,18.55 10.45,19 11,19 L21,19 C21.55,19 22,18.55 22,18 C22,17.45 21.55,17 21,17 Z M21,11 L11,11 C10.45,11 9.99999999,11.45 9.99999999,12 C9.99999999,12.55 10.45,13 11,13 L21,13 C21.55,13 22,12.55 22,12 C22,11.45 21.55,11 21,11 Z',
      id: 'EditorFormatLineSpacingIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_line_spacing',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatLineSpacingIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatLineSpacingIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatLineSpacingIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatLineSpacingIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
