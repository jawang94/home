import { PageHeader} from 'antd';
import React, { FC } from 'react';


const AMAA: FC = () => {
  return (
    <PageHeader
      title="Ask Me (almost) Anything"
      className="site-page-header"
      subTitle="Approved questions will appear below!"
      // tags={<Tag color="green">Seeking Opportunities</Tag>}
    >
    </PageHeader>
  )
}

export default AMAA;