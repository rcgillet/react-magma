import * as React from 'react';
import styled from '../../theme/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { I18nContext } from '../../i18n';

/**
 * @children required
 */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  isInverse?: boolean;
  testId?: string;
}

const StyledList = styled.ol<BreadcrumbProps>`
  display: flex;
  flex-wrap: wrap;
  font-size: ${props => props.theme.typeScale.size02.fontSize};
  line-height: ${props => props.theme.typeScale.size02.lineHeight};
  list-style: none;
  margin: 0;
  padding: 0;
`;

export interface BreadCrumbContextInterface {
  isInverse?: boolean;
}

export const BreadCrumbContext = React.createContext<
  BreadCrumbContextInterface
>({
  isInverse: false,
});

export const Breadcrumb = React.forwardRef<HTMLOListElement, BreadcrumbProps>(
  (props, ref) => {
    const {
      'aria-label': ariaLabel,
      children,
      isInverse,
      testId,
      ...other
    } = props;

    const theme = React.useContext(ThemeContext);
    const i18n = React.useContext(I18nContext);

    return (
      <BreadCrumbContext.Provider value={{ isInverse }}>
        <nav
          {...other}
          aria-label={ariaLabel ? ariaLabel : i18n.breadcrumb.navAriaLabel}
          data-testid={testId}
        >
          <StyledList isInverse={isInverse} ref={ref} theme={theme}>
            {children}
          </StyledList>
        </nav>
      </BreadCrumbContext.Provider>
    );
  }
);
