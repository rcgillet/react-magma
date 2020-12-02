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
  title: ['radio_button_checked'],
  paths: [
    {
      d:
        'M12,1.99999996 C17.52,1.99999996 22,6.47999998 22,12 C22,17.52 17.52,22 12,22 C6.47999998,22 1.99999996,17.52 1.99999996,12 C1.99999996,6.47999998 6.47999998,1.99999996 12,1.99999996 Z M12,3.99999997 C7.57999998,3.99999997 3.99999997,7.57999998 3.99999997,12 C3.99999997,16.42 7.57999998,20 12,20 C16.42,20 20,16.42 20,12 C20,7.57999998 16.42,3.99999997 12,3.99999997 Z M12,6.99999998 C14.7614238,6.99999998 17,9.23857624 17,12 C17,14.7614238 14.7614238,17 12,17 C9.23857624,17 6.99999998,14.7614238 6.99999998,12 C6.99999998,9.23857624 9.23857624,6.99999998 12,6.99999998 Z',
      id: 'ToggleRadioButtonCheckedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'radio_button_checked',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ToggleRadioButtonCheckedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ToggleRadioButtonCheckedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ToggleRadioButtonCheckedIcon-path-1',
        },
      ],
    },
  ],
};

export const ToggleRadioButtonCheckedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
