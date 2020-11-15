import React, { CSSProperties } from 'react';
import './style.css';
function Loading(){
    return (
        <div id="loading">
		<div id="loading-center">
			<div id="loading-center-absolute">
				<div className="object" id="object_four"></div>
				<div className="object" id="object_three"></div>
				<div className="object" id="object_two"></div>
				<div className="object" id="object_one"></div>
			</div>
		</div>
	</div>
    )
}
const loadingStyle: CSSProperties = {

}

export default Loading;