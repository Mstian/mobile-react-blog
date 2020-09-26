import './style.less';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Carousel, List } from 'antd-mobile';
import {getArticleList} from 'Src/apis/index';
import {formatDate} from "Src/utils/tools";
const Item = List.Item;
const Brief = Item.Brief;
import { ValueContext } from './drawer';
function Home() {
  const values: any = React.useContext(ValueContext);
  const history = useHistory();
  let banners = [
    {img:'https://img.zcool.cn/community/01292f5f6d47b111013e4584a3cab3.jpg@1280w_1l_2o_100sh.jpg'},
    {img:'https://img.zcool.cn/community/01a3515f6d47b711013f311057f558.jpg@1280w_1l_2o_100sh.jpg'},
    {img:'https://img.zcool.cn/community/016bab5f6d47b811013f3110a666c0.jpg@1280w_1l_2o_100sh.jpg'},
    {img:'https://img.zcool.cn/community/01336b5f6d47b811013e4584e85343.jpg@1280w_1l_2o_100sh.jpg'},
    {img:'https://img.zcool.cn/community/01cd185f6d47b811013f3110da2d30.jpg@1280w_1l_2o_100sh.jpg'}
  ];
  const [slideIndex, setSlideIndex] = React.useState(0);
  let [pageIndex, setPageIndex] = React.useState(1);
  const [articleList, setArticleList] = React.useState([]);
  const toApp = () => {
    const id = 'lucy';
    history.push({ pathname: '/app/' + id });
    // props.history.push({pathname:'/app', query:{name:name}})
    // props.history.push({pathname: '/app', state:{name:name}})
  };
  const pageSize = 5;
  useEffect(() => {
    console.log(pageIndex);
    getArticleList({pageIndex, pageSize})
    .then((data:any)=>{
      if (data.err === 0) {
        setArticleList(articleList.concat(data.info.data));
      }
    });
  },[pageIndex]);
  return (
    <div className='home'>
      <div className='home_topbg'>
        <div className='home_menu'>
          <i
            className='iconfont icon-caidanlan'
            onClick={() => {
              values.setOpen(!values.open);
            }}
          ></i>
        </div>
        <div className='home_search'>
          <input type='home_text' />
          <button className='home_searchbtn' onClick={toApp}>
            搜索
          </button>
        </div>
      </div>
      <div className='home_carousel'>
        <Carousel
          frameOverflow='visible'
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          autoplayInterval={5000}
          infinite
          dotStyle={{ backgroundColor: '#ccc' }}
          dotActiveStyle={{ backgroundColor: '#666' }}
          afterChange={(index) => setSlideIndex(index)}
        >
          {banners.map((item, index) => (
            <div
              key={item.img}
              className='imgs'
              style={{
                position: 'relative',
                top: slideIndex === index ? -10 : 0,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}  
            >
              <img src={item.img} alt=""/>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='home_articlelist'>
        {
          articleList.map((item:any, index:number)=>{
            return(
              <Item
                key={item._id}
                arrow='horizontal'
                multipleLine
                onClick={() => {
                  if(!item.isLocal){
                    window.location.href = item.link;
                  }
                }}
                platform='android'
              >
                <span className="title">{item.title}</span>
                <Brief>
                <div className="articlemention">
                  {item.isLocal ? (<span>作者：{item.author}</span>) :<span>分享者：{item.shareUser}</span> } 
                  {<span> 日期：{formatDate(item.shareTime)}</span>}
                  {item.isLocal ? <span className="local">本站原创</span> : ''}
                </div>
                </Brief>
              </Item>
            )
          })
        }
        <Item
          multipleLine
          onClick={() => {
            setPageIndex((prev) => {
              return ++prev;
            });
          }}
          platform='android'
        >
          <div className="loadMore">
        <span>加载更多</span><i className="iconfont icon-tongyong_jiantouxiangxia"></i>
          </div>
        </Item>
      </div>
    </div>
  );
}
export default Home;
