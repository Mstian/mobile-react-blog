import React, { useEffect, useState } from 'react';
import './style.less';
import { Button, TextareaItem, Toast } from 'antd-mobile';
import topbanner from '../../assets/mini.jpg';
import {useHistory} from 'react-router-dom';
import { userComment, leavingMessage } from '../../apis';
import { formatDate } from 'Src/utils/tools';
function Comment(props: any) {
  const history = useHistory();
  const [commonList, setCommonList] = useState<any>([]);
  const [leavingTxt, setLeavingTxt] = useState('');
  useEffect(() => {
    getCommonList();
  }, []);

  function getCommonList() {
    userComment().then((data: any) => {
      if (data.err === 0) {
        setCommonList(data.data);
      }
    });
  }

  function CommentList() {
    return (
      <>
        {commonList.map((item: any, index: number) => {
          return (
            <div className='comment-item' key={item._id + index}>
              <span className='name'>{item.commentator}：</span>
              <span className='content'>{item.content}</span>
              <span className='date'>{formatDate(item.commentTime)}</span>
            </div>
          );
        })}
      </>
    );
  }

  function setleavingMessage() {
    if (!(props.userInfo.us)) {
      Toast.fail('请先登录', 0.8, () => {
        history.push({
          pathname: '/login'
        })
      });
      return;
    }

    if (!leavingTxt) {
      Toast.fail('请输入留言内容');
      return;
    }
    let data = {
      uid: props.userInfo.uid,
      content: leavingTxt,
      commentator: props.userInfo.us,
    };
    leavingMessage(data).then((data: any) => {
      if (data.err === 0) {
        Toast.success(data.msg);
        setTimeout(() => {
          setLeavingTxt('');
          getCommonList();
        }, 500);
      } else {
        Toast.fail(data.msg);
      }
    });
  }
  const handleChange = (target: any) => {
    setLeavingTxt(target);
  };
  return (
    <>
      <div className='comment'>
        <div className='topicon'>
          <img src={topbanner} alt='' />
        </div>
        <div className='comment-oprater'>
          <TextareaItem
            title='留言内容'
            rows={3}
            placeholder='快来留下你的足迹吧'
            data-seed='logId'
            autoHeight
            value={leavingTxt}
            onChange={handleChange}
          />
          <Button
            className='leave-msg'
            onClick={() => {
              setleavingMessage();
            }}
            type='primary'
          >
            留言
          </Button>
        </div>
        <div className='conment-list'>
          <CommentList></CommentList>
        </div>
      </div>
    </>
  );
}

export default Comment;
