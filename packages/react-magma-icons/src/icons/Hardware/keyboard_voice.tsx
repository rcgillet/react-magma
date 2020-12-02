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
  title: ['keyboard_voice'],
  paths: [
    {
      d:
        'M12,15 C13.66,15 14.99,13.66 14.99,12 L15,5.99999996 C15,4.33999997 13.66,2.99999996 12,2.99999996 C10.34,2.99999996 8.99999999,4.33999997 8.99999999,5.99999996 L8.99999999,12 C8.99999999,13.66 10.34,15 12,15 Z M18.08,12 C17.66,12 17.31,12.3 17.25,12.71 C16.88,15.32 14.53,17.1 12,17.1 C9.46999999,17.1 7.11999998,15.33 6.74999998,12.71 C6.68999998,12.3 6.32999998,12 5.91999997,12 C5.39999997,12 4.99999997,12.46 5.06999997,12.97 C5.52999997,15.94 8.02999998,18.27 11,18.72 L11,21 C11,21.55 11.45,22 12,22 C12.55,22 13,21.55 13,21 L13,18.72 C15.96,18.29 18.47,15.94 18.93,12.97 C19,12.46 18.6,12 18.08,12 Z',
      id: 'HardwareKeyboardVoiceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'keyboard_voice',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareKeyboardVoiceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareKeyboardVoiceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareKeyboardVoiceIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareKeyboardVoiceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
