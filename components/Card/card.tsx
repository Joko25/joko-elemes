import Image from 'next/image'
import classnames from 'classnames'
import Rating from "../Rating/rating"
import { useState } from 'react'
// import Button from "../Button/button"

interface cardProps{
    typeCard: string;
    dataCard: any;
}

export default function Card(props: cardProps){
    const {typeCard, dataCard} = props
    const variants = {
        "Pizza": "bg-category-Pizza",
        "Kebab": "bg-category-Kebab",
        "Doughnut": "bg-category-Doughnut",
        "Salmon": "bg-category-Salmon",
        "Cupcake":'bg-category-Cupcake'
    };

    const [activeCard, setActiveCard]= useState(null)

    const onHandleClick = (data)=>{
        console.log("#data", data)
    }

    return(
        <>
        <div className={classnames("mt-8 mb-8", typeCard==='trending' ?"grid grid-cols-4 gap-4" : 'card__category-flex space-x-4  overflow-y-hidden overflow-x-auto')}>
            {typeCard==="trending" && (
                dataCard.map((data, index)=>{
                    return (
                        <div key={index} className={classnames(`cursor-pointer transition duration-500 w-72 rounded-2xl p-7 hover:card__trending-hover`, variants[data.category])}>
                            <Image src={data.imgUrl ? data.imgUrl : '/images/pizza.png'} className="rounded-2xl" width="118" height="120"></Image>
                            <div>
                                <span className="text-black text-2xl">{data.label}</span><br/>
                                <span className="text-lg text-primary">{data.category}</span><br/>
                                <Rating rateTotal={data.rate}></Rating>
                            </div>
                        </div>
                    )
                })
            )}

            {typeCard==="category" &&(
                dataCard.map((data, index)=>{
                    return (
                        <div 
                        key={index} 
                        className={classnames(`cursor-pointer text-center transition duration-500 card__category-width rounded-2xl p-7 hover:card__category-hover`, variants[data.name] ? variants[data.name]: 'bg-category-Pizza', activeCard == index ? 'card__category-active':'')}
                        onMouseEnter={(val) =>{
                            setActiveCard(index)
                        } }
                        onMouseLeave={() => {
                            setActiveCard(null)
                        }}
                        >
                            <Image src={data.imgUrl ? data.imgUrl : '/images/pizza.png'} className="rounded-2xl" width="47" height="47"></Image>
                            <div>
                                <span className="text-black text-2xl">{data.name}</span><br/>
                                <span className="text-lg text-primary">{data.totalItem} Item</span><br/>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
            
        <div className={classnames("text-right mt-8 ", typeCard=='category'? '':'hidden')}>
            {/* <Button pill className="m-2 cursor-pointer" variant="primary"><span className="fa fa-chevron-left" /> PREV</Button>
            <Button pill className="cursor-pointer" variant="primary">NEXT <span className="fa fa-chevron-right" /></Button> */}
        </div>
        
        </>
    )
}
