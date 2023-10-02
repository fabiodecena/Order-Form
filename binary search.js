function binarySearch(arr,val) {      // function declaration.     
    let start = 0, end = arr.length-1, found = 'Value not found!';     // variable declaration and assignement: assigned zero (first) index of the list to start, the last index of the list to end and the appropriate default value to found (could be also -1).
    while (start <= end) {      // set a while loop that iterate until the start var is not 'crossing' the end of the list.
        let mid = Math.floor((start + end) / 2)  //set mid var as the middle index of the list (floor division)
        if (arr[mid] == val) {
            found = mid;
            break
        }else {
            if(val < arr[mid]) {
                end = mid - 1;
            }else {
                start = mid + 1
            }
        }
    }
    return found
}

let myList = [-23, -12, -5, 1, 7, 24, 56, 99] // list have to be sorted!
console.log(binarySearch(myList, 24))