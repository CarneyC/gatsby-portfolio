/** @jsx jsx */
import Cafe from '../components/Cafe';
import Laboratory from '../components/Laboratory';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

const Main = styled.main`
  max-width: 1920px;
  margin: auto;
  overflow-x: hidden;
  overflow-y: auto;
`;

const IndexPage = () => (
  <Layout>
    <Main>
      <Cafe />
      <Laboratory />
    </Main>
  </Layout>
);

export default IndexPage;
