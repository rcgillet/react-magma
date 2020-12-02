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
  title: ['center_focus_strong'],
  paths: [
    {
      d:
        'M12,7.99999998 C9.78999999,7.99999998 7.99999998,9.78999999 7.99999998,12 C7.99999998,14.21 9.78999999,16 12,16 C14.21,16 16,14.21 16,12 C16,9.78999999 14.21,7.99999998 12,7.99999998 Z M3.99999996,15 C3.44999996,15 2.99999996,15.45 2.99999996,16 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L7.99999996,21 C8.54999999,21 8.99999996,20.55 8.99999996,20 C8.99999996,19.45 8.54999999,19 7.99999996,19 L5.99999996,19 C5.44999997,19 4.99999996,18.55 4.99999996,18 L4.99999996,16 C4.99999996,15.45 4.54999997,15 3.99999996,15 Z M4.99999996,5.99999996 C4.99999996,5.44999997 5.44999997,4.99999996 5.99999996,4.99999996 L7.99999996,4.99999996 C8.54999999,4.99999996 8.99999996,4.54999997 8.99999996,3.99999996 C8.99999996,3.44999996 8.54999999,2.99999996 7.99999996,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,7.99999996 C2.99999996,8.54999999 3.44999996,8.99999996 3.99999996,8.99999996 C4.54999997,8.99999996 4.99999996,8.54999999 4.99999996,7.99999996 L4.99999996,5.99999996 Z M19,2.99999996 L16,2.99999996 C15.45,2.99999996 15,3.44999996 15,3.99999996 C15,4.54999997 15.45,4.99999996 16,4.99999996 L18,4.99999996 C18.55,4.99999996 19,5.44999997 19,5.99999996 L19,7.99999996 C19,8.54999999 19.45,8.99999996 20,8.99999996 C20.55,8.99999996 21,8.54999999 21,7.99999996 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M19,18 C19,18.55 18.55,19 18,19 L16,19 C15.45,19 15,19.45 15,20 C15,20.55 15.45,21 16,21 L19,21 C20.1,21 21,20.1 21,19 L21,16 C21,15.45 20.55,15 20,15 C19.45,15 19,15.45 19,16 L19,18 Z',
      id: 'ImageCenterFocusStrongIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'center_focus_strong',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageCenterFocusStrongIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageCenterFocusStrongIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageCenterFocusStrongIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageCenterFocusStrongIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
