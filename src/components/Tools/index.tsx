import React from 'react';
import './style.less';
import {getTools} from 'Src/apis/index';
function Tools(){
    const [tools, setTools] = React.useState([]);
    React.useEffect(() => {
        getTools().then((res:any)=>{
            if(res.err === 0){
                setTools((prev:any):any => {
                    return [...prev, ...res.data];
                })
            }
        })
    },[]);
    return (
        <div className="tools">
            <div className="toolwrap">
                {
                    tools.map((item:any, index) => (
                        <div onClick={()=>{window.location.href=item.link}} className="tool_item" key={item._id}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tools;