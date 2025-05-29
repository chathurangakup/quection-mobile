export default function  twoSum (numbers: number[], target: number): number[] {
const arr : number[] = [];
 for (let i = 0; i < numbers.length; i++) {
 for (let j =i+1; i < numbers.length; j++) {
      if(numbers[i]+numbers[j] == target){
          arr[0] =i;
          arr[1] =j;
          break;
      }
   }
}
return arr;
}