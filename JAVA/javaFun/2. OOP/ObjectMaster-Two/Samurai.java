public class Samurai extends Human{
    private static int numSamurais =0;
    public Samurai(){
        this.setHealth(200);
        numSamurais++;
    }
    public Samurai(String name){
        super(name);
        numSamurais++;
    }

    public void deathBlow(Human human){
        human.setHealth(0);
        this.setHealth(this.getHealth()/2);
        System.out.println(this.getName()+ " Slayed "+ human.getName());
    }
    public void meditate(){
        this.setHealth(this.getHealth()+this.getHealth()/2);
    }
    public static int howMany(){
        return numSamurais;
    }
}
