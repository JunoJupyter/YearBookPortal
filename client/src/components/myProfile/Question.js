import './Question.css'
import userData from '../../database/profile.json'
import ans_logo from '../../assets/myprofile/ans_logo.png'

function Question(){
    return(
        <div className='main_question'>        
            <div className='hello'>
                {userData.profile[0].questions.map(data=>{
                    return(
                        <div>
                            <div className='q_num'>
                                { data.ques }
                            </div>
                            <div className='ans'>
                                <img className='ans_logo' alt='ans' src={ans_logo} /><br></br>
                                {data.ans}
                            </div>
                        </div>
                    )
                }) }
            </div>     
        </div>
    )
}

export default Question