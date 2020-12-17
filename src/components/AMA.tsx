import { PageHeader, Tag } from 'antd';
import React, { FC } from 'react';

const AMAA: FC = () => {
  return (
    <PageHeader
      title="Ask Me (almost) Anything"
      className="site-page-header"
      // subTitle="Approved questions will appear below"
      tags={<Tag color="grey">In the works</Tag>}
      style={{ paddingTop: '24px' }}
    >
      Working on it. Please check back later :).
    </PageHeader>
  )
}

export default AMAA;