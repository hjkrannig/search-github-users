import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
import { calculateLanguageChartData, calculateReposeChartDate }
  from '../utils.js/calculateCharts';

const Repos = () => {
  const { repos } = useContext(GithubContext)
  const { mostUsed, mostPopular } = calculateLanguageChartData(repos)
  const { stars, forks } = calculateReposeChartDate(repos)
  return <section className='section'>
    <Wrapper className='section-center'>
      {/* <ExampleChart data={chartData} /> */}
      <Pie3D data={mostUsed} />
      <Column3D data={stars} />
      <Doughnut2D data={mostPopular} />
      <Bar3D data={forks} />
    </Wrapper>
  </section>
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
