import { useState, useEffect } from 'react';

function Popup(){
    const[pop, setpop] = useState(1);
    const[mailId, setmailId] = useState('');
    const[phoneNum, setphoneNum] = useState('');
    const[userAddress, setuserAddress] = useState('');
    const[userbio, setuserbio] = useState('');

    useEffect(()=>{
        if(!pop){
            document.querySelector('.myprofilebody').style.filter="blur(0px)"
            document.querySelector('.boxpp').style.visibility = "hidden"
            setpop(1);
        }
    }, [pop])

    function submit_changes(){
        fetch('http://localhost:3000/myprofile', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                mail: mailId, 
                phone: phoneNum,
                address: userAddress,
                bio: userbio
            })
        })
    }

    return(
        <div className='boxpp'>
            <form>
            <div className="navpp">
                <div className='headpp'>Edit Profile</div>
                <button className='crosspp' type='button' onClick={()=>setpop(0)}>X</button>
            </div>
            <div className='picpp'>
                <div className='picHead'>Upload new profile pic:</div>
                <div className='picture'>
                    <input type="file" id="myFile" name="Choose file" />
                </div>
            </div>
            <div className='mailpp'>
                <div className='mailHead'>Personal Mail id: </div>
                <input className='mailInput' placeholder='enter your mail id' type="email" onChange={(event)=>setmailId(event.target.value)}></input>
            </div>
            <div className='phonepp'>
                <div className='phoneHead'>Phone Number: </div>
                <input className='phoneInput' placeholder='enter your phone number' onChange={(event)=>setphoneNum(event.target.value)}></input>
            </div>
            <div className='addresspp'>
                <div className='addressHead'>Address: </div>
                <input className='addressInput' placeholder='enter your address' onChange={(event)=>setuserAddress(event.target.value)}></input>
            </div>
            <div className='biopp'>
                <div className='bioHead'>Bio: </div>
                <textarea className='bioInput' placeholder='enter your bio' onChange={(event)=>setuserbio(event.target.value)}></textarea>
            </div>
            <button className="submitpp" type="submit" onClick={submit_changes}>
                <div className="save_changespp">
                    Save Changes
                </div>
            </button>
        </form>
        </div>
    )
}
export default Popup;