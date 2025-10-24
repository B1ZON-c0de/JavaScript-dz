// type Props = {
//   isEnd: boolean;
//   isDraw: boolean;
//   currentMark: 'X' | 'O';
// };
//
// const InformationLayout = ({ isEnd, isDraw, currentMark }: Props) => {
//   return (
//     <div className="font-bold text-3xl ">
//       {isDraw ? (
//         'Ничья'
//       ) : !isDraw && isEnd ? (
//         <span>
//           Победа:{' '}
//           <b className={currentMark === 'X' ? 'text-blue-600' : 'text-red-600'}>
//             {currentMark}
//           </b>
//         </span>
//       ) : (
//         `Ходит: ${currentMark}`
//       )}
//     </div>
//   );
// };
//
// export default InformationLayout;

type Props = {
  isEnd: boolean;
  isDraw: boolean;
  currentMark: "X" | "O";
};

const InformationLayout = ({ isEnd, isDraw, currentMark }: Props) => {
  return (
    <div className="font-bold text-3xl ">
      {isDraw ? (
        "Ничья"
      ) : isEnd ? (
        <span>
          Победа:{" "}
          <b className={currentMark === "X" ? "text-blue-600" : "text-red-600"}>
            {currentMark}
          </b>
        </span>
      ) : (
        `Ходит: ${currentMark}`
      )}
    </div>
  );
};

export default InformationLayout;
