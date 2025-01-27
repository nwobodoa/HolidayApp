import React, { useState } from 'react';
import Member from "./Member";


const MemberContainer = () => {
    const [member, setMember] = useState([
        {
            url: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
            name: "Shinya Aoi",
            position: "jr. Software Engineer",
            intro: "I'm a Junior Software Engineer with a passion for turning ideas into functional code. My background in Computer Science has equipped me with solid problem-solving skills. From solo coding to team projects, I love crafting software that makes a difference. Excited to learn and contribute in this dynamic field!"
        },
        {
            url: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
            name: "Rafael Caca",
            position: "jr. Software Engineer",
            intro: "I'm a Junior Software Engineer passionate about coding solutions. Armed with a Computer Science degree, I thrive on tackling challenges head-on. From personal projects to teamwork, I'm dedicated to crafting efficient software. Eager to learn, grow, and contribute to the tech world!"
        },
        {
            url: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
            name: "Adanwa Nwobodo",
            position: "jr. Software Engineer",
            intro: "I'm a Junior Software Engineer fascinated by the possibilities of code. With a degree in Computer Science, I enjoy solving challenges through programming. From personal coding experiments to collaborating with teams, I'm driven to create practical software solutions. Ready to embrace new opportunities and make a meaningful impact!"
        },
        {
            url: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
            name: "Braydon Overhill",
            position: "jr. Software Engineer",
            intro: "I'm a Junior Software Engineer fascinated by the world of coding. With a degree in Computer Science, I love problem-solving through programming. From solo coding to collaborating with teams, I enjoy creating functional software. Ready to learn, adapt, and make a positive impact!"
        }
    ]);
    return  (
        <>
            <h2 className='subtitle'>Meet our team</h2>
            <div className='member-container'>
                {
                    member.map((m, i) => {
                        return (
                            <>
                                <Member
                                    url={m.url}
                                    name={m.name}
                                    position={m.position}
                                    intro={m.intro}/>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MemberContainer;
