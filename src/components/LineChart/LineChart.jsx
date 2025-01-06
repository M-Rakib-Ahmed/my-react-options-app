
import { LineChart as Lchart, Line, XAxis, YAxis} from 'recharts';
const LineChart = () => {
    const mathMarks = [
  { id: 1, name: "Alice", math: 85, physics: 90, biology: 88 },
  { id: 2, name: "Bob", math: 78, physics: 82, biology: 79 },
  { id: 3, name: "Charlie", math: 92, physics: 95, biology: 93 },
  { id: 4, name: "David", math: 66, physics: 70, biology: 68 },
  { id: 5, name: "Eva", math: 74, physics: 80, biology: 78 },
  { id: 6, name: "Frank", math: 88, physics: 91, biology: 85 },
  { id: 7, name: "Grace", math: 81, physics: 84, biology: 80 },
  { id: 8, name: "Henry", math: 95, physics: 97, biology: 94 },
  { id: 9, name: "Ivy", math: 69, physics: 75, biology: 73 },
  { id: 10, name: "Jack", math: 76, physics: 79, biology: 77 }
];



    return (
        <div>
           <Lchart  width={1000} height={400} data={mathMarks}>
           <YAxis></YAxis>
           <XAxis dataKey={'name'}></XAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={"physics"} stroke='yellow'></Line>
            
            </Lchart> 
        </div>
    );
};

export default LineChart;