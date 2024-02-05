import { useState, React, useEffect } from 'react'
import './App.css'
import { CoffeeCard } from './components/CoffeeCard'
import { Tabs } from './components/Tabs'
import { TABS } from './const'
import backgroundImg from './assets/bg-cafe.jpg'
import surfaceImg from './assets/vector.svg'

function App () {
  const [selectedTab, setSelectedTab] = useState(TABS.ALL)
  const [coffeeData, setCoffeeData] = useState(Array(0))

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(res => res.json())
      .then(data => setCoffeeData(data))
  }, [])

  return (
    <>
      <div className='main-surface'>
        <header>
          <h1 className='heading'>Our Collection</h1>
          <p className='description'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </header>
        <nav>
          <Tabs
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </nav>
        <main>
          {
            coffeeData.map((coffee, index) => (
              (selectedTab === TABS.ALL || coffee.available) &&
              <CoffeeCard
                key={index}
                name={coffee.name}
                img={coffee.image}
                price={coffee.price}
                rating={coffee.rating}
                votes={coffee.votes}
                popular={coffee.popular}
                available={coffee.available}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}

export default App
