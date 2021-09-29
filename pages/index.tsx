import type { NextPage } from 'next'
import Layout from '../components/Layout/layout'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero/hero'
import Section from '../components/Section/section'
import Card from '../components/Card/card'
import Button from '../components/Button/button'
const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if(window.innerWidth <= 640) setIsMobile(true);
  })
  const tredingList = [
    {
      label:'Pizza Paperoni',
      category:'Pizza',
      imgUrl:'/images/pizza.png',
      rate:3
    },
    {
      label:'Pizza Meat',
      category:'Pizza',
      imgUrl:'/images/pizza-meat.png',
      rate:5
    },
    {
      label:'Doner Kebab',
      category:'Kebab',
      imgUrl:'/images/kebab.png',
      rate:3
    },
    {
      label:'Salmon Roll',
      category:'Salmon',
      imgUrl:'/images/sushi.png',
      rate:5
    },
    {
      label:'Cupcake Choco',
      category:'Cupcake',
      imgUrl:'/images/cockies.png',
      rate:5
    },
    {
      label:'Doughnut Milk',
      category:'Doughnut',
      imgUrl:'/images/doughnut.png',
      rate:5
    },
    {
      label:'Doughnut Unicord',
      category:'Doughnut',
      imgUrl:'/images/doughnut-unicorn.png',
      rate:2
    },
    {
      label:'Kathi Kebab',
      category:'Kebab',
      imgUrl:'/images/salad.png',
      rate:4
    },
  ]

  const categoryList = [
    {id:1, name:'Cupcake', totalItem:22, imgUrl:'/images/cupcake-icon.png'},
    {id:2, name:'Pizza', totalItem:25, imgUrl:'/images/pizza-icon.png'},
    {id:3, name:'Kebab' , totalItem:2, imgUrl:'/images/kebab-icon.png'},
    {id:4, name:'Salmon', totalItem:20, imgUrl:'/images/salmon-icon.png'},
    {id:5, name:'Doughnut', totalItem:7, imgUrl:'/images/doughnut-icon.png'},
    {id:6, name:'Fast Food', totalItem:22, imgUrl:'/images/cupcake-icon.png'},
    {id:7, name:'Drink', totalItem:22, imgUrl:'/images/cupcake-icon.png'},
    {id:8, name:'Drink', totalItem:22, imgUrl:'/images/cupcake-icon.png'},
    {id:9, name:'Drink', totalItem:22, imgUrl:'/images/cupcake-icon.png'},
    {id:10, name:'Drink', totalItem:22, imgUrl:'/images/cupcake-icon.png'},
    {id:11, name:'Drink', totalItem:22, imgUrl:'/images/cupcake-icon.png'},
    {id:12, name:'Drink', totalItem:22, imgUrl:'/images/cupcake-icon.png'},
    {id:13, name:'Drink', totalItem:22, imgUrl:'/images/cupcake-icon.png'}
  ]
  return (
    <>
    {/* <div className="container mx-auto font-rubik"> */}
      <Layout pageTitle="Joko Elemes.id" isHero={true} isMobile={isMobile}>
        {/* Hero */}
        <Hero></Hero>
        <Section sectionTitle="Browse Our Category" sectionDesc="Receipt">
          <div>
            <Card typeCard="category" dataCard={categoryList}></Card>
          </div>
        </Section>
        <Section sectionTitle="Browse Our Trending" sectionDesc="Receipt">
          <div>
            <Card typeCard="trending" dataCard={tredingList}></Card>
            <div className="text-center mt-8 ">
              <Button href="#" pill variant="primary">All Receipt</Button>
            </div>
            
          </div>
        </Section>
      </Layout>
    {/* </div> */}
      
    </>
  )
}

export default Home
