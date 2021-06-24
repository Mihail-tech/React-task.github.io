import React, { useEffect, useState } from 'react';



const ProfileStatus = (props) => {
    
    let [editMode, seteditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activatedEditMode = () => {
        seteditMode(true);
    };

    const deactivateEditMode = () => {
        seteditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return(
        <div>
            {!editMode && 
            <div>
                <span onClick={activatedEditMode} >{props.status || '--------' }</span>
            </div>
            }
            {editMode && 
            <div>
                <input  
                autoFocus={true} 
                onBlur={deactivateEditMode} 
                value={status}
                onChange={onStatusChange} />
             </div>
            }
        </div>
    )
}

export default ProfileStatus


        
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if(prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
