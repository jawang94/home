import React, { FC, useEffect } from "react";
import { Card } from "./Card";
import { CardData } from "./types";
import { BrowserRouter as Router, Route } from "react-router-dom";

const fetchRepositories = async () => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=user:${'jawang94'}&sort=stars&order=desc`,
    {
      headers: { accept: "application/vnd.github.v3+json" }
    }
  );

  if (response.status !== 200) return [];

  const json = await response.json();

  return json.items;
};


const List = ({ match, history }: any) => (
  <ul className="card-list" style={{ listStyle: 'none' }}>
    {cardData.map(card => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

export const CardList: FC = () => {
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetchRepositories();
      console.log(response);
    }
    fetchData();
  })
  
  return (
    <Router>
      <Route path={["/:id", "/"]} component={List} />
    </Router>
  )
}

const cardData: CardData[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: "c",
    category: "Hackathon",
    title: "TesseloScore | 1st Place at DefHacks 2019",
    pointOfInterest: 80,
    backgroundColor: "#814A0E"
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    category: "Hackathon",
    title: "FanScoop | 1st Place at SacHacks 2018",
    pointOfInterest: 120,
    backgroundColor: "#959684"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Project",
    title: "MunchWheel",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2"
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "g",
    category: "Project",
    title: "KnowledgePlanet",
    pointOfInterest: 200,
    backgroundColor: "#8F986D"
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: "d",
    category: "Project",
    title: "SpaceX Launch Calendar",
    pointOfInterest: 150,
    backgroundColor: "#FA6779"
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "h",
    category: "Project",
    title: "Blast Forum",
    pointOfInterest: 60,
    backgroundColor: "#282F49"
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: "e",
    category: "Misc",
    title: "Text Highlighter",
    pointOfInterest: 200,
    backgroundColor: "#AC7441"
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: "b",
    category: "Misc",
    title: "Minesweeper",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  }
];
