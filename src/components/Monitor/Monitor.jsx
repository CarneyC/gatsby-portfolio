/** @jsx jsx */
import Macintosh from './Macintosh';
import Scanline from './Scanline';
import Screen from './Screen';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const Monitor = ({ children }) => (
  <div
    sx={{
      padding: 4,
    }}
  >
    <Macintosh>
      <Screen>
        <Scanline />
        {children}
      </Screen>
    </Macintosh>
  </div>
);

export default Monitor;

Monitor.propTypes = {
  children: PropTypes.element.isRequired,
};
