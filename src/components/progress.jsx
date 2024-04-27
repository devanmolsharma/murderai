import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";
import swal from 'sweetalert';



const timeToStay = 45; // 45 seconds
let newValue = 0;

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(window.isCrowThere);
      if (window.isCrowThere) {
        const newProgress = newValue + 100 / timeToStay;
        newValue = newProgress;
        console.log(newProgress);
        if (newProgress <= 100) {
          setProgress(Math.round(newProgress * 100) / 100);
        } else {
          swal({
            title: "Wohoo! Task Completed",
            text: "Crow brought in " + window.otherObjects.join(", ") ,
            icon: "success",
          }).then(() => {
            setProgress(0);
            location.reload();
          });
        }
      }
    }, 1000);
  }, []);

  return (
    <div className="progress-wrapper">
      <ProgressBar
        className="progress"
        completed={progress}
        bgColor="#3bec93"
        height="40px"
        isLabelVisible={false}
        labelColor="#1c1212"
        padding="4px"
        transitionTimingFunction="ease"
      />
    </div>
  );
};

export default Progress;
