 import React from "react";

 import { useState } from "react";

 const Section = ({title, description, isVisible , setVisibleSection, hideSection}) => {

    return(
        <React.Fragment>
        <div className="border border-black">
        <h3>{title}</h3>
        {isVisible ? <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => hideSection()}>Hide</button>:
       <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setVisibleSection()}>Show</button>}
        
        {isVisible && <p>{description}</p>}
        </div>
            
        </React.Fragment>
    )
 }
 const Instamart = () => {

    const [visibleSection, setVisibleSection] = useState("about");

     modifyInstamart = () => {
        setVisibleSection("Instamart")
    }

    modifyTeam = () => {
        setVisibleSection("Team")
    }

     modifyCarrier = () => {
        setVisibleSection("Carrier")
    }

     hideSection = () => {
        setVisibleSection()
    }
    
    return(

        <React.Fragment>
            <div>
            <h1 className="font-bold p-3 m-3">Instamart</h1>
            
            <Section title={"Instamrt Page"}
            description ={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            isVisible={visibleSection === "Instamart"}
            setVisibleSection={()=>modifyInstamart('Instamrt')} hideSection = {()=>hideSection()}
            />

            <Section title={"Team Page"}
            description ={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            isVisible={visibleSection === "Team"}
            setVisibleSection={()=>modifyTeam('Team')} hideSection = {()=>hideSection()}
            />

            <Section title={"Carrier Page"}
            description ={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            isVisible={visibleSection === "Carrier"}
            setVisibleSection={()=>modifyCarrier('Carrier')} hideSection = {()=>hideSection()}
            />
               {/* <AboutInstamart/>
               <DetailsInstamart/>
               <TeamInstamart/> */}
            </div>
        </React.Fragment>
    )
 }

 export default Instamart;