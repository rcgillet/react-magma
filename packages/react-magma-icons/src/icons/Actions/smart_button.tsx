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
  title: ['smart_button'],
  paths: [
    {
      d:
        'M22,8.99999998 L22,15 C22,16.1 21.1,17 20,17 L19,17 L19,15 L20,15 L20,8.99999998 L3.99999996,8.99999998 L3.99999996,15 L9.99999996,15 L9.99999996,17 L3.99999996,17 C2.89999996,17 1.99999996,16.1 1.99999996,15 L1.99999996,8.99999998 C1.99999996,7.89999998 2.89999996,6.99999998 3.99999996,6.99999998 L20,6.99999998 C21.1,6.99999998 22,7.89999998 22,8.99999998 Z M14.04,17.99 C14.22,18.38 14.77,18.38 14.95,17.99 L15.58,16.59 L16.98,15.96 C17.37,15.78 17.37,15.23 16.98,15.05 L15.58,14.42 L14.95,13.02 C14.77,12.63 14.22,12.63 14.04,13.02 L13.41,14.42 L12.01,15.05 C11.62,15.23 11.62,15.78 12.01,15.96 L13.41,16.59 L14.04,17.99 Z M16.74,13.43 C16.84,13.65 17.16,13.65 17.26,13.43 L17.62,12.63 L18.42,12.27 C18.64,12.17 18.64,11.85 18.42,11.75 L17.62,11.39 L17.26,10.59 C17.16,10.37 16.84,10.37 16.74,10.59 L16.38,11.39 L15.58,11.75 C15.36,11.85 15.36,12.17 15.58,12.27 L16.38,12.63 L16.74,13.43 Z',
      id: 'ActionsSmartButtonIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'smart_button',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSmartButtonIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSmartButtonIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSmartButtonIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSmartButtonIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
