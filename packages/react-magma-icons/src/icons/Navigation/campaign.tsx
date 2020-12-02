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
  title: ['campaign'],
  paths: [
    {
      d:
        'M16.6,16.8 C16.93,16.36 17.55,16.26 17.99,16.59 C18.51,16.98 19.07,17.4 19.6,17.8 C20.04,18.12 20.13,18.74 19.8,19.18 L19.8,19.18 L19.79,19.2 C19.47,19.64 18.85,19.73 18.41,19.4 C17.88,19 17.32,18.58 16.79,18.19 C16.35,17.87 16.26,17.26 16.59,16.82 C16.59,16.82 16.6,16.81 16.6,16.8 Z M13,5.99999998 L13,18 L7.99999996,15 L6.99999996,15 L6.99999996,18 C6.99999996,18.55 6.54999998,19 5.99999996,19 L5.99999996,19 L5.88380098,18.9932398 C5.38801017,18.9352041 4.99999996,18.5107143 4.99999996,18 L4.99999996,18 L4.99999996,15 L3.99999996,15 C2.89999996,15 1.99999996,14.1 1.99999996,13 L1.99999996,13 L1.99999996,11 C1.99999996,9.89999999 2.89999996,8.99999998 3.99999996,8.99999998 L3.99999996,8.99999998 L7.99999996,8.99999998 L13,5.99999998 Z M14,8.64999999 C14.92,9.46999999 15.5,10.67 15.5,12 C15.5,13.33 14.92,14.53 14,15.34 L14,15.34 Z M21,11 C21.55,11 22,11.45 22,12 L22,12 L21.9932398,12.116199 C21.9352041,12.6119898 21.5107143,13 21,13 L21,13 L19,13 C18.45,13 18,12.55 18,12 L18,12 L18.0067602,11.883801 C18.0647959,11.3880102 18.4892857,11 19,11 L19,11 Z M18.42,4.58999997 C18.85,4.25999997 19.47,4.34999997 19.8,4.78999997 L19.8,4.78999997 L19.81,4.80999997 C20.13,5.24999997 20.05,5.86999997 19.62,6.18999998 C19.09,6.58999998 18.53,7.01999998 18,7.40999998 C17.56,7.73999998 16.95,7.64999998 16.62,7.20999998 L16.62,7.20999998 L16.61,7.18999998 C16.28,6.75999998 16.36,6.13999998 16.8,5.80999997 C17.32,5.40999997 17.89,4.98999997 18.42,4.58999997 Z',
      id: 'NavigationCampaignIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'campaign',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationCampaignIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationCampaignIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationCampaignIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationCampaignIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
