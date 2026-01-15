import "./timetable.css";

export default function App() {
  return (
    <div className="page">
      <div className="layout">
        <h1 className="title">📅 Timetable</h1>

        <div className="table">

          <div className="cell header">Day</div>
          <div className="cell header">1</div>
          <div className="cell header">2</div>
          <div className="cell header">3</div>
          <div className="cell header">4</div>
          <div className="cell header">5</div>
          <div className="cell header">6</div>

          {/* MON */}
          <div className="cell day">Mon</div>
          <div className="cell ec" data-title="25EC2101E – Digital Design & Computer Architecture" data-type="L" data-room="L303">EC2101</div>
          <div className="cell ec" data-title="25EC2101E – Digital Design & Computer Architecture" data-type="L" data-room="L303">EC2101</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="S" data-room="L303">SC1204</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="S" data-room="L303">SC1204</div>
          <div className="cell cs" data-title="25CS1201E – Front End Development Frameworks and UI Engineering" data-type="S" data-room="L303">CS1201</div>
          <div className="cell cs" data-title="25CS1201E – Front End Development Frameworks and UI Engineering" data-type="S" data-room="L303">CS1201</div>

          {/* TUE */}
          <div className="cell day">Tue</div>
          <div className="cell mt" data-title="25MT1205E – Mathematics for AI" data-type="L" data-room="L303">MT1205</div>
          <div className="cell mt" data-title="25MT1205E – Mathematics for AI" data-type="L" data-room="L303">MT1205</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="S" data-room="L303">SC1204</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="S" data-room="L303">SC1204</div>
          <div className="cell cs" data-title="25CS1201E – Front End Development Frameworks and UI Engineering" data-type="S" data-room="L303">CS1201</div>
          <div className="cell cs" data-title="25CS1201E – Front End Development Frameworks and UI Engineering" data-type="S" data-room="L303">CS1201</div>

          {/* WED */}
          <div className="cell day">Wed</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="L" data-room="L303">SC1204</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="L" data-room="L303">SC1204</div>
          <div className="cell ec" data-title="25EC2101E – Digital Design & Computer Architecture" data-type="S" data-room="L303">EC2101</div>
          <div className="cell ec" data-title="25EC2101E – Digital Design & Computer Architecture" data-type="S" data-room="L303">EC2101</div>
          <div className="cell uc" data-title="25UC1204E – Communication Skills for Engineers" data-type="P" data-room="L303">UC1204</div>
          <div className="cell uc" data-title="25UC1204E – Communication Skills for Engineers" data-type="P" data-room="L303">UC1204</div>

          {/* THU */}
          <div className="cell day">Thu</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="P" data-room="L303">SC1204</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="P" data-room="L303">SC1204</div>
          <div className="cell ec" data-title="25EC2101E – Digital Design & Computer Architecture" data-type="S" data-room="L303">EC2101</div>
          <div className="cell ec" data-title="25EC2101E – Digital Design & Computer Architecture" data-type="S" data-room="L303">EC2101</div>
          <div className="cell uc" data-title="25UC1204E – Communication Skills for Engineers" data-type="P" data-room="L303">UC1204</div>
          <div className="cell uc" data-title="25UC1204E – Communication Skills for Engineers" data-type="P" data-room="L303">UC1204</div>

          {/* FRI */}
          <div className="cell day">Fri</div>
          <div className="cell mt" data-title="25MT1205E – Mathematics for AI" data-type="P" data-room="L303">MT1205</div>
          <div className="cell mt" data-title="25MT1205E – Mathematics for AI" data-type="P" data-room="L303">MT1205</div>
          <div className="cell cs" data-title="25CS1201E – Front End Development Frameworks and UI Engineering" data-type="P" data-room="L303">CS1201</div>
          <div className="cell cs" data-title="25CS1201E – Front End Development Frameworks and UI Engineering" data-type="P" data-room="L303">CS1201</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="S" data-room="L303">SC1204</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="S" data-room="L303">SC1204</div>

          {/* SAT */}
          <div className="cell day">Sat</div>
          <div className="cell mt" data-title="25MT1205E – Mathematics for AI" data-type="P" data-room="L303">MT1205</div>
          <div className="cell mt" data-title="25MT1205E – Mathematics for AI" data-type="P" data-room="L303">MT1205</div>
          <div className="cell cs" data-title="25CS1201E – Front End Development Frameworks and UI Engineering" data-type="P" data-room="L303">CS1201</div>
          <div className="cell cs" data-title="25CS1201E – Front End Development Frameworks and UI Engineering" data-type="P" data-room="L303">CS1201</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="S" data-room="L303">SC1204</div>
          <div className="cell sc" data-title="25SC1204E – Data Structures and Algorithms - I" data-type="S" data-room="L303">SC1204</div>

        </div>
      </div>
    </div>
  );
}
