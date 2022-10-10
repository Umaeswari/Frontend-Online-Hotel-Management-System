import React from 'react';

import "./Buttons.css";

function Buttons() {

    return (
        <div className='SuryaRekhapalli'>

            <div className='backgroundImg43'>

                <div className="container">
                    <div><a href="/"><button className='button2'>Back</button></a> </div>


                    <div className="center">
                        <div><a href="/ownerlogin"><button className='button1'>Owner Login</button></a>
                            <a href="/ownerregister"><button className='button4'>Owner Register</button></a></div><br />

                        <div><a href="/Managerlogin"><button className='button2'>Manager Login</button></a>
                            <a href="/managerregister"><button className='button5'>Manager Register</button></a></div><br />

                        <div><a href="/Receptionistlogin"><button className='button3'>Receptionist Login</button></a>
                            <a href="/Receptionistregister"><button className='button6'>Receptionist Register</button></a></div><br />
                    </div>

                </div>
            </div>
            <img src='https://i.gifer.com/5jPW.gif' height='599px' width='100%' />
        </div>
    );

}

export default Buttons;

