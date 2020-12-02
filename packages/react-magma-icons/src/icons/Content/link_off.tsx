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
  title: ['link_off'],
  paths: [
    {
      d:
        'M21.94,11.23 C21.57,8.75999999 19.32,6.99999998 16.82,6.99999998 L13.95,6.99999998 C13.43,6.99999998 13,7.42999998 13,7.94999998 C13,8.46999999 13.43,8.89999999 13.95,8.89999999 L16.85,8.89999999 C18.45,8.89999999 19.89,10.04 20.07,11.63 C20.24,13.06 19.43,14.32 18.22,14.85 L19.62,16.25 C21.25,15.23 22.26,13.34 21.94,11.23 L21.94,11.23 Z M4.11999997,3.55999996 C3.72999997,3.16999996 3.09999996,3.16999996 2.70999996,3.55999996 C2.31999996,3.94999997 2.31999996,4.57999997 2.70999996,4.96999997 L5.10999997,7.36999998 C3.16999996,8.16999998 1.83999996,10.14 2.01999996,12.41 C2.22999996,15.05 4.58999997,17 7.22999998,17 L10.05,17 C10.57,17 11,16.57 11,16.05 C11,15.53 10.57,15.1 10.05,15.1 L7.15999998,15.1 C5.52999997,15.1 4.05999997,13.91 3.90999997,12.28 C3.75999997,10.56 5.01999997,9.10999999 6.65999998,8.92999999 L8.75999999,11.03 C8.32999998,11.12 7.99999998,11.49 7.99999998,11.95 L7.99999998,12.05 C7.99999998,12.57 8.42999999,13 8.94999999,13 L10.73,13 L13,15.27 L13,17 L14.73,17 L18.03,20.3 C18.42,20.69 19.05,20.69 19.44,20.3 C19.83,19.91 19.83,19.28 19.44,18.89 L4.11999997,3.55999996 Z M16,11.95 C16,11.43 15.57,11 15.05,11 L14.39,11 L15.88,12.49 C15.95,12.36 16,12.21 16,12.05 L16,11.95 L16,11.95 Z',
      id: 'ContentLinkOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'link_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentLinkOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentLinkOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentLinkOffIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentLinkOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
