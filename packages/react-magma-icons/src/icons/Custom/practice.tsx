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
  title: ['practice'],
  paths: [
    {
      d:
        'M12,2 C6.42857143,2 2,6.42857143 2,12 C2,17.5714286 6.42857143,22 12,22 C17.5714286,22 22,17.5714286 22,12 C22,6.42857143 17.5714286,2 12,2 Z M10.9818051,12.0334087 L11.532278,12.0334087 C12.0467748,12.0334087 12.4317421,11.9317701 12.6871916,11.7284899 C12.9426411,11.5252097 13.0703639,11.2292885 13.0703639,10.8407175 C13.0703639,10.4485486 12.9633286,10.1589236 12.7492547,9.97183388 C12.5351809,9.78474413 12.1996836,9.69120066 11.7427529,9.69120066 L10.9818051,9.69120066 L10.9818051,12.0334087 Z M14.75956,10.7813528 C14.75956,11.6304524 14.4942204,12.27986 13.9635331,12.729595 C13.4328458,13.17933 12.6782019,13.4041941 11.6995785,13.4041941 L10.9818051,13.4041941 L10.9818051,16.2105263 L9.30879934,16.2105263 L9.30879934,8.3204153 L11.8291016,8.3204153 C12.7861376,8.3204153 13.5137979,8.52639083 14.0121042,8.93834807 C14.5104106,9.35030531 14.75956,9.96463407 14.75956,10.7813528 Z',
      id: 'CustomPracticeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'practice',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomPracticeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomPracticeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomPracticeIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomPracticeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
