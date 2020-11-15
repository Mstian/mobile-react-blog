import React,{useEffect} from 'react';
import { Drawer, List, Modal, Toast } from 'antd-mobile';
import './style.less';
export const ValueContext = React.createContext({});
import {useHistory} from 'react-router-dom';
import Home from './index';
const Item = List.Item;
const alert = Modal.alert;
// let location_lon:any = '';
// let location_lat:any = '';
let locationCityInfo:any = localStorage.getItem("cityInfo");
function DrawerMenu(props:any) {
  useEffect(() => {
    if(locationCityInfo) {
      locationCityInfo = JSON.parse(locationCityInfo);
      // alert(`您当前位于${locationCityInfo.cname}`,"");
    };
  },[]) 
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const sidebar = (
    <div className='drawer_content'>
      <div className='home_menu'>
        <i
          style={{ color: '#666' }}
          className='iconfont icon-caidanlan'
          onClick={() => {
            setOpen(!open);
          }}
        ></i>
      </div>
      <div className='avatar'>
        <div className='img'>
          <img
            src='https://himg.bdimg.com/sys/portrait/item/c3d34d6973746572d0a1c0d7ec8b'
            alt=''
          />
        </div>
        {
          props.userInfo.us 
          ? (<div className='user_name'><span>Hi</span> <span>{props.userInfo.us}</span></div>) 
          : (<div className='to_login'><span>Hi</span> <span onClick={toLogin}>请登录</span></div>)
        }
      </div>
      <div className='person_menu_list'>
        <Item platform="android">
          <div onClick={() => {
            history.push({pathname: '/study'})
          }}>
            <i className='iconfont icon-xuexi-'></i> <span>学习</span>
          </div>
        </Item>
        <Item>
          <div onClick={() => {
            history.push({pathname: '/tools'})
          }}>
            <i className='iconfont icon-gongjuxiang'></i> <span>工具</span>
          </div>
        </Item>
        <Item>
          <div onClick={() => {toUserCenter()}}>
            <i className='iconfont icon-huaban36'></i> <span>个人中心</span>
          </div>
        </Item>
        <Item>
          <div onClick={() => {toComment()}}>
            <i className='iconfont icon-liuyan'></i> <span>留言</span>
          </div>
        </Item>
        
        <Item>
          <div onClick={() => {toAbout()}}>
            <i className='iconfont icon-guanyuwomen'></i> <span>关于</span>
          </div>
        </Item>
      </div>
      <div className="bottom_tip">
          <div className="tips">
            <span className='temperature'>23°</span>
            <span className='region'>{locationCityInfo.cname || "未知"}</span>
          </div>
          <div className="copy">
          ©2020 · tianleilei.cn · All Rights Reserved. 京ICP备20009765
          </div>
          {
            props.userInfo.us ? (<div onClick={() => {toLogout()}} className="logout">
            退出
          </div>) : ''
          }
      </div>
    </div>
  );
  function toLogin(){
    history.push({pathname:'/login'})
  }
  function toLogout() {
    alert('提示', '确定退出吗？？', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: () => props.logout() }
    ])
  }
  function onOpenChange() {
    setOpen(!open);
  }

  function toUserCenter() {
      if (!(props.userInfo.us)) {
        Toast.fail('请先登录', 0.8, () => {
          history.push({
            pathname: '/login'
          })
        });
      } else {
        // 进入个人中心
        history.push({
          pathname: '/user'
        })
      }
  }
  function toComment() {
      // 进入留言模块
      history.push({
        pathname: '/comment'
      })
  }
  function toAbout() {
    history.push({
      pathname: '/about'
    })
  }
  return (
    <div>
      <Drawer
        className='my-drawer'
        style={{ height: document.documentElement.clientHeight + 'px', overflow: 'hidden' }}
        sidebar={sidebar}
        open={open}
        onOpenChange={onOpenChange}
      >
        <ValueContext.Provider value={{ open, setOpen }}>
          <Home></Home>
        </ValueContext.Provider>
      </Drawer>
    </div>
  );
}

export default DrawerMenu;
