import React, { useState, useEffect } from 'react';
import './style.less';
import sorry from '../../assets/sorry.jpg';
import { Tabs,Button } from 'antd-mobile';
import { getStudys } from '../../apis';
function Study() {
  const [switchTab, setSwitchTab] = useState([]);
  useEffect(() => {
    getStudys().then((res: any) => {
      if (res.err === 0) {
        let temp = res.data;
        let tempTabs: any = [];
        temp.forEach((item: { categoryname: any, data: any }, index: any) => {
          tempTabs.push({
            title: item.categoryname,
            data: item.data
          });
        });
        setSwitchTab(tempTabs);
      }
    });
  }, []);
  function renderTabBar(props: any) {
    return <Tabs.DefaultTabBar {...props} page={4} />;
  }
  function renderContent(tab:any){
    const content = tab.data;
    return (
        <div className="content">
            {
                content.map((item:any, index:number) => {
                    return (
                        <Button onClick={() => {
                          window.location.href= item.link;
                        }} activeStyle={{backgroundColor: '#444'}} size="small" className="content-items" key={index}>{item.title}</Button>
                    )
                })
            }
            <div className="sorry">
              <div className="sorry-text">我得忏悔，我向看到此网站的每一位道歉，太丑了这，辣眼，我自己都看不下去。。。。。</div>
              <div className="sorry-img"><img src={sorry} alt=""/></div>
            </div>
        </div>
    )
  }
  return (
    <>
      <div className='study' style={{
        minHeight: document.documentElement.clientHeight + 'px'
      }}>
        <Tabs
          tabBarTextStyle={{ color: '#666' }}
          tabBarActiveTextColor='#000'
          tabBarUnderlineStyle={{ borderColor: 'red' }}
          tabs={switchTab}
          renderTabBar={renderTabBar}
        >
          {renderContent}
        </Tabs>
      </div>
    </>
  );
}
export default Study;
