import React from 'react';
import { List, Tag } from 'antd';
import { BankOutlined, EditOutlined, BookOutlined } from '@ant-design/icons';
import ChapterCard from '../ChapterCard';
import ArchiveListContent from '../ArchiveListContent';
import { Archive } from '../../data';
import styles from './index.less';

export interface ArchiveChapterProps {
  chapter: string;
  archives: Archive[];
}

const renderOrig = (item: Archive) => {
  if (!item.origs || item.origs.length === 0) {
    return null;
  }
  return item.origs.map((orig) => (
    <a
      className={styles.listItemMetaTitle}
      href={`/public/archives/origs/${orig}`}
      rel="noreferrer"
      target="_blank"
    >
      <BookOutlined />
    </a>
  ));
};

const renderArchive = (item: Archive) => (
  <List.Item
    key={item.id}
    actions={[
      <h4 key="edit">
        <EditOutlined style={{ marginRight: 4 }} />
        {item.author.map((a) => ` ${a}`)}
      </h4>,
      <div>
        <BankOutlined style={{ marginRight: 8 }} />
        {item.publisher}
      </div>,
    ]}
  >
    <List.Item.Meta
      title={
        <>
          <span>{item.title}</span>
          {renderOrig(item)}
        </>
      }
      description={
        <span>
          {item.tag.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </span>
      }
    />
    <ArchiveListContent archive={item} />
  </List.Item>
);

const ArchiveChapter: React.FC<ArchiveChapterProps> = ({ chapter, archives }) => (
  <ChapterCard title={<h2>{chapter}</h2>} defaultActive>
    <List<Archive>
      className={styles.list}
      size="large"
      rowKey="id"
      itemLayout="vertical"
      locale={{ emptyText: '前不见古人' }}
      split
      grid={{ gutter: 0, column: 2, sm: 1, xs: 1 }}
      dataSource={archives}
      renderItem={renderArchive}
    />
  </ChapterCard>
);

export default ArchiveChapter;
