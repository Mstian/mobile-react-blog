import React from 'react';
import './style.less';
import { useParams } from 'react-router-dom';
import {formatDate} from 'Src/utils/tools';
import { getArticleById } from 'Src/apis';
function ArticleDetail() {
  const params: any = useParams();
  const [article, setArticle] = React.useState<any>({});
  React.useEffect(() => {
    getArticleById({ id: params.id }).then((res: any) => {
      // console.log(res);
      if (res.err === 0) {
        setArticle((prev: any) => {
          return {
            ...prev,
            ...res.data,
          };
        });
      }
    });
  }, [params]);
  return (
    <div className='view_article'>
      <div className='fixedimg'></div>
      <div className='content'>
        <div className='content_title'>{article.title}</div>
        <div className="content_tip">
            <span>作者：{article.author}</span>
            <span>日期：{formatDate(article.shareTime)}</span>
            <span>分类：{article.isLocal ? '本站原创' : ''}</span>
        </div>
        <div className='content_main' dangerouslySetInnerHTML={{
            __html:article.content
        }}></div>
      </div>
    </div>
  );
}

export default ArticleDetail;
