import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";

const Schedule = ({ schedule }) => {
    
    const config = {
        viewType: "Resources",
        columns: [
            {name: "Monday", id: "d1"},
            {name: "Tuesday", id: "d2"},
            {name: "Wednesday", id: "d3"},
            {name: "Thursday", id: "d4"},
            {name: "Friday", id: "d5"}, 
            {name: "Saturday", id: "d6"}, 
        ],
        hourWidth: 50
    };

    return (
        <DayPilotCalendar {...config} />
    );
}

export default Schedule;