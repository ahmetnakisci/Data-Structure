import java.util.Arrays;

public class ArraysExamples {
    public void test(){

        ReverseArray ra = new ReverseArray();

        int[] testArray = {1,2,3,4,5,6};
        testArray = ra.reverseArray((testArray));

        System.out.println(Arrays.toString(testArray));


        Anagram a = new Anagram();
        System.out.println(a.isAnagram("abcd","dcab"));


        FindingDuplicates fd = new FindingDuplicates();
        int arr[] = {1,2,4,3,1};
        fd.findDuplicates(arr);
    }
}


/*
* Example : Reversing array in-place
*
*/
class ReverseArray{

    // print the array by reversing it (in place) => O(N) complexity
    public int[] reverseArray(int[] arr){
        int startPointer = 0;
        int endPointer = arr.length-1;

        while(endPointer>startPointer)
        {
            int temp = arr[startPointer];
            arr[startPointer] = arr[endPointer];
            arr[endPointer] = temp;

            startPointer++;
            endPointer--;
        }

        return arr;
    }

}

/*
* Example : Anagram Problem
*           An anagram is a play on words created by rearranging the letters of the original word to make a new word or phrase.
*           In this example the function checks whether two given words are anagram or not.
 */

class Anagram{

    public boolean isAnagram(String w1,String w2){

        char[] word1 = w1.toCharArray();
        char[] word2 = w2.toCharArray();

        if(word1.length != word2.length) return false;

        Arrays.sort(word1);
        Arrays.sort(word2);

        for(int i =0;i<word1.length;i++)
            if(word1[i] != word2[i])
                return false;

        return true;
    }

}


/*
* Example : Finding duplicates in array
*           In this example we want to find a duplicate number in a one dimensional array
*           in O(N) running time.
*           Note : All the values in the array is smaller than the array length.
 */
class FindingDuplicates{

    //  Floyd’s cycle finding algorithm
    public void findDuplicates(int[] arr){

        if(arr.length<=1)
            System.out.print("No Duplicates");
        else{

            // create slow and fast pointer to cycle
            int slow = arr[0];
            int fast = arr[arr[0]];

            while(slow != fast){
                slow = arr[slow];
                fast = arr[arr[fast]];
            }

            // loop to find entry
            // point of the cycle
            fast = 0;
            while (slow != fast)
            {
                slow = arr[slow];
                fast = arr[fast];
            }

            System.out.println(slow);


        }
    }

    // Alternative Approaches
    // 1. Brute force approach (Comparing each item to all other items) but it is O(N^2) complexity.
    // 2. Hash Map (it is not in place!!)

}

