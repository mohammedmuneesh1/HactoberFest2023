
//CODE FOR FILTERING NUMBER AND REMOVING 0 
function compact(arr){
            arr1=arr.filter(value=> value!=0 && typeof value=='number');
            console.log(arr1);
        }
        compact([0,1,false,2,"",3])
