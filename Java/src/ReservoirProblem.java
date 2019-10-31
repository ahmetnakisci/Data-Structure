import java.util.Arrays;
import java.util.Random;

/*
    Reservoir sampling problem is a family of randomizing algorithms for
    randomly choosing sample of k items from a list S containing n items,
    where n is either very large or unknown.

    If we know the n we can choose a random number like : new Random().nextInt(int bound)
    0-bound
 */
public class ReservoirProblem {

    public void test(){
        Random r = new Random();
        int[] arr = new int[100];
        for(int i = 0;i<100;i++){
            arr[i] = r.nextInt()+1;
        }
        System.out.println( Arrays.toString(arr));

        System.out.println( Arrays.toString(new ReservoirSolver().reservoirSolver(arr,10)));

    }

}

class ReservoirSolver{
    int[] reservoirSolver(int[] numbers,int k){

        Random r = new Random();

        int[] randomSamples = new int[k];

        // copy the first k item from the original array
        for(int i=0;i<k;i++) randomSamples[i]= numbers[i];

        // the items from the original array
        // K+1 iteration because we already copied k items in the list we are going to chage them with k/i probability.

        for(int i= k+1; i<numbers.length;i++)
        {
            int j = r.nextInt(i)+1;
            if(j<k) randomSamples[j] = numbers[i];
        }


        return randomSamples;
    }
}
