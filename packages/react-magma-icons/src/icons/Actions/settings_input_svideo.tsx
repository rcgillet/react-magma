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
  title: ['settings_input_svideo'],
  paths: [
    {
      d:
        'M7.99999997,11.5 C7.99999997,10.67 7.32999998,9.99999999 6.49999997,9.99999999 C5.66999997,9.99999999 4.99999997,10.67 4.99999997,11.5 C4.99999997,12.33 5.66999997,13 6.49999997,13 C7.32999998,13 7.99999997,12.33 7.99999997,11.5 Z M15,6.49999997 C15,5.66999997 14.33,4.99999997 13.5,4.99999997 L10.5,4.99999997 C9.66999999,4.99999997 8.99999999,5.66999997 8.99999999,6.49999997 C8.99999999,7.32999998 9.66999999,7.99999997 10.5,7.99999997 L13.5,7.99999997 C14.33,7.99999997 15,7.32999998 15,6.49999997 Z M8.49999998,15 C7.66999998,15 6.99999998,15.67 6.99999998,16.5 C6.99999998,17.33 7.66999998,18 8.49999998,18 C9.32999999,18 9.99999998,17.33 9.99999998,16.5 C9.99999998,15.67 9.32999999,15 8.49999998,15 Z M12,0.999999954 C5.92999997,0.999999954 0.999999954,5.92999997 0.999999954,12 C0.999999954,18.07 5.92999997,23 12,23 C18.07,23 23,18.07 23,12 C23,5.92999997 18.07,0.999999954 12,0.999999954 Z M12,21 C7.03999998,21 2.99999996,16.96 2.99999996,12 C2.99999996,7.03999998 7.03999998,2.99999996 12,2.99999996 C16.96,2.99999996 21,7.03999998 21,12 C21,16.96 16.96,21 12,21 Z M17.5,9.99999999 C16.67,9.99999999 16,10.67 16,11.5 C16,12.33 16.67,13 17.5,13 C18.33,13 19,12.33 19,11.5 C19,10.67 18.33,9.99999999 17.5,9.99999999 Z M15.5,15 C14.67,15 14,15.67 14,16.5 C14,17.33 14.67,18 15.5,18 C16.33,18 17,17.33 17,16.5 C17,15.67 16.33,15 15.5,15 Z',
      id: 'ActionsSettingsInputSvideoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_input_svideo',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSettingsInputSvideoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSettingsInputSvideoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSettingsInputSvideoIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSettingsInputSvideoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
