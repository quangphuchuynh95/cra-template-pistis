import React, { FunctionComponent } from 'react';
import { CircularProgress } from '@mui/material';
import { Wrapper } from './loading-panel.styled';

export interface LoadingPanelProps {
  withBorder?: boolean
}

export const LoadingPanel: FunctionComponent<LoadingPanelProps> = ({
  withBorder = false,
}) => (
  <Wrapper withBorder={withBorder}>
    <CircularProgress />
  </Wrapper>
)

LoadingPanel.displayName = 'LoadingPanel';
