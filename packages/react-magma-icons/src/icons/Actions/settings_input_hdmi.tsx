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
  title: ['settings_input_hdmi'],
  paths: [
    {
      d:
        'M18,6.99999996 L18,3.99999996 C18,2.89999996 17.1,1.99999996 16,1.99999996 L7.99999997,1.99999996 C6.89999998,1.99999996 5.99999997,2.89999996 5.99999997,3.99999996 L5.99999997,6.99999996 C5.44999997,6.99999996 4.99999997,7.44999998 4.99999997,7.99999996 L4.99999997,12.7 C4.99999997,12.9 5.05999997,13.09 5.16999997,13.25 L7.99999997,19 L7.99999997,21 C7.99999997,21.55 8.44999999,22 8.99999997,22 L15,22 C15.55,22 16,21.55 16,21 L16,19 L18.83,13.25 C18.94,13.09 19,12.89 19,12.7 L19,7.99999996 C19,7.44999998 18.55,6.99999996 18,6.99999996 Z M16,6.99999997 L14,6.99999997 L14,5.49999997 C14,5.21999997 13.78,4.99999997 13.5,4.99999997 C13.22,4.99999997 13,5.21999997 13,5.49999997 L13,6.99999997 L11,6.99999997 L11,5.49999997 C11,5.21999997 10.78,4.99999997 10.5,4.99999997 C10.22,4.99999997 9.99999998,5.21999997 9.99999998,5.49999997 L9.99999998,6.99999997 L7.99999998,6.99999997 L7.99999998,3.99999997 L16,3.99999997 L16,6.99999997 Z',
      id: 'ActionsSettingsInputHdmiIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_input_hdmi',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSettingsInputHdmiIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSettingsInputHdmiIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSettingsInputHdmiIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSettingsInputHdmiIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
