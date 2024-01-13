import iconImage from "/images/icon-arrow.svg"
import { useState } from "react";
import { intervalToDuration } from 'date-fns';

const App = () => {
  const [days,setDays] = useState("--")
  const [months,setMonths] = useState("--")
  const [years,setYears] = useState("--")

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDay();

  const handleChange = (e) =>{
    e.preventDefault()
    const {name, value} = e.target;
    if (name === "days") {
      if(value >= 1 && value <= 31){
       
        setDays(value);
      }
      
      
    } else if (name === "months") {
      if(value >= 1 && value <= 12){
        
        setMonths(value);
      }
    
    } else if (name === "years") {
      if(value <= 2024){
        
        setYears(value);
      }
     
    }
  }
  const calculteAge = intervalToDuration({
    start: new Date(years, months, days),
    end: new Date(currentYear, currentMonth, currentDay)
  })

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      <section className="bg-white md:max-w-xl mx-8 h-auto  flex flex-col rounded-xl"
      style={{borderBottomRightRadius:200}}>
        <div className="flex flex-row gap-4 p-8">
          <div className="setup">
            <label htmlFor="">Day</label>
            <input type="number" placeholder=" DD"
            min={0}
            max={31}
            name="days"
            id="days"
            onChange={handleChange}
            value={days}
            />
          </div>
          <div className="setup">
            <label htmlFor="">Month</label>
            <input type="number" placeholder="  MM" 
             min={1}
             max={12}
             name="months"
             id="months"
             onChange={handleChange}
             value={months}
             />
          </div>
          <div className="setup">
            <label htmlFor="">Year</label>
            <input type="number" placeholder=" YYYY" 
             min={0}
             max={2024}
             name="years"
             id="years"
             onChange={handleChange}
             value={years}
             />
          </div>
        </div>
        <div className="relative p-4">
          <hr className="w-full border-black"/> 
          <img src={iconImage} alt="" className="bg-black rounded-full hover:bg-violet-500 p-2 cursor-pointer absolute flex -top-3 left-0 right-0 m-auto sm:left-auto"/>
        </div>
        <div className="flex flex-col ml-10">
          <div className="information">
              <span>{calculteAge.years ? calculteAge.years : "-- "}</span>
              <p>years</p>
          </div>
          <div className="information">
              <span>{calculteAge.months? calculteAge.months : "-- "}</span>
              <p>months</p>
          </div>
          <div className="information">
              <span>{calculteAge.days? calculteAge.days : "-- "}</span>
              <p>days</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
