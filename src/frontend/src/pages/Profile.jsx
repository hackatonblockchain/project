import React from 'react'
import hasb from '../assets/images/hasbulla.png';
import { Image, Divider} from 'antd';
import '../App.css'
import MyCard from '../components/MyCard';
const Profile = () => {
    return (
        <div className='profilePage'>
            <div className='container'>
                <div>
                    <div className='profile'>
                        <Image
                            width={150}
                            height={150}
                            src={hasb}
                            preview={false}
                        />
                        <div className='profileText'>
                            <span className='nickname'>ASSeke_it</span> <button className='buttonEdit'>Edit profile</button><br />
                            <span className='date'>Joined 17th November 2022</span>
                        </div>

                    </div>
                </div>
                <div className='properties'>
                Properties
                <Divider />
                <MyCard />
                <MyCard />
                <MyCard />
                </div>
                
            </div>
        </div>
    )
}

export default Profile