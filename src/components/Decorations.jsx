/** @jsx jsx */
import NeonSign from './NeonSign';
import Portrait from './Portrait';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const DecorationsContainer = styled.div`
  margin: auto;
  max-width: 1024px;
  display: flex;
  justify-content: space-around;
  position: relative;

  flex-direction: column;
  align-items: flex-start;
`;

const NeonSignContainer = styled.div`
  position: absolute;
  z-index: 10;
  left: 5%;
  top: 8%;
`;

const PortraitContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 40px;
`;

const Decorations = () => (
  <div sx={{ width: '100%', height: '100%' }}>
    <NeonSignContainer>
      <NeonSign />
    </NeonSignContainer>
    <DecorationsContainer>
      <PortraitContainer>
        <Portrait sx={{ marginTop: 4, marginRight: 4 }} />
      </PortraitContainer>
    </DecorationsContainer>
  </div>
);

export default Decorations;
