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
  title: ['spotify'],
  paths: [
    {
      d:
        'M16.6740557,16.0885227 C16.6740557,15.8109475 16.5437752,15.5895192 16.2832142,15.424238 C14.6080404,14.425745 12.6679306,13.9264985 10.4628846,13.9264985 C9.3083467,13.9264985 8.06266103,14.0740363 6.72582762,14.3691119 C6.36123669,14.4473774 6.17894123,14.6731807 6.17894123,15.0465218 C6.17894123,15.2200671 6.23751884,15.3697924 6.35467406,15.4956978 C6.47182927,15.6216032 6.62592971,15.6845559 6.81697535,15.6845559 C6.86024014,15.6845559 7.02090321,15.6497983 7.29896456,15.5802829 C8.44475232,15.3459725 9.49939235,15.2288173 10.4628846,15.2288173 C12.42487,15.2288173 14.1479267,15.6758057 15.6320548,16.5697827 C15.7968499,16.6650625 15.9400126,16.7127023 16.0615429,16.7127023 C16.226338,16.7127023 16.3695008,16.6541247 16.4910311,16.5369695 C16.6125614,16.4198143 16.6733265,16.270089 16.6733265,16.0877935 L16.6740557,16.0885227 Z M17.9238734,13.2891935 C17.9238734,12.942103 17.7719605,12.6774099 17.4681348,12.4951145 C15.4108697,11.2710612 13.0322785,10.6590346 10.3323611,10.6590346 C9.00427787,10.6590346 7.68907686,10.84133 6.38675806,11.205921 C5.97015216,11.3187011 5.76184921,11.5965194 5.76184921,12.0393758 C5.76184921,12.2561859 5.83792718,12.4406689 5.99008313,12.5928249 C6.14223907,12.7449808 6.32672208,12.8210588 6.54353216,12.8210588 C6.60429731,12.8210588 6.76496038,12.7863011 7.02552137,12.7167858 C8.08477954,12.4304604 9.17417724,12.2872977 10.2937145,12.2872977 C12.7155705,12.2872977 14.8336007,12.8254339 16.6478052,13.9017063 C16.8563512,14.0144864 17.0213893,14.0708765 17.1429196,14.0708765 C17.3597297,14.0708765 17.5442127,13.9947985 17.6963687,13.8426426 C17.8485246,13.6904866 17.9246026,13.5060036 17.9246026,13.2891935 L17.9238734,13.2891935 Z M19.3304652,10.0596471 C19.3304652,9.65179136 19.1569199,9.34796558 18.8098294,9.14816975 C17.7160566,8.51426766 16.4443634,8.03470906 14.9947499,7.70949395 C13.5451364,7.38427884 12.0563901,7.22142822 10.528511,7.2209421 C8.75757134,7.2209421 7.17767731,7.42486996 5.78882893,7.83272568 C5.5890331,7.89349084 5.4218074,8.00408342 5.28715182,8.16450343 C5.15249623,8.32492344 5.08516844,8.53541393 5.08516844,8.79597492 C5.08516844,9.06528608 5.17412863,9.2910894 5.352049,9.47338486 C5.52996937,9.65568033 5.75358514,9.74682806 6.02289631,9.74682806 C6.11817607,9.74682806 6.29172136,9.71207039 6.54353216,9.64255505 C7.6980701,9.32122891 9.03052841,9.16056585 10.5409071,9.16056585 C11.9210053,9.16056585 13.2644013,9.30810364 14.5710952,9.60317923 C15.8777891,9.89825482 16.9781245,10.3104856 17.8721015,10.8398717 C18.054397,10.9439016 18.2279422,10.9959166 18.3927373,10.9959166 C18.6445482,10.9959166 18.8637888,10.9069564 19.0504594,10.729036 C19.2371299,10.5511156 19.3304652,10.3274999 19.3304652,10.0581887 L19.3304652,10.0596471 Z M22,12 C22,13.8142045 21.5530115,15.4874338 20.6590346,17.0196879 C19.7650576,18.5519421 18.5519421,19.7650576 17.0196879,20.6590346 C15.4874338,21.5530115 13.8142045,22 12,22 C10.1857955,22 8.51256623,21.5530115 6.98031209,20.6590346 C5.44805795,19.7650576 4.23494239,18.5519421 3.34096544,17.0196879 C2.44698848,15.4874338 2,13.8142045 2,12 C2,10.1857955 2.44698848,8.51256623 3.34096544,6.98031209 C4.23494239,5.44805795 5.44805795,4.23494239 6.98031209,3.34096544 C8.51256623,2.44698848 10.1857955,2 12,2 C13.8142045,2 15.4874338,2.44698848 17.0196879,3.34096544 C18.5519421,4.23494239 19.7650576,5.44805795 20.6590346,6.98031209 C21.5530115,8.51256623 22,10.1857955 22,12 Z',
      id: 'CompaniesSpotifyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'spotify',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CompaniesSpotifyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CompaniesSpotifyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Shape',
          fill: '#000000',
          xlinkHref: '#CompaniesSpotifyIcon-path-1',
        },
      ],
    },
  ],
};

export const CompaniesSpotifyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
