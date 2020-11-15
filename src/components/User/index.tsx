import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd-mobile';
import './style.less';
import { List } from 'antd-mobile';
import { formatDate } from 'Src/utils/tools';
import { useHistory } from 'react-router-dom';
import { userPublishList, userShare, userDraft } from '../../apis/index';
const Item = List.Item;
const Brief = Item.Brief;
function User(props: any) {
  const history = useHistory();
  const [publishList, setPublishList] = useState<any>([]);
  const [shareList, setShareList] = useState<any>([]);
  const [draftList, setDraftList] = useState<any>([]);

  const tabs = [
    { title: '我的创建', sub: '1' },
    { title: '我的分享', sub: '2' },
    { title: '草稿箱', sub: '3' },
  ];
  let userInfo = props.userInfo;
  useEffect(() => {
    userPublishList(userInfo).then((data: any) => {
      if (data.err === 0) {
        setPublishList(data.data);
      }
    });
    userShare(userInfo).then((data: any) => {
      if (data.err === 0) {
        setShareList(data.data);
      }
    });
    userDraft(userInfo).then((data: any) => {
      if (data.err === 0) {
        setDraftList(data.data);
      }
    });
  }, []);

  return (
    <>
      <div className='user'>
        <Tabs
          tabBarTextStyle={{ color: '#666' }}
          tabBarActiveTextColor='#000'
          tabBarUnderlineStyle={{ borderColor: 'red' }}
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {
          }}
        >
          <div>
            {publishList.length > 0 ? (
              publishList.map((item: any, index: number) => {
                return (
                  <Item
                    key={item._id}
                    arrow='horizontal'
                    multipleLine
                    onClick={() => {
                      if (!item.isLocal) {
                        window.location.href = item.link;
                      } else {
                        history.push({ pathname: '/article/' + item._id });
                      }
                    }}
                    platform='android'
                  >
                    <span className='title'>{item.title}</span>
                    <Brief>
                      <div className='articlemention'>
                        {item.isLocal ? (
                          <span>作者：{item.author}</span>
                        ) : (
                          <span>分享者：{item.shareUser}</span>
                        )}
                        {<span> 日期：{formatDate(item.shareTime)}</span>}
                        {item.isLocal ? (
                          <span className='local'>本站原创</span>
                        ) : (
                          ''
                        )}
                      </div>
                    </Brief>
                  </Item>
                );
              })
            ) : (
              <div className='noData'>
                <span>暂时没有数据哦</span>
              </div>
            )}
          </div>
          <div>
            {shareList.length > 0 ? (
              shareList.map((item: any, index: number) => {
                return (
                  <Item
                    key={item._id}
                    arrow='horizontal'
                    multipleLine
                    onClick={() => {
                      if (!item.isLocal) {
                        window.location.href = item.link;
                      } else {
                        history.push({ pathname: '/article/' + item._id });
                      }
                    }}
                    platform='android'
                  >
                    <span className='title'>{item.title}</span>
                    <Brief>
                      <div className='articlemention'>
                        {item.isLocal ? (
                          <span>作者：{item.author}</span>
                        ) : (
                          <span>分享者：{item.shareUser}</span>
                        )}
                        {<span> 日期：{formatDate(item.shareTime)}</span>}
                        {item.isLocal ? (
                          <span className='local'>本站原创</span>
                        ) : (
                          ''
                        )}
                      </div>
                    </Brief>
                  </Item>
                );
              })
            ) : (
              <div className='noData'>
                <span>暂时没有数据哦</span>
              </div>
            )}
          </div>
          <div>
            {draftList.length > 0 ? (
              draftList.map((item: any, index: number) => {
                return (
                  <Item
                    key={item._id}
                    arrow='horizontal'
                    multipleLine
                    onClick={() => {
                      if (!item.isLocal) {
                        window.location.href = item.link;
                      } else {
                        history.push({ pathname: '/article/' + item._id });
                      }
                    }}
                    platform='android'
                  >
                    <span className='title'>{item.title}</span>
                    <Brief>
                      <div className='articlemention'>
                        {item.isLocal ? (
                          <span>作者：{item.author}</span>
                        ) : (
                          <span>分享者：{item.shareUser}</span>
                        )}
                        {<span> 日期：{formatDate(item.shareTime)}</span>}
                        {item.isLocal ? (
                          <span className='local'>本站原创</span>
                        ) : (
                          ''
                        )}
                      </div>
                    </Brief>
                  </Item>
                );
              })
            ) : (
              <div className='noData'>
                <span>暂时没有数据哦</span>
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </>
  );
}

export default User;
