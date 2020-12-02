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
  title: ['assessment'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M7.99999998,17 C7.44999998,17 6.99999998,16.55 6.99999998,16 L6.99999998,11 C6.99999998,10.45 7.44999998,9.99999999 7.99999998,9.99999999 C8.54999999,9.99999999 8.99999998,10.45 8.99999998,11 L8.99999998,16 C8.99999998,16.55 8.54999999,17 7.99999998,17 Z M12,17 C11.45,17 11,16.55 11,16 L11,7.99999998 C11,7.44999998 11.45,6.99999998 12,6.99999998 C12.55,6.99999998 13,7.44999998 13,7.99999998 L13,16 C13,16.55 12.55,17 12,17 Z M16,17 C15.45,17 15,16.55 15,16 L15,14 C15,13.45 15.45,13 16,13 C16.55,13 17,13.45 17,14 L17,16 C17,16.55 16.55,17 16,17 Z',
      id: 'ActionsAssessmentIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'assessment',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAssessmentIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAssessmentIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAssessmentIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAssessmentIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
