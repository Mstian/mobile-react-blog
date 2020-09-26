import React from 'react';
import { Drawer, List } from 'antd-mobile';
import './style.less';
export const ValueContext = React.createContext({});
import Home from './index';
const Item = List.Item;
function DrawerMenu() {
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
        <div className='user_name'>
          <span>Hi</span> <span>雷雷</span>
        </div>
      </div>
      <div className='person_menu_list'>
        <Item platform="android">
          <div>
            <i className='iconfont icon-xuexi-'></i> <span>学习</span>
          </div>
        </Item>
        <Item>
          <div>
            <i className='iconfont icon-gongjuxiang'></i> <span>工具</span>
          </div>
        </Item>
        <Item>
          <div>
            <i className='iconfont icon-huaban36'></i> <span>个人中心</span>
          </div>
        </Item>
        <Item>
          <div>
            <i className='iconfont icon-guanyuwomen'></i> <span>关于</span>
          </div>
        </Item>
      </div>
      <div className="bottom_tip">
          <div className="tips">
            <span className='temperature'>23°</span>
            <span className='region'>北京</span>
          </div>
          <div className="copy">
          ©2020 · tianleilei.cn · All Rights Reserved. 京ICP备20009765
          </div>
      </div>
    </div>
  );
  function onOpenChange() {
    setOpen(!open);
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
        {/* <A></A> */}
        <ValueContext.Provider value={{ open, setOpen }}>
          <Home></Home>
        </ValueContext.Provider>
      </Drawer>
    </div>
  );
}

export default DrawerMenu;
