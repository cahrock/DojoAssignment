
class StringManipulator{
    public static String trimAndConcat(String a, String b){
        String str1 = a.trim();
        String str2 = b.trim();
        return "1. Trim and Concat Method : " + str1.concat(str2);
    }

    public static String getIndexOrNull(String a, char b){
        String str = a;
        char chr = b;
        if(str.contains(a) == true){
            return "2. Index of "+ b + " in string "+ " ' " + a + " ' is " + str.indexOf(b);
        } else{
            return "2. No index in string";
        }

    }

    public static String getIndexOrNull(String a, String b){
        String str1 = a;
        String str2 = b;

        return "3. The indexOf " + str2 + " is :" + str1.indexOf(str2);
    }

    public static String concatSubstring(String a, int x, int y, String b){
        String substring = a.substring(x,y);

        return "4. The new substring using a starting and ending index is :" + substring.concat(b);
    }
}
