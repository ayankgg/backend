// public class Main{

//     public static int binarySearch (int[]arr,int t,int si,int ei){
//         //base case
//         if(si>ei)return-1;

//         //work
//         int mid = si+((ei-si)/2);

//         if(arr[mid]==t) return mid;

//         if(arr[mid]>t){//left
//             binarySearch(arr,target,si,mid-1);
//         }else{//right
//             binarySearch(arr,target,mid+1,ei);
//         }
//     }
//     public static void main (String[]mayank){
//         int []arr= {1,2,3,4,5,6,7,8};
//         int target = 3; 

//         System.out.print(binarySearch(arr,target,0,arr.length-1));
//     }
// }