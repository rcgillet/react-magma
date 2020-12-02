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
  title: ['perm_device_information'],
  paths: [
    {
      d:
        'M13,6.99999998 L11,6.99999998 L11,8.99999998 L13,8.99999998 L13,6.99999998 Z M12,11 C11.45,11 11,11.45 11,12 L11,16 C11,16.55 11.45,17 12,17 C12.55,17 13,16.55 13,16 L13,12 C13,11.45 12.55,11 12,11 Z M17,1.00999995 L6.99999997,0.999999954 C5.89999997,0.999999954 4.99999997,1.89999996 4.99999997,2.99999995 L4.99999997,21 C4.99999997,22.1 5.89999997,23 6.99999997,23 L17,23 C18.1,23 19,22.1 19,21 L19,2.99999995 C19,1.89999996 18.1,1.00999995 17,1.00999995 Z M17,19 L6.99999998,19 L6.99999998,4.99999997 L17,4.99999997 L17,19 Z',
      id: 'ActionsPermDeviceInformationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'perm_device_information',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPermDeviceInformationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPermDeviceInformationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPermDeviceInformationIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPermDeviceInformationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
