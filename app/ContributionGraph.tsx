// import React, { useState } from "react";

// const dates = [
//   "2023-01-23 16:28:40",
//   "2023-01-22 15:51:34",
//   // ...
// ];

// const ContributionGraphCalendarGrid = () => {
//   const [calendar, setCalendar] = useState([]);

//   const createCalendar = () => {
//     let day = 0;
//     let week: any = [];
//     for (let i = 0; i < 42; i++) {
//       if (day === 7) {
//         setCalendar((prevCalendar) => [...prevCalendar, week]);
//         week = [];
//         day = 0;
//       }

//       let date = new Date(2022, 8, i + 1);
//       let dateString = date.toDateString();
//       let isActive = dates.includes(dateString);

//       week.push({ date, isActive });
//       day++;
//     }
//   };

//   return (
//     <div>
//       <table>
//         <tbody>
//           {calendar.map((week, i) => (
//             <tr key={i}>
//               {week.map((day, j) => (
//                 <td key={j} className={day.isActive ? "bg-blue-500" : ""}>
//                   {day.date.getDate()}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ContributionGraph;

import type { FC } from "react";

interface ContributionGraphProps {}

const ContributionGraph: FC<ContributionGraphProps> = ({}) => {
  return <div>ContributionGraph</div>;
};

export default ContributionGraph;
