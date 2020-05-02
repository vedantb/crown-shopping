import styled from 'styled-components';
import { ReactComponent as BrokenRobotSVG } from '../../assets/robot-broken.svg';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled(BrokenRobotSVG)`
  display: inline-block;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;
