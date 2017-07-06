class FizzBuzz{
    public static String fizzNum(int x){
        String result;
        if(x % 3 == 0 & x % 5 == 0){
            result = "FizzBuzz";
        } else if(x % 5 == 0){
            result = "Buzz";
        } else if(x % 3 == 0){
            result = "Fizz";
        } else{
            result = String.valueOf(x);
            // result = Integer.toString(x);
        }
        return result;
    }

}
