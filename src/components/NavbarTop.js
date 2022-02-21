import React from 'react'
import usaflag from '../images/usaflag.png'
import { FiUser } from 'react-icons/fi';
import { AiOutlineArrowDown } from 'react-icons/ai';

const NavbarTop = () => {

 return (
        <div className='flex justify-between border-b p-2'>
            <div className='flex items-center'>
                <img src={usaflag} width="15px" height="10.45px" />
                <h1 className='12px'>USA - EN</h1>
             <AiOutlineArrowDown />

             </div>
             <div className='flex items-center '>
                 <FiUser />
                 <h1>ACCOUNT</h1>
             </div>
          
             
</div>



       


    )
}

export default NavbarTop
