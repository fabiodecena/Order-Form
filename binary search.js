function binarySearch(arr,val) {      // function declaration with two parameters: list and value we are looking for.    
    let start = 0, end = arr.length-1;     // set two variables: start and end. start is the first index of the list, end is the last index of the list. 
    while (start <= end) {      // set a while loop that iterate until the start var is not 'crossing' the end of the list.
        let mid = Math.floor((start + end) / 2)  //set mid var as the middle index of the list (floor division).
        if (arr[mid] == val) {     // if the value of the middle index is equal to the value we are looking for, return the index of the value.
            return 'Value found at index: ' + mid;
        }else {     // if the value of the middle index is not equal to the value we are looking for, check if the value is smaller or bigger than the value of the middle index.                        
            if(val < arr[mid]) { // if the value is smaller, set the end var to the index before the middle index.
                end = mid - 1;
            }else { // if the value is bigger, set the start var to the index after the middle index.
                start = mid + 1
            }
        }
    }
    return 'Value not found!' // if the value is not found, return this message.
}

let myList = [-23, -12, -5, 1, 7, 24, 56, 99] // list have to be sorted!
console.log(binarySearch(myList, 24)) // call the function and print the result to the console.