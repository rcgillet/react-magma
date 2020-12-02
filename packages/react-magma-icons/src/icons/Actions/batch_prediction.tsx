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
  title: ['batch_prediction'],
  paths: [
    {
      d:
        'M17,7.99999998 L6.99999997,7.99999998 C5.89999997,7.99999998 4.99999997,8.89999999 4.99999997,9.99999998 L4.99999997,20 C4.99999997,21.1 5.89999997,22 6.99999997,22 L17,22 C18.1,22 19,21.1 19,20 L19,9.99999998 C19,8.89999999 18.1,7.99999998 17,7.99999998 Z M12,20.5 L12,20.5 C11.45,20.5 11,20.05 11,19.5 L11,19 L13,19 L13,19.5 C13,20.05 12.55,20.5 12,20.5 Z M13,18 L11,18 C11,16.5 8.49999999,15 8.49999999,13 C8.49999999,11.07 10.07,9.49999999 12,9.49999999 C13.93,9.49999999 15.5,11.07 15.5,13 C15.5,15 13,16.5 13,18 Z M18,6.49999997 L5.99999997,6.49999997 L5.99999997,6.49999997 C5.99999997,5.66999997 6.66999998,4.99999997 7.49999997,4.99999997 L16.5,4.99999997 C17.33,4.99999997 18,5.66999997 18,6.49999997 L18,6.49999997 Z M17,3.49999996 L6.99999998,3.49999996 L6.99999998,3.49999996 C6.99999998,2.66999996 7.66999998,1.99999996 8.49999998,1.99999996 L15.5,1.99999996 C16.33,1.99999996 17,2.66999996 17,3.49999996 L17,3.49999996 Z',
      id: 'ActionsBatchPredictionIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'batch_prediction',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsBatchPredictionIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsBatchPredictionIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsBatchPredictionIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsBatchPredictionIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
