import React, {useState, useEffect} from 'react';
import topbanner from '../../assets/mini.jpg';
import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import {formatDate} from "Src/utils/tools";
import {useHistory} from 'react-router-dom';
import './style.less';
import {search} from 'Src/apis'
import sorry from '../../assets/sorry.jpg';

function SearchPage(props: any){
    const history = useHistory();
    let homeKey = props.match.params.key || "";
    const [key, setKey] = useState('');
    const [articleList, setArticleList] = useState<any>([]);
    useEffect(() => {
        setKey(homeKey)
        searchList({kw: homeKey})
    },[]);

    const searchList = (data:any) => {
        search(data).then((res:any) => {
            if (res.err === 0) {
                setArticleList(res.data);
            }
        })
    }

    const handleChnage = (e:any) => {
        e.persist();
        setKey(e.target.value)
    }

    const toSearch = () => {
        searchList({kw: key})
    }

    return (
        <div className="search">
            <div className="topicon">
                <img src={topbanner} alt=""/>
            </div>
            <div className="controlbar">
                <input placeholder="请输入关键字进行搜索" value={key} onChange={(e) => {handleChnage(e)}} type="text"/>
                <button onClick={()=> {toSearch()}}>搜索</button>
            </div>
            <div className="searchList">
            {
            articleList.length  > 0 
            ? articleList.map((item:any, index:number)=>{
                    return(
                    <Item
                        key={item._id}
                        arrow='horizontal'
                        multipleLine
                        onClick={() => {
                        if(!item.isLocal){
                            window.location.href = item.link;
                        } else {
                            history.push({ pathname: '/article/' + item._id });
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
            :   <div className="noData">
                    <span>暂无该关键字下的信息哦，换个关键字试试吧！</span>
                    <img src={sorry} alt=""/>
                </div>
            }
            </div>
        </div>
    )
}

export default SearchPage;