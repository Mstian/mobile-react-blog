import React, { useState, useEffect } from 'react';
import {Button, Toast} from 'antd-mobile';

import './style.less';
import {useHistory} from 'react-router-dom';

function Login(props:any) {
    const history = useHistory();
    const [regConfig, setRegConfig] = useState({us: '',ps: '',rps: ''});
    const [logConfig, setLogConfig] = useState({us: '', ps: ''});
    const regUsChange = (e:any) => {
        e.persist();
        setRegConfig((prev) => {
            return {
                ...prev,
                us: e.target.value
            }
        })
    }

    const regPsChange = (e:any) => {
        e.persist();
        setRegConfig((prev) => {
            return {
                ...prev,
                ps: e.target.value
            }
        })
    }

    const regRpsChange = (e:any) => {
        e.persist();
        setRegConfig((prev) => {
            return {
                ...prev,
                rps: e.target.value
            }
        })
    }
    const handleRegister = () => {
        // console.log(regConfig);
    }

    const loginUsChange = (e:any) => {
        e.persist();
        setLogConfig((prev) => {
            return {
                ...prev,
                us: e.target.value
            }
        })
    }

    const loginPsChange = (e:any) => {
        e.persist();
        setLogConfig((prev) => {
            return {
                ...prev,
                ps: e.target.value
            }
        })
    }

    const handleLogin = () => {
        if (!logConfig.us || !logConfig.ps) {
            Toast.fail("请输入用户名或密码", 2);
            return;
        }
        props.login(logConfig)
        .then(() => {
            history.push({pathname: '/'});
        });
    }

    useEffect(() => {
        // console.log(123);
    }, [])
    return (
        <>
            <div className="login" style={{ height: document.documentElement.clientHeight + 'px', overflow: 'hidden' }}>
                <div className="circle">
                    <div onClick={() => {handleTransferIn()}} className="inhooks">
                        注册
                    </div>
                    <div style={{opacity:'0'}} className="regwrap">
                        <div className="regname">
                            <input placeholder="用户名" value={regConfig.us} onChange={(e) => {regUsChange(e)}} type="text"/>
                        </div>

                        <div className="regpass">
                            <input placeholder="密码" value={regConfig.ps} onChange={(e) => {regPsChange(e)}} type="password"/>
                        </div>

                        <div className="regrepass">
                            <input placeholder="确认密码" value={regConfig.rps} onChange = {(e) => {regRpsChange(e)}} type="password"/>
                        </div>
                        <Button className="reg-btn" onClick={() => {handleRegister()}}>注册</Button>
                    </div>
                    
                </div>

                <div className="main">
                    <div style={{display: 'none'}} onClick={() => {handleTransferOut()}} className="outhooks">
                        登录
                    </div>
                    <div className="loginwrap">
                        <div className="userName">
                            <input placeholder="用户名" value={logConfig.us} onChange={(e) => {loginUsChange(e)}} type="text"/>
                        </div>
                        <div className="passWord">
                            <input placeholder="密码" value={logConfig.ps} onChange={(e) => {loginPsChange(e)}} type="password"/>
                        </div>
                        <Button className="login-btn" onClick={() => {handleLogin()}}>登录</Button>
                    </div>
                </div>
                
            </div>
        </>
    )
}
function handleTransferIn(){
    let dom:any = document.querySelector('.circle');
    dom.classList.add('circleMoveInClass');
    let main:any = document.querySelector('.main');
    main.classList.add('mainMoveOutClass')

    let outhooks:any = document.querySelector('.outhooks');
    outhooks.style.display = 'block';
    let inhooks:any = document.querySelector('.inhooks');
    inhooks.style.display = 'none';

    let regwrap:any = document.querySelector('.regwrap');
    regwrap.style.opacity = '1';
    regwrap.style.transition = '.3s';

    let loginwrap: any = document.querySelector('.loginwrap');
    loginwrap.style.display = 'none';
}
function handleTransferOut(){
    let dom:any = document.querySelector('.circle');
    dom.classList.remove('circleMoveInClass');
    let main:any = document.querySelector('.main');
    main.classList.remove('mainMoveOutClass');

    let outhooks:any = document.querySelector('.outhooks');
    outhooks.style.display = 'none';
    let inhooks:any = document.querySelector('.inhooks');
    inhooks.style.display = 'block';

    let regwrap:any = document.querySelector('.regwrap');
    regwrap.style.opacity = '0';
    regwrap.style.transition = '.3s';

    let loginwrap: any = document.querySelector('.loginwrap');
    loginwrap.style.display = 'block';
}
export default Login;
