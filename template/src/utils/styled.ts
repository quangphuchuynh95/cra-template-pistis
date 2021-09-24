import { css } from 'styled-components';
import { Properties } from 'csstype';

export type MixinExpression<T> = string|((props: T) => string)

export function mixin <T>(
  strings:TemplateStringsArray,
  ...exprs: MixinExpression<T>[]
) {
  return (props: T) => {
    let str = '';
    strings.forEach((string, i) => {
      const expr = exprs[i];
      if (expr instanceof Function) {
        str += string + (expr(props) || '');
      } else {
        str += string + String(expr);
      }
    });
    return str;
  }
}

export const border = (
  position: 'l' | 'r' | 'b' | 't' | 'y' | 'x' | 'a' = 'a',
  width: Properties['borderWidth'] = 'thin',
  style: Properties['borderStyle'] = 'solid',
) => css`
  ${({ theme }) => ['l', 'x', 'a'].includes(position) && `border-left: ${width} ${style} ${theme.palette.divider};`}
  ${({ theme }) => ['r', 'x', 'a'].includes(position) && `border-right: ${width} ${style} ${theme.palette.divider};`}
  ${({ theme }) => ['t', 'y', 'a'].includes(position) && `border-top: ${width} ${style} ${theme.palette.divider};`}
  ${({ theme }) => ['b', 'y', 'a'].includes(position) && `border-bottom: ${width} ${style} ${theme.palette.divider};`}
`;

export const padding = (
  position: 'l' | 'r' | 'b' | 't' | 'y' | 'x' | 'a' = 'a',
  spacing = 1,
) => css`
  ${({ theme }) => ['l', 'x', 'a'].includes(position) && `padding-left: ${theme.spacing(spacing)};`}
  ${({ theme }) => ['r', 'x', 'a'].includes(position) && `padding-right: ${theme.spacing(spacing)};`}
  ${({ theme }) => ['t', 'y', 'a'].includes(position) && `padding-top: ${theme.spacing(spacing)};`}
  ${({ theme }) => ['b', 'y', 'a'].includes(position) && `padding-bottom: ${theme.spacing(spacing)};`}
`;

export const margin = (
  position: 'l' | 'r' | 'b' | 't' | 'y' | 'x' | 'a' = 'a',
  spacing = 1,
) => css`
  ${({ theme }) => ['l', 'x', 'a'].includes(position) && `margin-left: ${theme.spacing(spacing)};`}
  ${({ theme }) => ['r', 'x', 'a'].includes(position) && `margin-right: ${theme.spacing(spacing)};`}
  ${({ theme }) => ['t', 'y', 'a'].includes(position) && `margin-top: ${theme.spacing(spacing)};`}
  ${({ theme }) => ['b', 'y', 'a'].includes(position) && `margin-bottom: ${theme.spacing(spacing)};`}
`;

export const card = (
  variant: 'outlined' | 'elevated' | 'flat',
) => css`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  ${({ theme }) => variant === 'outlined' && `border: thin solid ${theme.palette.divider};`}
  ${({ theme }) => variant === 'elevated' && `box-shadow: ${theme.shadows[1]};`}
`;
export const shadow = (
  value: number, // 0 -> 24
) => css`
  box-shadow: ${({ theme }) => theme.shadows[value]};
`;
