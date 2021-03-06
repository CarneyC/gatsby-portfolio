/** @jsx jsx */
import BigBox from './BigBox';
import Cup from './Cup';
import NotepadComponent from './Notepad';
import OutletComponent from './Outlet';
import PencilHolderComponent from './PencilHolder';
import Plant from './Plant';
import Tray from './Tray';
import { Resume } from '../../../data';
import TableTile from '../../../images/table-tile.png';
import Monitor from '../Monitor';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const On = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 768px;
  position: absolute;
  margin-left: -15px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (orientation: landscape) {
    @media (min-height: 1024px) {
      transform: translate(-50%, -10%) scale(1.1);
    }

    @media (min-height: 1300px) {
      transform: translate(-50%, -20%) scale(1.3);
    }

    @media (min-height: 1440px) {
      transform: translate(-50%, -20%) scale(1.4);
    }

    @media (min-height: 1600px) {
      transform: translate(-50%, -30%) scale(1.5);
    }
  }
`;

const TableContainer = styled.div`
  height: 36%;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #e4cc7f url(${TableTile});
  background-size: contain;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  z-index: 1;
`;

const ComputerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 120px;
`;

const Computer = styled.div`
  transform-origin: 50% 100%;

  @media (min-width: 820px) {
    @media (max-aspect-ratio: 7 / 8) {
      transform: scale(1.5);
    }

    @media (max-aspect-ratio: 2 / 3) {
      transform: scale(2);
    }
  }

  @media (min-width: 1460px) {
    transform: scale(1.2);
    margin-bottom: -2.5%;
  }

  @media (max-height: 890px) {
    transform: scale(1.1);
    margin-bottom: -10%;
  }

  @media (max-height: 800px) {
    transform: scale(1);
  }

  @media (max-height: 700px) {
    transform: scale(0.9);
  }

  @media (max-height: 650px) {
    transform: scale(0.8);
  }
`;

const PlantContainer = styled.div`
  position: absolute;
  top: -277px;
  transform: scale(1.2);

  @media (max-aspect-ratio: 2/3) {
    top: -184px;
    transform: scale(0.8);
  }
`;

const Clutters = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-aspect-ratio: 7 / 8) {
    display: none;
  }

  @media screen and (max-height: 530px) and (orientation: landscape) {
    display: none;
  }
`;

const BigBoxContainer = styled.a`
  display: block;
  position: absolute;
  right: 214px;
  bottom: 65%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const PencilHolder = styled(PencilHolderComponent)`
  position: absolute;
  right: 90px;
  bottom: 90px;
  z-index: 20;

  @media (orientation: portrait) {
    right: 50px;
    bottom: 20px;
    transform: scale(4);
    transform-origin: 50% 100%;
  }
`;

const Notepad = styled(NotepadComponent)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const TableClutters = styled.div`
  position: absolute;
  bottom: 8%;
`;

const Outlet = styled(OutletComponent)`
  position: absolute;
  display: inline-block;
  transform: scale(1.8);
  top: -24%;
  left: calc(52% + 290px);

  @media (max-width: 1024px) {
    top: -20%;
    transform: scale(1) rotate(-90deg);
  }
`;

const Table = ({ children }) => (
  <TableContainer>
    <Clutters>
      <Tray />
      <Outlet />
      <BigBoxContainer
        href={Resume}
        sx={{ color: 'accent' }}
        target="_blank"
        rel="noreferrer"
      >
        <BigBox />
      </BigBoxContainer>
    </Clutters>
    <On>
      <TableClutters>
        <Notepad />
        <PencilHolder />
      </TableClutters>
      <ComputerContainer>
        <Computer>
          <PlantContainer>
            <Plant />
          </PlantContainer>
          <Monitor>{children}</Monitor>
        </Computer>
      </ComputerContainer>
      <Cup />
    </On>
  </TableContainer>
);

export default Table;

Table.propTypes = {
  children: PropTypes.element.isRequired,
};
