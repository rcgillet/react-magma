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
  title: ['voicemail'],
  paths: [
    {
      d:
        'M18.5,5.99999997 C15.46,5.99999997 13,8.45999999 13,11.5 C13,12.83 13.47,14.05 14.26,15 L9.73999999,15 C10.53,14.05 11,12.83 11,11.5 C11,8.45999999 8.53999999,5.99999997 5.49999995,5.99999997 C2.45999996,5.99999997 -4.99999473e-08,8.45999999 -4.99999473e-08,11.5 C-4.99999473e-08,14.54 2.45999996,17 5.49999995,17 L18.5,17 C21.54,17 24,14.54 24,11.5 C24,8.45999999 21.54,5.99999997 18.5,5.99999997 Z M5.49999996,15 C3.56999996,15 1.99999996,13.43 1.99999996,11.5 C1.99999996,9.56999999 3.56999996,7.99999998 5.49999996,7.99999998 C7.42999998,7.99999998 8.99999996,9.56999999 8.99999996,11.5 C8.99999996,13.43 7.42999998,15 5.49999996,15 Z M18.5,15 C16.57,15 15,13.43 15,11.5 C15,9.56999999 16.57,7.99999998 18.5,7.99999998 C20.43,7.99999998 22,9.56999999 22,11.5 C22,13.43 20.43,15 18.5,15 Z',
      id: 'CommunicationVoicemailIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'voicemail',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationVoicemailIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationVoicemailIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationVoicemailIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationVoicemailIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
