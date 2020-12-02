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
  title: ['question_answer'],
  paths: [
    {
      d:
        'M20,5.99999997 L19,5.99999997 L19,14 C19,14.55 18.55,15 18,15 L5.99999997,15 L5.99999997,16 C5.99999997,17.1 6.89999998,18 7.99999997,18 L18,18 L22,22 L22,7.99999997 C22,6.89999998 21.1,5.99999997 20,5.99999997 Z M17,11 L17,3.99999996 C17,2.89999996 16.1,1.99999996 15,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,17 L5.99999996,13 L15,13 C16.1,13 17,12.1 17,11 Z',
      id: 'ActionsQuestionAnswerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'question_answer',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsQuestionAnswerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsQuestionAnswerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsQuestionAnswerIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsQuestionAnswerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
