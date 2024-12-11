import { useEffect, useState } from 'react';
import s from './style.module.css';

export default function Sponsor() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = () => {
            fetch("https://neymanacademy.shop/api/partners/")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    
                    setData(data)
                })
                .catch(err => console.log("error", err))

        }
        getData();
    }, [])



    return (
        <section className={`${s.sponsor__section} `} id='sponsors'>
           

            <h2 className='section__title'>
                Sponsorlar & Tərəfdaşlar
            </h2>
            <div className={s.creater}>
                <ul>
                    <li>
                    <img src="/assets/img/sponsor1.webp" alt="" />
                    <h4>Təşkilatçı</h4>
                    </li>

                    <li>
                    <img src="/assets/img/pasha.png" alt="" />
                    <h4>Sığorta sponsoru</h4>
                    </li>
                </ul>
            </div>
            
            <div className="container">
              
                <ul className={s.other__sponsors}>
                    {data.map((item, index) => (
                        <li key={index}>
                            <a href={item.website_link} target='_blank'>
                            <img src={item.image} alt="" />
                            
                            </a>
                            <h5>{item.title}</h5>
                            </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}