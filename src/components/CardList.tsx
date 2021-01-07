import React, { FC } from 'react';
import { Card as AntCard } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from './Card';
import { CardData } from './types';

// const fetchRepositories = async () => {
//   const response = await fetch(
//     `https://api.github.com/search/repositories?q=user:${'jawang94'}&sort=stars&order=desc`,
//     {
//       headers: { accept: "application/vnd.github.v3+json" }
//     }
//   );

//   if (response.status !== 200) return [];

//   const json = await response.json();

//   return json.items;
// };

const cardData: CardData[] = [
  // Photo by Ivan Torres on Unsplash
  {
    id: 'a',
    category: 'Hackathon',
    title: 'TesseloScore | 1st Place at DefHacks 2019',
    pointOfInterest: 80,
    backgroundColor: '#814A0E',
    link: 'https://devpost.com/software/tesselloscore',
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: 'b',
    category: 'Company',
    title: 'Guidelyte',
    pointOfInterest: 120,
    backgroundColor: '#959684',
    link: 'https://www.linkedin.com/company/guidelyte',
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: 'c',
    category: 'Project',
    title: 'MunchWheel',
    pointOfInterest: 260,
    backgroundColor: '#5DBCD2',
    link: 'https://github.com/jawang94/munchwheel',
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: 'd',
    category: 'Hackathon',
    title: 'FanScoop | 1st Place at SacHacks 2018',
    pointOfInterest: 200,
    backgroundColor: '#8F986D',
    link: 'https://github.com/jawang94/fanscoop',
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: 'e',
    category: 'Project',
    title: 'SpaceX Launch Calendar',
    pointOfInterest: 150,
    backgroundColor: '#FA6779',
    link: 'https://github.com/jawang94/spacex-launch',
  },
  // Photo by Siora Photography on Unsplash
  {
    id: 'f',
    category: 'Project',
    title: 'Blast',
    pointOfInterest: 60,
    backgroundColor: '#282F49',
    link: 'https://github.com/jawang94/blast',
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: 'g',
    category: 'Misc',
    title: 'Text Highlighter',
    pointOfInterest: 200,
    backgroundColor: '#AC7441',
    link: 'https://github.com/jawang94/text-highlighter',
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: 'h',
    category: 'Misc',
    title: 'Algorithms in JS',
    pointOfInterest: 260,
    backgroundColor: '#CC555B',
    link: 'https://github.com/jawang94/leetcode_js',
  },
];

const List = ({ match, history }: any) => (
  <ul className="card-list" style={{ listStyle: 'none' }}>
    {cardData.map((card) => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

const CardList: FC = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await fetchRepositories();
  //     console.log(response);
  //   }
  //   fetchData();
  // })

  return (
    <AntCard>
      <Router>
        <Route path={['/projects/:id/', '/projects/']} component={List} />
      </Router>
    </AntCard>
  );
};

export default CardList;
