export interface ArticleDataShape {
  topImage: string;
  topSubHeading: string;
  leftAnchor: string;
  leftImage: string;
  rightAnchor: string;
  rightHeaderText: string;
  rightBodyText: string;
}

const articleData = {
  guidelyte: {
    topImage: 'https://user-images.githubusercontent.com/41667764/103190801-5e9c0480-4887-11eb-8e99-33b41df2aa77.png',
    topSubHeading: 'Guidelyte has been disabled & the team is pivoting product directions. Stay tuned!',
    leftAnchor: 'https://www.linkedin.com/company/guidelyte',
    leftImage:'https://user-images.githubusercontent.com/41667764/103190879-a327a000-4887-11eb-9869-2d4066782151.png',
    rightAnchor: 'https://github.com/guidelyte',
    rightHeaderText: 'Guidelyte',
    rightBodyText: 'Guidelyte is a community-driven single source of truth for your job search. We aggregate information scattered across the internet and empower you with the tools to manage all the data you need in one place.'
  },
  sachacks: {
    topImage: 'https://user-images.githubusercontent.com/12979345/48827356-e4047080-ed21-11e8-8f67-988df32ee918.png',
    topSubHeading: '1st Place at SacHacks 2018 for Best Use of Here.com API',
    leftAnchor: 'https://sachacks.io',
    leftImage:'https://sachacks.io/2018/images/rocket-color.png',
    rightAnchor: 'https://github.com/jawang94/fanscoop',
    rightHeaderText: 'FanScoop',
    rightBodyText: 'FanScoop is a car-sharing app that enables Sacramento Kings fans to coordinate carpools to games. The biggest headaches when going to games are traffic, parking, and looking people to go with. By rewarding drivers with parking and arena promotions, FanScoop enables the Kings app to solve all of these problems. It encourages users to connect and stay in touch, building communities of fans who will continue going to games together.'
  },
  defhacks: {
    topImage: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/798/130/datas/original.png',
    topSubHeading: '1st Place at DefHacks 2018 Overall for Disrupt Credit Rating Industry',
    leftAnchor: 'https://defhacks.co',
    leftImage:'https://defhacks.co/images/defhacks-logos/defhacks-logo-black-green.png',
    rightAnchor: 'https://devpost.com/software/tesselloscore',
    rightHeaderText: 'TesseloScore',
    rightBodyText: 'TesseloScore is a universal, transparent, and distributed credit score system. We reinvented the credit score from first principles, defining it as a measure of creditworthiness, then brainstorming indicators of creditworthiness from both intuition, and academic journals on economic behavior.'
  },
  munchwheel: {
    topImage: 'https://raw.githubusercontent.com/jawang94/munchwheel/master/img/Screen%20Shot%202018-12-21%20at%2011.29.54%20PM.png',
    topSubHeading: "Don't spend longer deciding where to eat than actually eating.",
    leftAnchor: 'https://github.com/jawang94/munchwheel',
    leftImage:'https://www.sferalabs.cc/wp-content/uploads/github-logo.png',
    rightAnchor: 'https://github.com/jawang94/munchwheel',
    rightHeaderText: 'MunchWheel',
    rightBodyText: 'MunchWheel is a Yelp & Google Maps integrated food decision application. An fast and enjoyable way to decide where to eat. Anywhere, anytime, at any budget.'
  },
  blast: {
    topImage: 'https://raw.githubusercontent.com/jawang94/BLAST/master/img/Screen%20Shot%202018-12-21%20at%2011.23.24%20PM.png',
    topSubHeading: "If Reddit and Discord made software love, you know.",
    leftAnchor: 'https://github.com/jawang94/blast',
    leftImage:'https://raw.githubusercontent.com/jawang94/blast/master/public/src/assets/images/bazookathing02.png',
    rightAnchor: 'https://github.com/jawang94/blast',
    rightHeaderText: 'Blast',
    rightBodyText: 'Blast is a social news and media discussion forum implementing Socket.IO chat rooms. This idea seemed great at the time since reddit did not yet have live chat rooms. I guess they do now.'
  }
}

export default articleData