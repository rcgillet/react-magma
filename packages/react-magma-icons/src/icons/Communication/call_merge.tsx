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
  title: ['call_merge'],
  paths: [
    {
      d:
        'M17.7,19.7 C18.09,19.31 18.09,18.68 17.7,18.29 L15,15.59 L13.59,17 L16.29,19.7 C16.68,20.09 17.32,20.09 17.7,19.7 Z M8.70999999,7.99999998 L11,7.99999998 L11,13.59 L6.28999998,18.29 C5.89999997,18.68 5.89999997,19.31 6.28999998,19.7 C6.67999998,20.09 7.30999998,20.09 7.69999998,19.7 L13,14.4 L13,7.99999998 L15.29,7.99999998 C15.74,7.99999998 15.96,7.45999998 15.64,7.14999998 L12.35,3.85999997 C12.15,3.65999997 11.84,3.65999997 11.64,3.85999997 L8.34999998,7.14999998 C8.03999998,7.45999998 8.25999998,7.99999998 8.70999999,7.99999998 Z',
      id: 'CommunicationCallMergeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'call_merge',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationCallMergeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationCallMergeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationCallMergeIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationCallMergeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
