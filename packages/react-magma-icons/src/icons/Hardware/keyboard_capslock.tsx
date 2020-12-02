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
  title: ['keyboard_capslock'],
  paths: [
    {
      d:
        'M12,8.40999999 L15.89,12.3 C16.28,12.69 16.91,12.69 17.3,12.3 C17.69,11.91 17.69,11.28 17.3,10.89 L12.71,6.29999998 C12.32,5.90999997 11.69,5.90999997 11.3,6.29999998 L6.69999998,10.89 C6.30999998,11.28 6.30999998,11.91 6.69999998,12.3 C7.08999998,12.69 7.71999998,12.69 8.10999998,12.3 L12,8.40999999 Z M6.99999998,18 L17,18 C17.55,18 18,17.55 18,17 C18,16.45 17.55,16 17,16 L6.99999998,16 C6.44999998,16 5.99999998,16.45 5.99999998,17 C5.99999998,17.55 6.44999998,18 6.99999998,18 Z',
      id: 'HardwareKeyboardCapslockIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'keyboard_capslock',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareKeyboardCapslockIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareKeyboardCapslockIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareKeyboardCapslockIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareKeyboardCapslockIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
