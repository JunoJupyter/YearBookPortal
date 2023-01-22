import userData from '../../database/profile.json'

function Friends_ques(){
    return(
        <div className='main_question'>        
            <div className='hello'>
                {userData.profile[0].questions.map((data, idx)=>{
                    return(
                        <div>
                            <div className='q_num'>
                                { data.ques }
                            </div>
                            <div className='ans'>
                                {data.ans}
                            </div>
                        </div>
                    )})
                }
            </div>     
        </div>
    )
}

export default Friends_ques